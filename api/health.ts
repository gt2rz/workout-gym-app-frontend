import client from "./client";

/**
 * Ejemplo de función de servicio.
 * Realiza una petición GET a la raíz de la API.
 */
export const fetchHealth = async () => {
    // Ajusta "/" al endpoint real que quieras probar, por ejemplo "/health" o "/status"
    const { data } = await client.get("/");
    return data;
};
