import Constants from "expo-constants";
import { Platform } from "react-native";

/**
 * Obtiene la URL de la API desde las variables de entorno.
 * Realiza una adaptación inteligente para dispositivos físicos y emuladores.
 */
const getApiUrl = () => {
    let apiUrl = process.env.EXPO_PUBLIC_API_URL;

    if (!apiUrl) {
        console.warn("⚠️ EXPO_PUBLIC_API_URL no está definida. Usando localhost por defecto.");
        apiUrl = "http://localhost:80";
    }

    // Si estamos en desarrollo y el usuario puso localhost, intentamos encontrar la IP real del host
    if (__DEV__ && apiUrl.includes("localhost")) {
        // Extraemos la IP de donde Metro está sirviendo el bundle
        const hostUri = Constants.expoConfig?.hostUri || Constants.manifest2?.extra?.expoGo?.debuggerHost || Constants.manifest?.hostUri;

        if (hostUri) {
            const ip = hostUri.split(":")[0];
            const newUrl = apiUrl.replace("localhost", ip);
            console.log(`[Env] Localhost detectado. Adaptando API URL a IP del host: ${newUrl}`);
            return newUrl;
        }

        // Fallback específico para Android Emulator si no se pudo obtener la IP del host
        if (Platform.OS === "android" && !Constants.isDevice) {
            const androidUrl = apiUrl.replace("localhost", "10.0.2.2");
            console.log(`[Env] Android Emulator sin IP de host. Usando: ${androidUrl}`);
            return androidUrl;
        }
    }

    console.log(`[Env] API URL Final: ${apiUrl}`);
    return apiUrl;
};

export const API_URL = getApiUrl();
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "default_api_key_value";
