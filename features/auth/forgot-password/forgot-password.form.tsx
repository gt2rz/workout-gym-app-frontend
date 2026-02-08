import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";
import { useTheme } from "@/theme";
import { ForgotPasswordFormData, forgotPasswordSchema } from "./schemas";

export default function ForgotPasswordForm() {
    const { colors } = useTheme();
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate: forgotPassword, isPending: isLoading } = useForgotPassword();

    const onSubmit = (data: ForgotPasswordFormData) => {
        forgotPassword(data);
    };

    return (
        <View style={styles.formSection}>
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
                                    },
                                ]}
                                placeholder="ejemplo@correo.com"
                                placeholderTextColor={colors.text.muted + "80"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <View style={styles.inputIcon}>
                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color={colors.text.secondary}
                                />
                            </View>
                        </View>
                    )}
                />
                {errors.email && (
                    <Text style={{ color: colors.status.error, fontSize: 12 }}>
                        {errors.email.message}
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
                    {isLoading ? "Enviando..." : "Enviar enlace de recuperación"}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={[styles.backButtonText, { color: colors.text.secondary }]}>
                    Volver al inicio de sesión
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    backButton: {
        alignItems: "center",
        marginTop: 12,
    },
    backButtonText: {
        fontSize: 14,
    },
});
