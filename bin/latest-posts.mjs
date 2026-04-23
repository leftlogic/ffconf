#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FEEDS = path.join(__dirname, '..', 'src', '_data', 'feeds.json');
const OUT = path.join(__dirname, '..', 'src', '_data', 'latestPosts.json');

const USER_AGENT = 'FFConfFeedBot/1.0 (+https://ffconf.org/feeds)';
const TIMEOUT_MS = 10000;
const CONCURRENCY = 6;

const decodeEntities = (s = '') =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim();

function firstMatch(block, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  return m ? decodeEntities(m[1]) : null;
}

function firstAttr(block, tag, attr) {
  const re = new RegExp(`<${tag}\\b[^>]*\\b${attr}\\s*=\\s*"([^"]+)"`, 'i');
  const m = block.match(re);
  return m ? decodeEntities(m[1]) : null;
}

function parseLatest(xml) {
  const isAtom = /<feed\b[^>]*xmlns=["']http:\/\/www\.w3\.org\/2005\/Atom/i.test(xml);
  const entryTag = isAtom ? 'entry' : 'item';
  const re = new RegExp(`<${entryTag}\\b[^>]*>([\\s\\S]*?)<\\/${entryTag}>`, 'i');
  const m = xml.match(re);
  if (!m) return null;
  const block = m[1];

  const title = firstMatch(block, 'title') || '';
  let url = null;
  if (isAtom) {
    const altHref = block.match(
      /<link\b[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i
    );
    url =
      (altHref && decodeEntities(altHref[1])) ||
      firstAttr(block, 'link', 'href') ||
      firstMatch(block, 'id');
  } else {
    url =
      firstMatch(block, 'link') ||
      firstAttr(block, 'link', 'href') ||
      firstMatch(block, 'guid');
  }

  const dateRaw =
    firstMatch(block, 'pubDate') ||
    firstMatch(block, 'published') ||
    firstMatch(block, 'updated') ||
    firstMatch(block, 'dc:date') ||
    firstMatch(block, 'date') ||
    null;

  let date = null;
  if (dateRaw) {
    const d = new Date(dateRaw);
    if (!isNaN(d.getTime())) date = d.toISOString();
  }

  if (!title || !url) return null;
  return { title: title.replace(/\s+/g, ' ').trim(), url: url.trim(), date };
}

async function fetchWithTimeout(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/atom+xml, application/rss+xml, application/xml;q=0.9, */*;q=0.8',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

async function runPool(items, worker, size) {
  const results = [];
  let i = 0;
  const run = async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  };
  await Promise.all(Array.from({ length: size }, run));
  return results;
}

async function main() {
  const feeds = JSON.parse(await readFile(FEEDS, 'utf8'));

  let existing = {};
  try {
    existing = JSON.parse(await readFile(OUT, 'utf8'));
  } catch {}

  const fetchedAt = new Date().toISOString();
  const out = {};
  let ok = 0;
  let fail = 0;

  const fmt = (ms) => `${Math.round(ms).toString().padStart(4)}ms`;

  await runPool(
    feeds,
    async (entry) => {
      const label = entry.name.padEnd(24);
      const tFetchStart = performance.now();
      try {
        const xml = await fetchWithTimeout(entry.feed);
        const fetchMs = performance.now() - tFetchStart;
        const latest = parseLatest(xml);
        if (!latest) throw new Error('no entry parsed');
        out[entry.feed] = { ...latest, fetchedAt };
        ok++;
        console.log(`✓ ${label} ${fmt(fetchMs)}  ${latest.title.slice(0, 60)}`);
      } catch (err) {
        fail++;
        const elapsed = performance.now() - tFetchStart;
        if (existing[entry.feed]) {
          out[entry.feed] = existing[entry.feed];
          console.log(`· ${label} ${fmt(elapsed)}  kept cached (${err.message})`);
        } else {
          console.log(`✗ ${label} ${fmt(elapsed)}  ${err.message}`);
        }
      }
    },
    CONCURRENCY
  );

  await writeFile(OUT, JSON.stringify(out, null, 2) + '\n');
  console.log(`\nWrote ${Object.keys(out).length} entries to ${path.relative(process.cwd(), OUT)} (${ok} fresh, ${fail} failed)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
