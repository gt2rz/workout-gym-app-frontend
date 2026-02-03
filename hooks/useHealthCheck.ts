import { fetchHealth } from "@/core/services/health.service";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook de ejemplo para consumir el servicio de salud.
 * Utiliza React Query para manejar el estado de carga, error y caché.
 */
export const useHealthCheck = () => {
    return useQuery({
        queryKey: ["health"],
        queryFn: fetchHealth,
    });
};
