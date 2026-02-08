import client from "@/core/api/client";
import {
    ForgotPasswordPayload,
    LoginPayload,
    LoginResponse,
    ResetPasswordPayload,
} from "./auth.types";

/**
 * Servicios de API específicos para la funcionalidad de Autenticación.
 * Ubicado dentro de la feature 'auth' para mantener el encapsulamiento.
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const { data } = await client.post<LoginResponse>("/api/v1/auth/login", payload);
    return data;
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
    const { data } = await client.post("/api/v1/auth/password/forgot", payload);
    return data;
};

export const resetPassword = async (payload: ResetPasswordPayload) => {
    const { data } = await client.post("/api/v1/auth/password/reset", payload);
    return data;
};
