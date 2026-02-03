import * as Sentry from "@sentry/react-native";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

// TODO: Definir tipos reales cuando exista el endpoint de registro
interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export const useRegister = () => {
    const router = useRouter();

    // Simulamos la llamada a la API por ahora
    const registerMock = async (payload: RegisterPayload) => {
        // Aquí iría la llamada real con axios:
        // await client.post('/auth/register', payload);
        return new Promise((resolve) => setTimeout(resolve, 1500));
    };

    return useMutation({
        mutationFn: registerMock,
        onSuccess: () => {
            Alert.alert("Registro Exitoso", "¡Cuenta creada correctamente!", [
                {
                    text: "OK",
                    onPress: () => router.replace("/(auth)/login"),
                },
            ]);
        },
        onError: (error) => {
            Sentry.captureException(error, {
                tags: { section: "register" },
            });
            Alert.alert("Error", "No se pudo crear la cuenta. Intenta nuevamente.");
        },
    });
};
