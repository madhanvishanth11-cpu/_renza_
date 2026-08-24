import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, supabaseUrl, supabaseAnonKey } from '../supabase';

// ─── Context ────────────────────────────────────────────────
const AuthContext = createContext(null);

// ─── Hook ───────────────────────────────────────────────────
export function useAuth() {
  return useContext(AuthContext);
}

// ─── Provider ───────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // Mapped user object
  const [profile, setProfile] = useState(null); // Database profile document
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if we are running in Mock/Demo mode (keys not set or placeholders)
  const isMockMode = !supabase || supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY';

  // Helper to map Supabase user to match Firebase property naming for compatibility
  function mapSupabaseUser(supabaseUser) {
    if (!supabaseUser) return null;
    return {
      ...supabaseUser,
      uid: supabaseUser.id,
      displayName: supabaseUser.user_metadata?.full_name || '',
      photoURL: supabaseUser.user_metadata?.avatar_url || '',
      email: supabaseUser.email,
    };
  }

  // ── Google Sign In ────────────────────────────────────────
  async function loginWithGoogle() {
    setError(null);
    if (isMockMode) {
      console.warn("RENZA Auth: Supabase is not configured. Falling back to Mock Login.");
      
      // Simulate quick loading and set mock Google user
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = {
            id: 'mock-google-id',
            email: 'madhan.vishanth@example.com',
            user_metadata: {
              full_name: 'Madhan Vishanth',
              avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150'
            },
            app_metadata: {
              provider: 'google'
            }
          };
          const mapped = mapSupabaseUser(mockUser);
          setUser(mapped);
          setProfile({
            id: mockUser.id,
            name: mockUser.user_metadata.full_name,
            email: mockUser.email,
            photoURL: mockUser.user_metadata.avatar_url,
            provider: 'google',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
          });
          resolve(mapped);
        }, 800);
      });
    }

    try {
      const { data, error: err } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (err) throw err;
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  // ── Email Login (Password) ───────────────────────────────
  async function loginWithEmail(email, password) {
    setError(null);
    if (isMockMode) {
      console.warn("RENZA Auth: Supabase is not configured. Falling back to Mock Login.");
      
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = {
            id: 'mock-email-id',
            email: email,
            user_metadata: {
              full_name: email.split('@')[0],
              avatar_url: ''
            },
            app_metadata: {
              provider: 'email'
            }
          };
          const mapped = mapSupabaseUser(mockUser);
          setUser(mapped);
          setProfile({
            id: mockUser.id,
            name: mockUser.user_metadata.full_name,
            email: mockUser.email,
            photoURL: '',
            provider: 'email',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
          });
          resolve(mapped);
        }, 800);
      });
    }

    try {
      const { data, error: err } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (err) throw err;
      
      const mapped = mapSupabaseUser(data.user);
      setUser(mapped);
      await handleUserProfile(data.user);
      return mapped;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  // ── Email Sign Up ────────────────────────────────────────
  async function signUpWithEmail(email, password, name) {
    setError(null);
    if (isMockMode) {
      console.warn("RENZA Auth: Supabase is not configured. Falling back to Mock Sign Up.");
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = {
            id: 'mock-signup-id',
            email: email,
            user_metadata: {
              full_name: name,
              avatar_url: ''
            },
            app_metadata: {
              provider: 'email'
            }
          };
          const mapped = mapSupabaseUser(mockUser);
          setUser(mapped);
          setProfile({
            id: mockUser.id,
            name: name,
            email: mockUser.email,
            photoURL: '',
            provider: 'email',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
          });
          resolve(mapped);
        }, 800);
      });
    }

    try {
      const { data, error: err } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });
      if (err) throw err;
      
      if (data.user) {
        const mapped = mapSupabaseUser(data.user);
        setUser(mapped);
        await handleUserProfile(data.user);
        return mapped;
      }
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }

  // ── Logout ───────────────────────────────────────────────
  async function logout() {
    setError(null);
    if (isMockMode) {
      setUser(null);
      setProfile(null);
      return;
    }

    try {
      const { error: err } = await supabase.auth.signOut();
      if (err) throw err;
      setUser(null);
      setProfile(null);
    } catch (err) {
      setError(err.message);
    }
  }

  // ── Create or Update Profiles table in database ──────────
  async function handleUserProfile(supabaseUser) {
    if (!supabaseUser || isMockMode) return;
    try {
      // Query profile
      const { data, error: fetchErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single();

      if (data) {
        // Update last login
        await supabase
          .from('profiles')
          .update({ lastLoginAt: new Date().toISOString() })
          .eq('id', supabaseUser.id);

        setProfile({
          id: data.id,
          name: data.name,
          email: data.email,
          photoURL: data.photoURL,
          provider: data.provider,
          createdAt: data.createdAt,
          lastLoginAt: new Date().toISOString(),
        });
      } else {
        // Create profile
        const profileData = {
          id: supabaseUser.id,
          name: supabaseUser.user_metadata?.full_name || supabaseUser.email.split('@')[0],
          email: supabaseUser.email,
          photoURL: supabaseUser.user_metadata?.avatar_url || '',
          provider: supabaseUser.app_metadata?.provider || 'google',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };

        const { error: insertErr } = await supabase
          .from('profiles')
          .insert([profileData]);

        if (!insertErr) {
          setProfile(profileData);
        } else {
          console.error("Error inserting profile:", insertErr);
        }
      }
    } catch (err) {
      console.error("Error handling user profile:", err);
    }
  }

  // ── Listen to auth state changes ─────────────────────────
  useEffect(() => {
    if (isMockMode) {
      // No session check needed in mock mode
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const mapped = mapSupabaseUser(session.user);
        setUser(mapped);
        handleUserProfile(session.user);
      } else {
        setUser(null);
        setProfile(null);
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const mapped = mapSupabaseUser(session.user);
        setUser(mapped);
        await handleUserProfile(session.user);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    profile,
    loading,
    error,
    loginWithGoogle,
    loginWithEmail,
    signUpWithEmail,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
