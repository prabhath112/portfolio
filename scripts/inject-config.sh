#!/bin/sh
# Write build-time config from the environment into src/content/. Used by every
# build (GitHub Pages, Vercel, Oracle VM) so none of these values live in source.
#   GA_MEASUREMENT_ID          Google Analytics (consent-gated)
#   SUPABASE_URL               https://<ref>.supabase.co   (contact form)
#   SUPABASE_PUBLISHABLE_KEY   sb_publishable_...          (contact form, public by design)
set -eu

if [ -n "${GA_MEASUREMENT_ID:-}" ]; then
  echo "$GA_MEASUREMENT_ID" | grep -Eq '^G-[A-Z0-9]+$' || { echo "GA_MEASUREMENT_ID is malformed"; exit 1; }
  printf "export const analytics = { measurementId: '%s' };\n" "$GA_MEASUREMENT_ID" > src/content/analytics.ts
fi

if [ -n "${SUPABASE_URL:-}" ] && [ -n "${SUPABASE_PUBLISHABLE_KEY:-}" ]; then
  echo "$SUPABASE_URL" | grep -Eq '^https://[a-z0-9]+\.supabase\.co$' || { echo "SUPABASE_URL is malformed"; exit 1; }
  echo "$SUPABASE_PUBLISHABLE_KEY" | grep -Eq '^sb_publishable_[A-Za-z0-9_-]+$' || { echo "SUPABASE_PUBLISHABLE_KEY is malformed"; exit 1; }
  printf "export const contactForm = { url: '%s', key: '%s' };\n" "$SUPABASE_URL" "$SUPABASE_PUBLISHABLE_KEY" > src/content/contact-form.ts
fi
