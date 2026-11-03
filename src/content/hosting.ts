// Which host this build is for. scripts/build-root.sh sets `vercel` to true for the
// Vercel build only, so Vercel Web Analytics and Speed Insights are requested only
// where they exist (/_vercel/* routes), and only after analytics consent.
export const hosting = {
  vercel: false,
};
