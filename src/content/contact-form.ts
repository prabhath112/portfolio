// Supabase endpoint for the contact form. Intentionally empty in source: the build
// (scripts/inject-config.sh) writes the real values from the SUPABASE_URL and
// SUPABASE_PUBLISHABLE_KEY variables. While empty, the form is not shown.
// The publishable key is public by design; the table only accepts inserts (RLS).
export const contactForm = {
  url: '',
  key: '',
};
