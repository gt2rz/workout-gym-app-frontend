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

export interface ForgotPasswordPayload {
    email: string;
}

export interface ResetPasswordPayload {
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
}
