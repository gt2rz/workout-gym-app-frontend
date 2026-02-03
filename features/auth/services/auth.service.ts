import client from "@/core/api/client";

export interface LoginPayload {
    email: string;
    password?: string;
    device?: string;
    [key: string]: any;
}

export interface User {
    id: number;
    name: string;
    email: string;
    initials: string;
    registered_at: string;
}

export interface LoginResponse {
    data: User;
    status: string;
    meta: {
        access_token: string;
        token_type: string;
    };
}

/**
 * Servicios de API específicos para la funcionalidad de Autenticación.
 * Ubicado dentro de la feature 'auth' para mantener el encapsulamiento.
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const { data } = await client.post<LoginResponse>("/api/v1/auth/login", payload);
    return data;
};

// Aquí podrías agregar register, forgotPassword, etc.
