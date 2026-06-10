#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

const EMBEDDING_MODEL = 'Xenova/bge-large-en-v1.5';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sessions = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'graphql', 'data', 'sessions.json')), 'utf-8');
const SESSION_SUMMARY_DIR = path.join(__dirname, '..', 'src', '_data', 'session_summary');
const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'articles');

const OUT_ARTICLES_RELATED = path.join(__dirname, '..', 'src', '_data', 'articlesRelated.json');
const OUT_TALKS_RELATED = path.join(__dirname, '..', 'src', '_data', 'talksRelated.json');
const OUT_ARTICLE_TALKS_RELATED = path.join(__dirname, '..', 'src', '_data', 'articleTalksRelated.json');

// Helper to compute cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0.0, normA = 0.0, normB = 0.0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) { return 0; }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Clean title from front matter
function parseArticle(fileContent, filename) {
  const fmMatch = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  let title = filename.replace('.md', '');
  let body = fileContent;

  if (fmMatch) {
    const fm = fmMatch[1];
    body = fileContent.substring(fmMatch[0].length).trim();
    const titleLine = fm.split('\n').find(line => line.trim().startsWith('title:'));
    if (titleLine) {
      title = titleLine.replace(/^\s*title:\s*/, '').trim();
      // Remove surrounding quotes if any
      if ((title.startsWith('"') && title.endsWith('"')) || (title.startsWith("'") && title.endsWith("'"))) {
        title = title.substring(1, title.length - 1);
      }
    }
  }

  // Eleventy URL path format: /articles/<slug>/
  const slug = filename.replace('.md', '');
  const url = `/articles/${slug}/`;

  return { title, body, url, slug };
}

// Clean title from session summary markdown
function parseSessionSummary(fileContent, filename) {
  const slug = filename.replace('.md', '');
  const url = `/talks/${slug}/`;

  // find the title from the sessions.json data if available
  const sessionData = sessions.find(s => s.slug === slug);
  return { slug, url, title: sessionData.title, body: fileContent.trim().split('---')[0] + `---${sessionData.description}` };
}

