import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { useTheme } from "@/theme";
import { Stack } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");

export default function RegisterScreen() {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Usamos el hook de registro
  const { mutate: register, isPending: isLoading } = useRegister();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert("Error", "Por favor ingresa un email válido");
      return false;
    }

    if (!acceptTerms) {
      Alert.alert(
        "Error",
        "Debes aceptar los términos y la política de privacidad"
      );
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  const navigateToLogin = () => {
    router.push("/(auth)/login");
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(
      "Registro Social",
      `Funcionalidad de ${provider} próximamente disponible`
    );
  };

  const handleTermsPress = (type: "terms" | "privacy") => {
    Alert.alert(
      type === "terms" ? "Términos y Condiciones" : "Política de Privacidad",
      "Funcionalidad próximamente disponible"
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={[
                styles.backButton,
                { backgroundColor: colors.surface.primary + "80" },
              ]}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { backgroundColor: colors.background.primary }]}>
        {/* Background Decorative Element */}
        <View
          style={[
            styles.backgroundDecoration,
            { backgroundColor: colors.primary.main + "10" },
          ]}
        />

        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Header Section */}
            <View style={styles.headerSection}>
              {/* App Logo */}
              <View
                style={[
                  styles.logoContainer,
                  {
                    backgroundColor: colors.surface.primary,
                    borderColor: colors.primary.main + "20",
                  },
                ]}
              >
                <Ionicons name="barbell" size={32} color={colors.primary.main} />
              </View>

              <Text style={[styles.title, { color: colors.text.primary }]}>
                Empieza tu {"\n"}
                <Text style={{ color: colors.primary.main }}>Transformación</Text>
              </Text>
              <Text style={[styles.subtitle, { color: colors.text.secondary }]}>
                Registra entrenamientos, monitorea tu peso y rompe tus metas.
              </Text>
            </View>

            {/* Form Section */}
            <View style={styles.formSection}>
              {/* Full Name Field */}
              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                  Nombre Completo
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        backgroundColor: colors.surface.primary,
                        borderColor: colors.border.light,
                        color: colors.text.primary,
                      },
                    ]}
                    placeholder="Juan Pérez"
                    placeholderTextColor={colors.text.muted + "80"}
                    value={formData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                  <View style={styles.inputIcon}>
                    <Ionicons
                      name="person-outline"
                      size={20}
                      color={colors.text.secondary}
                    />
                  </View>
                </View>
              </View>

              {/* Email Field */}
              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                  Correo Electrónico
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        backgroundColor: colors.surface.primary,
                        borderColor: colors.border.light,
                        color: colors.text.primary,
                      },
                    ]}
                    placeholder="gymrat@ejemplo.com"
                    placeholderTextColor={colors.text.muted + "80"}
                    value={formData.email}
                    onChangeText={(text) => handleInputChange("email", text)}
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
              </View>

              {/* Password Field */}
              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                  Contraseña
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        backgroundColor: colors.surface.primary,
                        borderColor: colors.border.light,
                        color: colors.text.primary,
                      },
                    ]}
                    placeholder="••••••••"
                    placeholderTextColor={colors.text.muted + "80"}
                    value={formData.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
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
              </View>

              {/* Terms Checkbox */}
              <View style={styles.termsContainer}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    acceptTerms && { backgroundColor: colors.primary.main },
                  ]}
                  onPress={() => setAcceptTerms(!acceptTerms)}
                >
                  {acceptTerms && (
                    <Ionicons
                      name="checkmark"
                      size={12}
                      color={colors.background.primary}
                    />
                  )}
                </TouchableOpacity>
                <Text
                  style={[styles.termsText, { color: colors.text.secondary }]}
                >
                  Acepto los{" "}
                  <TouchableOpacity onPress={() => handleTermsPress("terms")}>
                    <Text style={[styles.termsLink, { color: colors.primary.main }]}>
                      Términos
                    </Text>
                  </TouchableOpacity>{" "}
                  y la{" "}
                  <TouchableOpacity onPress={() => handleTermsPress("privacy")}>
                    <Text style={[styles.termsLink, { color: colors.primary.main }]}>
                      Política de Privacidad
                    </Text>
                  </TouchableOpacity>
                  .
                </Text>
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  { backgroundColor: colors.primary.main },
                  isLoading && styles.submitButtonDisabled,
                ]}
                onPress={handleRegister}
                disabled={isLoading}
              >
                <Text
                  style={[
                    styles.submitButtonText,
                    { color: colors.background.primary },
                  ]}
                >
                  {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={colors.background.primary}
                />
              </TouchableOpacity>
            </View>

            {/* Social Login Section */}
            <View style={styles.socialSection}>
              <View style={styles.dividerContainer}>
                <View
                  style={[
                    styles.dividerLine,
                    { backgroundColor: colors.border.light },
                  ]}
                />
                <Text
                  style={[
                    styles.dividerText,
                    {
                      color: colors.text.secondary,
                      backgroundColor: colors.background.primary,
                    },
                  ]}
                >
                  O continúa con
                </Text>
                <View
                  style={[
                    styles.dividerLine,
                    { backgroundColor: colors.border.light },
                  ]}
                />
              </View>

              <View style={styles.socialButtons}>
                <TouchableOpacity
                  style={[styles.socialButton, styles.googleButton]}
                  onPress={() => handleSocialLogin("Google")}
                >
                  <Ionicons name="logo-google" size={20} color="#1f2937" />
                  <Text style={styles.socialButtonTextDark}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.socialButton, styles.appleButton]}
                  onPress={() => handleSocialLogin("Apple")}
                >
                  <Ionicons name="logo-apple" size={20} color="white" />
                  <Text style={styles.socialButtonTextLight}>Apple</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer Section */}
            <View style={styles.footerSection}>
              <Text style={[styles.loginText, { color: colors.text.secondary }]}>
                ¿Ya tienes una cuenta?{" "}
                <TouchableOpacity onPress={navigateToLogin}>
                  <Text style={[styles.loginLink, { color: colors.primary.main }]}>
                    Inicia Sesión
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundDecoration: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 256,
    height: 256,
    borderRadius: 128,
    transform: [{ translateY: -128 }, { translateX: 128 }],
    opacity: 0.6,
    zIndex: 0,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
  keyboardContainer: {
    flex: 1,
    zIndex: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 32,
    maxWidth: 448,
    alignSelf: "center",
    width: "100%",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
    lineHeight: 24,
    maxWidth: 280,
  },
  formSection: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    paddingLeft: 4,
  },
  inputContainer: {
    position: "relative",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingRight: 48,
    fontSize: 16,
    lineHeight: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputIcon: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  termsLink: {
    fontWeight: "600",
  },
  submitButton: {
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 16,
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.39,
    shadowRadius: 14,
    elevation: 8,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
  },
  socialSection: {
    marginTop: 16,
    marginBottom: 24,
    gap: 16,
  },
  dividerContainer: {
    position: "relative",
    alignItems: "center",
  },
  dividerLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 1,
  },
  dividerText: {
    paddingHorizontal: 8,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    flex: 1,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    gap: 8,
    fontWeight: "500",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  googleButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  appleButton: {
    backgroundColor: "#1f2937",
  },
  socialButtonTextDark: {
    color: "#1f2937",
    fontSize: 14,
    fontWeight: "500",
  },
  socialButtonTextLight: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  footerSection: {
    alignItems: "center",
    paddingBottom: 32,
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
