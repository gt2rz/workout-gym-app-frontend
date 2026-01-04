import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar token guardado al iniciar la app
    SecureStore.getItemAsync('userToken').then(value => {
      if (value) {
        setToken(value);
        setUser({ name: "Usuario de Prueba", email: "test@example.com" }); // Datos mock
      }
      setIsLoading(false);
    });
  }, []);

  const signIn = async () => {
    const mockToken = "12345abcde";
    await SecureStore.setItemAsync('userToken', mockToken);
    setToken(mockToken);
    setUser({ name: "Usuario de Prueba", email: "test@example.com" });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync('userToken');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, token, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
