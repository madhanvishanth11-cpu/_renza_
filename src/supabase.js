import { createClient } from '@supabase/supabase-js';

// ============================================================
// RENZA – Supabase Configuration
// ============================================================
// Replace the placeholders below with your actual Supabase URL
// and Anonymous Key from:
// Supabase Console → Project Settings → API
// ============================================================

export const supabaseUrl = 'YOUR_SUPABASE_URL';
export const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

// Safe initialization to prevent app crash with placeholder URLs
let client = null;
try {
  if (supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseUrl.startsWith('http')) {
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (e) {
  console.error("Supabase failed to initialize:", e);
}

export const supabase = client;
