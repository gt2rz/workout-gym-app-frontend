import { Platform } from "react-native";

/**
 * Obtiene la URL de la API desde las variables de entorno.
 * Realiza una adaptación inteligente para el Emulador de Android si la URL es localhost.
 */
const getApiUrl = () => {
    // 1. Leer la variable de entorno (definida en .env, .env.local, .env.production)
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    if (!apiUrl) {
        console.warn("⚠️ EXPO_PUBLIC_API_URL no está definida. Usando localhost por defecto.");
        return "http://localhost:80";
    }

    // 2. Adaptación para Android Emulator
    if (Platform.OS === "android" && apiUrl.includes("localhost")) {
        // Reemplazar 'localhost' con '10.0.2.2' para que el emulador vea el host
        return apiUrl.replace("localhost", "10.0.2.2");
    }

    // 3. iOS y Producción usan la URL tal cual viene
    return apiUrl;
};

export const API_URL = getApiUrl();
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "default_api_key_value";
