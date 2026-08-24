import { createClient } from '@supabase/supabase-js';

// ============================================================
// RENZA – Supabase Configuration
// ============================================================
// Replace the placeholders below with your actual Supabase URL
// and Anonymous Key from:
// Supabase Console → Project Settings → API
// ============================================================

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
