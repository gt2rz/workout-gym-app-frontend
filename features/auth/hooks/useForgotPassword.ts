import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Alert } from "react-native";
import { forgotPassword } from "../services/auth.service";
import { ForgotPasswordPayload } from "../services/auth.types";

export const useForgotPassword = () => {
    return useMutation<any, AxiosError<any>, ForgotPasswordPayload>({
        mutationFn: forgotPassword,
        onSuccess: () => {
            Alert.alert(
                "Correo enviado",
                "Si el correo está registrado, recibirás un enlace para restablecer tu contraseña."
            );
        },
        onError: (error) => {
            const message =
                error.response?.data?.message ||
                "Ocurrió un error al procesar la solicitud.";
            Alert.alert("Error", message);
        },
    });
};
