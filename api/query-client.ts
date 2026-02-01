import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Por defecto, no re-intentar inmediatamente si falla (ahorra requests en dev)
            retry: 1,
            // Los datos se consideran frescos por 1 minuto
            staleTime: 1000 * 60,
        },
    },
});
