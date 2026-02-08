import { useAuth } from "@/context/auth";
import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";

/**
 * Hook para obtener y compartir los datos de la pantalla de inicio.
 * Gracias a React Query, la petición se hace una sola vez y los datos
 * se comparten entre todos los componentes que usen este hook.
 */
export const useHome = () => {
    const { token } = useAuth();

    const query = useQuery({
        queryKey: ["home-data"],
        queryFn: homeService.getHomeData,
        // Opcional: Refrescar cada 5 minutos automáticamente si la app está en primer plano
        staleTime: 1000 * 60 * 5,
        enabled: !!token,
    });

    return {
        ...query,
        homeData: query.data?.data, // Acceso directo al objeto principal
    };
};
