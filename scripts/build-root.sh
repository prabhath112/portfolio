#!/bin/sh
# Build for hosting at a site root (Vercel, the Oracle VM). GitHub Pages serves
# from /portfolio/ and keeps using `npm run build` with the base href in angular.json.
# GA_MEASUREMENT_ID comes from the host's environment (Vercel env var / Actions variable).
set -eu

if [ -n "${GA_MEASUREMENT_ID:-}" ]; then
  echo "$GA_MEASUREMENT_ID" | grep -Eq '^G-[A-Z0-9]+$' || { echo "GA_MEASUREMENT_ID is malformed"; exit 1; }
  printf "export const analytics = { measurementId: '%s' };\n" "$GA_MEASUREMENT_ID" > src/content/analytics.ts
fi

npx ng build --base-href /
node scripts/add-csp.mjs
test -f dist/portfolio/browser/index.html
