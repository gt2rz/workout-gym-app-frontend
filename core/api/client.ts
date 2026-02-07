import { API_KEY, API_URL } from "@/constants/env";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
    },
});

// Interceptor para inyectar el token de autenticación automáticamente
client.interceptors.request.use(async (config) => {
    try {
        const token = await SecureStore.getItemAsync("userToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.error("Error al obtener el token del SecureStore", error);
    }

    if (__DEV__) {
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    }
    return config;
});

client.interceptors.response.use(
    (response) => response,
    (error) => {
        if (__DEV__) {
            const url = error.config ? `${error.config.baseURL}${error.config.url}` : "Unknown URL";
            console.error(`[API Error] ${error.message} at ${url}`);
        }
        return Promise.reject(error);
    }
);

export default client;
