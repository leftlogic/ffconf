/* eslint-disable camelcase */
// Usage: MAILCOACH_TOKEN=… node add-vouchers.mjs vouchers.csv 5 [--dry]
import '@remy/envy';
import { readFile } from 'node:fs/promises';

const BASE = process.env.MAILCOACH_URL ?? 'https://mail.leftlogic.com';
const TOKEN = process.env.MAILCOACH_TOKEN;
const [file, listId] = process.argv.slice(2);
const dry = process.argv.includes('--dry');

if (!TOKEN || !file || !listId) {
  console.error('Usage: MAILCOACH_TOKEN=… node add-vouchers.mjs <csv> <list_id> [--dry]');
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const api = async (path, opts = {}) => {
  const res = await fetch(`${BASE}/api${path}`, { headers, ...opts });
  if (!res.ok) { throw new Error(`${res.status} ${await res.text()}`); }
  return res.json();
};

const parseCsv = (text) => {
  const [head, ...lines] = text.trim().split(/\r?\n/);
  const cols = head.split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
  return lines.filter(Boolean).map((line) => {
    const vals = line.split(',').map((v) => v.trim().replace(/^"|"$/g, ''));
    return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  });
};

const rows = parseCsv(await readFile(file, 'utf8'));

for (const { email, voucher_code } of rows) {
  try {
    const qs = new URLSearchParams({ 'filter[email]': email });
    const { data } = await api(`/email-lists/${listId}/subscribers?${qs}`);
    // guard against the filter being ignored
    const sub = data.find((s) => s.email.toLowerCase() === email.toLowerCase());

    if (!sub) {
      console.warn(`✗ ${email}: not on list`);
      continue;
    }

    const id = sub.uuid ?? sub.id;
    const extra_attributes = { ...sub.extra_attributes, voucher_code };

    if (dry) {
      console.log(`~ ${email} (${id}):`, extra_attributes);
      continue;
    }

    await api(`/subscribers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ email: sub.email, extra_attributes }),
    });
    console.log(`✓ ${email}: ${voucher_code}`);
  } catch (e) {
    console.error(`✗ ${email}: ${e.message}`);
  }
}
