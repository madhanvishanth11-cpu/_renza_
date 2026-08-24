import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

// ─── Context ────────────────────────────────────────────────
const AuthContext = createContext(null);

// ─── Hook ───────────────────────────────────────────────────
export function useAuth() {
  return useContext(AuthContext);
}

// ─── Provider ───────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // Firebase user object
  const [profile, setProfile] = useState(null); // Firestore profile document
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Google Sign In ────────────────────────────────────────
  async function loginWithGoogle() {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleUserProfile(result.user);
      return result.user;
    } catch (err) {
      // User closed the popup – not a real error
      if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
        setError(err.message);
      }
      throw err;
    }
  }

  // ── Logout ───────────────────────────────────────────────
  async function logout() {
    setError(null);
    try {
      await signOut(auth);
      setProfile(null);
    } catch (err) {
      setError(err.message);
    }
  }

  // ── Create or Update Firestore Profile ───────────────────
  async function handleUserProfile(firebaseUser) {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      // Existing user – just update lastLoginAt
      await updateDoc(userRef, { lastLoginAt: serverTimestamp() });
      setProfile({ id: firebaseUser.uid, ...snapshot.data() });
    } else {
      // New user – create full profile
      const profileData = {
        name: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        photoURL: firebaseUser.photoURL || '',
        provider: 'google',
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      };
      await setDoc(userRef, profileData);
      setProfile({ id: firebaseUser.uid, ...profileData });
    }
  }

  // ── Listen to auth state changes ─────────────────────────
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Load existing profile on refresh/re-open
        const userRef = doc(db, 'users', firebaseUser.uid);
        const snapshot = await getDoc(userRef);
        if (snapshot.exists()) {
          setProfile({ id: firebaseUser.uid, ...snapshot.data() });
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    profile,
    loading,
    error,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
