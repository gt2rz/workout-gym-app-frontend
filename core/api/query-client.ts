import { QueryClient } from "@tanstack/react-query";

/**
 * Instancia global de QueryClient para manejar el estado de las peticiones
 * y el caché de la aplicación (React Query).
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutos
            retry: 1, // Reintentar una vez si falla
        },
    },
});
