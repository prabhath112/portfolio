// Angular's autoCsp cannot be combined with SSR/prerendering, and GitHub Pages
// cannot send headers, so inject a hash-based CSP <meta> into the built pages.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(import.meta.dirname, '../dist/portfolio/browser');

for (const name of ['index.html', 'index.csr.html']) {
  const file = join(dir, name);
  let html = readFileSync(file, 'utf8');

  const hashes = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => `'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`);

  const csp = [
    "default-src 'none'",
    `script-src 'self' ${hashes.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'none'",
    "object-src 'none'",
  ].join('; ');

  html = html.replace('<head>', `<head><meta http-equiv="Content-Security-Policy" content="${csp}"><meta name="referrer" content="no-referrer">`);
  writeFileSync(file, html);
  console.log(`CSP added to ${name} (${hashes.length} inline script hashes)`);
}
