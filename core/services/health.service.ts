import client from "@/core/api/client";

/**
 * Servicio de salud para verificar la conexión con el backend.
 */
export const fetchHealth = async () => {
    const { data } = await client.get("/");
    return data;
};
