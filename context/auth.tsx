import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

import { User } from "@/features/auth/services/auth.types";

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

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar token guardado al iniciar la app
    const loadAuth = async () => {
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
      setIsLoading(false);
    };

    loadAuth();
  }, []);

  const signIn = async (newToken: string, newUser: User) => {
    await SecureStore.setItemAsync("userToken", newToken);
    // Opcional: Guardar usuario en SecureStore o AsyncStorage si quieres persistencia offline de datos básicos
    await SecureStore.setItemAsync("userInfo", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    await SecureStore.deleteItemAsync("userInfo");
    setToken(null);
    setUser(null);
  };

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
