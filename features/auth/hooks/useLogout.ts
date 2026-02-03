import { useAuth } from "@/context/auth";
import * as Sentry from "@sentry/react-native";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useLogout = () => {
    const { signOut } = useAuth();
    const queryClient = useQueryClient();
    const router = useRouter();

    const logout = async () => {
        // 1. Limpiar estado de Sentry y de autenticación
        Sentry.setUser(null);
        await signOut();

        // 2. Limpiar caché de React Query (importante para seguridad y evitar datos fantasma)
        queryClient.clear();

        // 3. Redirigir al login
        router.replace("/(auth)/login");
    };

    return { logout };
};
