import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";

import { Text } from "@/components/Themed";
import ForgotPasswordForm from "@/features/auth/forgot-password/forgot-password.form";
import { useTheme } from "@/theme";

export default function ForgotPasswordScreen() {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background.primary }]}>
            <LinearGradient
                colors={[colors.background.light, "transparent"]}
                style={styles.backgroundGradient}
            />

            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.headerSection}>
                        <LinearGradient
                            colors={["#16df9cff", "#0d7051ff"]}
                            style={styles.logoContainer}
                        >
                            <Ionicons
                                name="key-outline"
                                size={32}
                                color={colors.background.primary}
                            />
                        </LinearGradient>

                        <Text style={[styles.title, { color: colors.text.primary }]}>
                            ¿Olvidaste tu contraseña?
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text.secondary }]}>
                            No te preocupes, dinos tu correo y te enviaremos un enlace.
                        </Text>
                    </View>

                    <ForgotPasswordForm />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 300,
    },
    keyboardContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 64,
        width: "100%",
        maxWidth: 448,
        alignSelf: "center",
    },
    headerSection: {
        alignItems: "center",
        marginBottom: 32,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },
});
