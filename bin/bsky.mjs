import './utils.mjs';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

function buildBody(text, facets) {
  if (!facets || facets.length === 0) {
    return `<p>${text}</p>`;
  }

  let html = text;
  // Sort facets by byteStart descending to avoid index shifting
  const sortedFacets = [...facets].sort(
    (a, b) => b.index.byteStart - a.index.byteStart
  );

  for (const facet of sortedFacets) {
    const start = facet.index.byteStart;
    const end = facet.index.byteEnd;
    const feature = facet.features[0];
    let href;
    if (feature.$type === 'app.bsky.richtext.facet#mention') {
      // Extract handle from text (remove @)
      const handle = text.substring(start + 1, end); // +1 to skip @
      href = `https://bsky.app/profile/${handle}`;
    } else if (feature.$type === 'app.bsky.richtext.facet#tag') {
      const tag = feature.tag;
      href = `https://bsky.app/hashtag/${tag}`;
    } else {
      continue; // Skip unknown facet types
    }
    const linkText = text.substring(start, end);
    const link = `<a href="${href}">${linkText}</a>`;
    html = html.substring(0, start) + link + html.substring(end);
  }

  return `<p>${html}</p>`;
}

async function main() {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const photosDir = path.join(
      __dirname,
      '..',
      'src',
      'images',
      'posts',
      'photos'
    );

    // Resolve the relative JSON path against this module's URL so it becomes a valid file:// URL
    const jsonPath = new URL('../src/_data/bsky-urls.json', import.meta.url);
    const postsPath = new URL('../src/_data/posts.json', import.meta.url);

    let existingPosts = [];
    try {
      const postsRaw = await readFile(postsPath, 'utf8');
      existingPosts = JSON.parse(postsRaw);
    } catch {
      // posts.json doesn't exist or is empty, existingPosts remains []
    }

    // readFile accepts a file URL as well as a path; return value is a string when encoding is provided
    const raw = await readFile(jsonPath, 'utf8');
    const urls = JSON.parse(raw);

    const results = [];

    for (const url of urls) {
      if (existingPosts.some((post) => post.url === url)) {
        continue;
      }

      // Convert bsky.app URL to AT URI
      const match = url.match(
        /https:\/\/bsky\.app\/profile\/([^/]+)\/post\/([^/]+)/
      );
      if (!match) {
        console.error(`Invalid URL format: ${url}`);
        continue;
      }
      const handle = match[1];
      const postId = match[2];
      const atUri = `at://${handle}/app.bsky.feed.post/${postId}`;

      // Fetch from public API
      const apiUrl = `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(
        atUri
      )}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error(
          `Failed to fetch ${url}: ${response.status} ${response.statusText}`
        );
        continue;
      }
      const data = await response.json();
      const post = data.thread.post;

      let images = undefined;
      if (post.embed && post.embed.$type === 'app.bsky.embed.images#view') {
        images = [];
        for (let i = 0; i < post.embed.images.length; i++) {
          const image = post.embed.images[i];
          const filename = `${postId}_${i}.jpg`;
          const filepath = path.join(photosDir, filename);
          const imgResponse = await fetch(image.fullsize);
          const buffer = await imgResponse.arrayBuffer();
          await writeFile(filepath, Buffer.from(buffer));
          images.push(`/images/posts/photos/${filename}`);
        }
      }

      const transformed = {
        body: buildBody(post.record.text, post.record.facets),
        date: post.record.createdAt.replace('Z', '+0000'),
        url,
        avatar: post.author.avatar,
        username: `@${post.author.handle}`,
        images,
      };

      results.push(transformed);
    }

    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}

main();
