import { login, LoginPayload, LoginResponse } from "@/api/auth";
import { useAuth } from "@/context/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

export const useLogin = () => {
    const { signIn } = useAuth();
    const router = useRouter();

    return useMutation<LoginResponse, AxiosError<any>, LoginPayload>({
        mutationFn: login,
        onSuccess: async (response) => {
            // response: { data: User, meta: { access_token: string }, ... }
            await signIn(response.meta.access_token, response.data);
            router.replace("/(tabs)");
        },
        onError: (error) => {
            const message =
                error.response?.data?.message ||
                "Ocurrió un error al iniciar sesión. Intenta nuevamente.";
            Alert.alert("Error de Autenticación", message);
        },
    });
};
