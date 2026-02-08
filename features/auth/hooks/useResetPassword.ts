import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { resetPassword } from "../services/auth.service";
import { ResetPasswordPayload } from "../services/auth.types";

export const useResetPassword = () => {
    const router = useRouter();

    return useMutation<any, AxiosError<any>, ResetPasswordPayload>({
        mutationFn: resetPassword,
        onSuccess: () => {
            Alert.alert(
                "Éxito",
                "Tu contraseña ha sido restablecida correctamente.",
                [{ text: "OK", onPress: () => router.replace("/login") }]
            );
        },
        onError: (error) => {
            const message =
                error.response?.data?.message ||
                "Ocurrió un error al restablecer la contraseña.";
            Alert.alert("Error", message);
        },
    });
};
