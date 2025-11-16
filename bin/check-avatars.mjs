import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const posts = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'src', '_data', 'posts.json'),
    'utf8'
  )
);

async function downloadAvatar(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`Downloaded avatar to ${filepath}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
  }
}

async function main() {
  for (const post of posts) {
    const username = post.username.startsWith('@')
      ? post.username.slice(1)
      : post.username;
    const avatarPath = path.join(
      __dirname,
      '..',
      'src',
      'images',
      'posts',
      'avatars',
      `${username}.jpg`
    );

    if (!fs.existsSync(avatarPath)) {
      console.log(`Avatar for ${username} not found, downloading...`);
      await downloadAvatar(post.avatar, avatarPath);
    } else {
      console.log(`Avatar for ${username} already exists.`);
    }
  }
}

main();
