import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Controller } from "react-rule-form"; // Wait, it should be react-hook-form

import { useResetPassword } from "@/features/auth/hooks/useResetPassword";
import { useTheme } from "@/theme";
import { ResetPasswordFormData, resetPasswordSchema } from "../forgot-password/schemas";

// Fix import
import { useForm as useRHF } from "react-hook-form";

export default function ResetPasswordForm() {
    const { colors } = useTheme();
    const { token, email } = useLocalSearchParams<{ token: string; email: string }>();
    const [showPassword, setShowPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useRHF<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: email || "",
            password: "",
            password_confirmation: "",
        },
    });

    const { mutate: resetPassword, isPending: isLoading } = useResetPassword();

    const onSubmit = (data: ResetPasswordFormData) => {
        if (!token) {
            alert("Token de recuperación no encontrado");
            return;
        }
        resetPassword({
            ...data,
            token,
        });
    };

    return (
        <View style={styles.formSection}>
            {/* Email Field (Disabled or hidden usually, but backend might need it) */}
            <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                    Correo Electrónico
                </Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[
                                    styles.textInput,
                                    {
                                        backgroundColor: colors.background.secondary,
                                        borderColor: errors.email ? colors.status.error : colors.border.light,
                                        color: colors.text.primary,
                                        opacity: 0.6,
                                    },
                                ]}
                                editable={false}
                                value={value}
                            />
                        </View>
                    )}
                />
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                    Nueva Contraseña
                </Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[
                                    styles.textInput,
                                    {
                                        backgroundColor: colors.background.secondary,
                                        borderColor: errors.password ? colors.status.error : colors.border.light,
                                        color: colors.text.primary,
                                    },
                                ]}
                                placeholder="Mínimo 8 caracteres"
                                placeholderTextColor={colors.text.muted + "80"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity
                                style={styles.inputIcon}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color={colors.text.secondary}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                {errors.password && (
                    <Text style={{ color: colors.status.error, fontSize: 12 }}>
                        {errors.password.message}
                    </Text>
                )}
            </View>

            {/* Confirm Password Field */}
            <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                    Confirmar Contraseña
                </Text>
                <Controller
                    control={control}
                    name="password_confirmation"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={[
                                    styles.textInput,
                                    {
                                        backgroundColor: colors.background.secondary,
                                        borderColor: errors.password_confirmation ? colors.status.error : colors.border.light,
                                        color: colors.text.primary,
                                    },
                                ]}
                                placeholder="Repite la contraseña"
                                placeholderTextColor={colors.text.muted + "80"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={!showPassword}
                            />
                        </View>
                    )}
                />
                {errors.password_confirmation && (
                    <Text style={{ color: colors.status.error, fontSize: 12 }}>
                        {errors.password_confirmation.message}
                    </Text>
                )}
            </View>

            <TouchableOpacity
                style={[
                    styles.submitButton,
                    { backgroundColor: colors.primary.main },
                    isLoading && styles.buttonDisabled,
                ]}
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            >
                <Text style={[styles.submitButtonText, { color: colors.background.secondary }]}>
                    {isLoading ? "Guardando..." : "Actualizar contraseña"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formSection: {
        gap: 20,
        marginTop: 20,
    },
    inputGroup: {
        gap: 8,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: "500",
    },
    inputContainer: {
        position: "relative",
    },
    textInput: {
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingRight: 48,
        fontSize: 16,
    },
    inputIcon: {
        position: "absolute",
        right: 12,
        top: 18,
    },
    submitButton: {
        height: 56,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
