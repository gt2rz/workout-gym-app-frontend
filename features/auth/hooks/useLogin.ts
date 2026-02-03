import { useAuth } from "@/context/auth";
import * as Sentry from "@sentry/react-native";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { login, LoginPayload, LoginResponse } from "../services/auth.service";

export const useLogin = () => {
    const { signIn } = useAuth();
    const router = useRouter();

    return useMutation<LoginResponse, AxiosError<any>, LoginPayload>({
        mutationFn: login,
        onSuccess: async (response) => {
            // response: { data: User, meta: { access_token: string }, ... }
            Sentry.setUser({
                id: response.data.id.toString(),
                email: response.data.email,
                username: response.data.name,
            });
            await signIn(response.meta.access_token, response.data);
            router.replace("/(tabs)");
        },
        onError: (error) => {
            const message =
                error.response?.data?.message ||
                "Ocurrió un error al iniciar sesión. Intenta nuevamente.";

            // Capturar error en Sentry (excepto si es un simple 401 de credenciales inválidas si prefieres)
            Sentry.captureException(error, {
                tags: { section: "login" },
                extra: { email: error.config?.data ? JSON.parse(error.config.data).email : "n/a" },
            });

            Alert.alert("Error de Autenticación", message);
        },
    });
};
