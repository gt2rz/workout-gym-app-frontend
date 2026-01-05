import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
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
    SecureStore.getItemAsync("userToken").then((value) => {
      if (value) {
        setToken(value);
        setUser({ name: "Usuario de Prueba", email: "test@example.com" }); // Datos mock
      }
      setIsLoading(false);
    });
  }, []);

  const signIn = async () => {
    const mockToken = "12345abcde";
    await SecureStore.setItemAsync("userToken", mockToken);
    setToken(mockToken);
    setUser({ name: "Usuario de Prueba", email: "test@example.com" });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
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