async function main() {
  console.log(`🔄 Loading local embedding model (${EMBEDDING_MODEL})...`);
  const extractor = await pipeline('feature-extraction', EMBEDDING_MODEL);
  console.log('✅ Model loaded successfully.');

  // 1. Read session summaries
  if (!fs.existsSync(SESSION_SUMMARY_DIR)) {
    console.error(`Error: Session summary directory does not exist at ${SESSION_SUMMARY_DIR}`);
    process.exit(1);
  }

  const sessionFiles = fs.readdirSync(SESSION_SUMMARY_DIR).filter(file => file.endsWith('.md'));
  const sessions = [];
  console.log(`\n📖 Reading ${sessionFiles.length} session summaries...`);
  for (const file of sessionFiles) {
    const rawContent = fs.readFileSync(path.join(SESSION_SUMMARY_DIR, file), 'utf-8');
    const parsed = parseSessionSummary(rawContent, file);
    sessions.push(parsed);
  }

  // 2. Read articles
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`Error: Articles directory does not exist at ${ARTICLES_DIR}`);
    process.exit(1);
  }

  const articleFiles = fs.readdirSync(ARTICLES_DIR).filter(file => file.endsWith('.md') && file !== 'index.md' && file !== 'rss.md');
  const articles = [];
  console.log(`📖 Reading ${articleFiles.length} articles...`);
  for (const file of articleFiles) {
    const rawContent = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
    const parsed = parseArticle(rawContent, file);
    articles.push(parsed);
  }

  // 3. Generate embeddings
  console.log('\n🧠 Generating embeddings for session summaries...');
  for (let i = 0; i < sessions.length; i++) {
    const s = sessions[i];
    process.stdout.write(`Embedding session [${i + 1}/${sessions.length}]: ${s.slug}\r`);

    const textToEmbed = `Title: ${s.title}\nContent: ${s.body}`;

    const output = await extractor(textToEmbed, { pooling: 'mean', normalize: true });
    s.embedding = Array.from(output.data);
  }
  process.stdout.write('\n✅ Session embeddings completed.\n');

  console.log('\n🧠 Generating embeddings for articles...');
  for (let i = 0; i < articles.length; i++) {
    const a = articles[i];
    process.stdout.write(`Embedding article [${i + 1}/${articles.length}]: ${a.title.slice(0, 30)}...\r`);

    const textToEmbed = `Title: ${a.title}\nContent: ${a.body.slice(0, 1500)}`;
    const output = await extractor(textToEmbed, { pooling: 'mean', normalize: true });
    a.embedding = Array.from(output.data);
  }

  process.stdout.write('\n✅ Article embeddings completed.\n');

  // 4. Calculate similarities and build the mappings
  console.log('\n⚖️ Calculating cosine similarities...');

  // Mapping A: Session Slug -> Related Articles
  const articlesRelatedMap = {};
  for (const session of sessions) {
    const scores = [];
    for (const article of articles) {
      const score = cosineSimilarity(session.embedding, article.embedding);
      scores.push({
        title: article.title,
        url: article.url,
        score: parseFloat(score.toFixed(4))
      });
    }
    scores.sort((a, b) => b.score - a.score);
    articlesRelatedMap[session.slug] = scores.filter(_ => _.score > 0.49); //slice(0, 5);
  }

  // Mapping B: Session Slug -> Related Sessions (Talk-to-Talk)
  const talksRelatedMap = {};
  for (let i = 0; i < sessions.length; i++) {
    const current = sessions[i];
    const scores = [];
    for (let j = 0; j < sessions.length; j++) {
      if (i === j) { continue; }
      const score = cosineSimilarity(current.embedding, sessions[j].embedding);
      scores.push({
        title: sessions[j].title,
        url: sessions[j].url,
        slug: sessions[j].slug,
        score: parseFloat(score.toFixed(4))
      });
    }
    scores.sort((a, b) => b.score - a.score);
    talksRelatedMap[current.slug] = scores.filter(_ => _.score > 0.49); //slice(0, 5);
  }

  // Mapping C: Article Slug/URL -> Related Sessions (Article-to-Talk)
  const articleTalksRelatedMap = {};
  for (const article of articles) {
    const scores = [];
    for (const session of sessions) {
      const score = cosineSimilarity(article.embedding, session.embedding);
      scores.push({
        title: session.title,
        url: session.url,
        slug: session.slug,
        score: parseFloat(score.toFixed(4))
      });
    }
    scores.sort((a, b) => b.score - a.score);
    // Support mapping by both absolute URL and slug
    articleTalksRelatedMap[article.url] = scores.filter(_ => _.score > 0.49); //slice(0, 5);
  }

  // 5. Output files
  fs.writeFileSync(OUT_ARTICLES_RELATED, JSON.stringify(articlesRelatedMap, null, 2) + '\n');
  fs.writeFileSync(OUT_TALKS_RELATED, JSON.stringify(talksRelatedMap, null, 2) + '\n');
  fs.writeFileSync(OUT_ARTICLE_TALKS_RELATED, JSON.stringify(articleTalksRelatedMap, null, 2) + '\n');

  console.log('\n🎉 Success! All related mappings generated.');
  console.log(`💾 Saved ${sessions.length} session mappings to ${path.relative(process.cwd(), OUT_ARTICLES_RELATED)} (Articles related to each talk)`);
  console.log(`💾 Saved ${sessions.length} session-to-session mappings to ${path.relative(process.cwd(), OUT_TALKS_RELATED)} (Talks related to each talk)`);
  console.log(`💾 Saved ${articles.length} article-to-session mappings to ${path.relative(process.cwd(), OUT_ARTICLE_TALKS_RELATED)} (Talks related to each article)\n`);
}

main().catch(err => {
  console.error('Fatal error during execution:', err);
  process.exit(1);
});

