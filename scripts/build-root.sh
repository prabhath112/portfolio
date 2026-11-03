#!/bin/sh
# Build for hosting at a site root (Vercel, the Oracle VM). GitHub Pages serves
# from /portfolio/ and keeps using `npm run build` with the base href in angular.json.
# Config (GA_MEASUREMENT_ID, SUPABASE_*) comes from the host's environment (Vercel env vars / Actions variables).
set -eu

# Analytics ID and contact-form config from the environment (same script as GitHub Pages).
sh scripts/inject-config.sh

# Vercel sets VERCEL=1 during its builds.
if [ "${VERCEL:-}" = "1" ]; then
  printf "export const hosting = { vercel: true };\n" > src/content/hosting.ts
fi

npx ng build --base-href /
node scripts/add-csp.mjs
test -f dist/portfolio/browser/index.html
