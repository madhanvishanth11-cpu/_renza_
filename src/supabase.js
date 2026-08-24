import { createClient } from '@supabase/supabase-js';

// ============================================================
// RENZA – Supabase Configuration
// ============================================================
// Initialized from environment variables with safe fallback
// to the official RENZA project keys.
// ============================================================

export const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || 'https://wjpkuzqtbsncrxarnvby.supabase.co').trim();
export const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_YJfLsTOfdFjt7GaCH0wbJg_EEW1byzx').trim();

let client = null;
try {
  if (supabaseUrl && supabaseUrl.startsWith('http')) {
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (e) {
  console.error("Supabase failed to initialize:", e);
}

export const supabase = client;
export default supabase;
