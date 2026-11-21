// Launch gate: fails while the built site still contains unconfirmed facts, draft banners,
// placeholder wording (requirement GLOB-3), or is missing launch configuration.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const banned = [/\bsample\b/i, /\bdemonstration\b/i, /must be confirmed with/i, /not yet specified/i, /lorem/i];
const problems = [];

async function* html(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* html(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

for await (const file of html(dist)) {
  const rel = '/' + path.relative(dist, file);
  const src = await readFile(file, 'utf8');
  const blockers = [...src.matchAll(/data-launch-blocker[^>]*>([\s\S]*?)<\/(?:span|div|p)>/g)].map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  for (const b of blockers) problems.push(`${rel}: ${b}`);
  const text = src.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of banned) if (re.test(text)) problems.push(`${rel}: placeholder wording matches ${re}`);
  const titles = src.match(/<title>/g)?.length ?? 0;
  if (titles !== 1) problems.push(`${rel}: expected one <title>, found ${titles}`);
  if (!/<link rel="canonical"/.test(src) && !rel.startsWith('/404')) problems.push(`${rel}: no canonical URL (set SITE_URL when building)`);
}
if (!process.env.PUBLIC_FORM_ENDPOINT) problems.push('build: PUBLIC_FORM_ENDPOINT is not set, so the inquiry form cannot send.');

if (problems.length) {
  console.log(`Not ready to launch: ${problems.length} item(s).\n`);
  for (const p of [...new Set(problems)]) console.log(' - ' + p);
  process.exit(1);
}
console.log('Launch check passed. Publishing still needs legal-compliance review and sign-off from Aldred and a qualified lawyer.');
