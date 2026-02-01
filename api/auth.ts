import client from "./client";

export interface LoginPayload {
    email: string;
    password?: string;
    device?: string;
    [key: string]: any; // Flexibilidad
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
 * Inicia sesión en la aplicación.
 * @param payload Datos de login (email, password, device)
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const { data } = await client.post<LoginResponse>("/api/v1/auth/login", payload);
    return data;
};
