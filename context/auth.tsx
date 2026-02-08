import { queryClient } from "@/core/api/query-client";
import { User } from "@/features/auth/services/auth.types";
import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (token: string, user: User) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

// Global logout function to be used outside of React components (e.g., API interceptors)
let globalSignOut: (() => Promise<void>) | null = null;

export const logout = async () => {
  if (globalSignOut) {
    await globalSignOut();
  }
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar token guardado al iniciar la app
    const loadAuth = async () => {
      try {
        const persistedToken = await SecureStore.getItemAsync("userToken");
        const persistedUser = await SecureStore.getItemAsync("userInfo");

        if (persistedToken) {
          setToken(persistedToken);
          if (persistedUser) {
            try {
              setUser(JSON.parse(persistedUser));
            } catch (e) {
              console.error("Error parsing user info", e);
            }
          }
        }
      } catch (e) {
        console.error("Error loading auth state", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadAuth();
  }, []);

  const signIn = async (newToken: string, newUser: User) => {
    await SecureStore.setItemAsync("userToken", newToken);
    await SecureStore.setItemAsync("userInfo", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    await SecureStore.deleteItemAsync("userInfo");
    queryClient.clear();
    setToken(null);
    setUser(null);
  };

  // Assign the internal signOut to the global reference
  useEffect(() => {
    globalSignOut = signOut;
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, token, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
