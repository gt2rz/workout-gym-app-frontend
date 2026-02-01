import { API_URL } from "@/constants/env";
import axios from "axios";

const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "default_api_key_value",
    },
});

// Interceptor para logs en desarrollo (ayuda a ver qué URL se está llamando)
client.interceptors.request.use((config) => {
    if (__DEV__) {
        // Loguear la URL completa para evitar confusiones
        console.log(`[API Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    }
    return config;
});

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (__DEV__) {
            const url = error.config ? `${error.config.baseURL}${error.config.url}` : "Unknown URL";
            console.error(`[API Error] ${error.message} at ${url}`);
        }
        return Promise.reject(error);
    }
);

export default client;
