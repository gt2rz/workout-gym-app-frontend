import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
import { useAuth } from "@/context/auth";
import { useTheme } from "@/theme";

const { width: screenWidth } = Dimensions.get("window");

export default function LoginScreen() {
  const { colors } = useTheme();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigateToRegister = () => {
    router.push("/(auth)/register");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);

    try {
      // Aquí iría la lógica de autenticación
      // Por ahora simulamos un login exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await signIn();

      // Navegar a las tabs después del login exitoso
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Credenciales inválidas");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Recuperar Contraseña",
      "Funcionalidad próximamente disponible"
    );
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(
      "Login Social",
      `Funcionalidad de ${provider} próximamente disponible`
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Background Gradient */}
      <LinearGradient
        colors={[colors.primary + "10", "transparent"]}
        style={styles.backgroundGradient}
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
            <LinearGradient
              colors={[colors.primary, "#10B981"]}
              style={styles.logoContainer}
            >
              <Ionicons name="barbell" size={32} color={colors.background} />
            </LinearGradient>

            <Text style={[styles.title, { color: colors.text }]}>
              Bienvenido de nuevo
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Continúa tu progreso donde lo dejaste.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: colors.text }]}>
                Correo Electrónico
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    },
                  ]}
                  placeholder="ejemplo@correo.com"
                  placeholderTextColor={colors.textSecondary + "80"}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <View style={styles.inputIcon}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={colors.textSecondary}
                  />
                </View>
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <View style={styles.passwordLabelRow}>
                <Text style={[styles.inputLabel, { color: colors.text }]}>
                  Contraseña
                </Text>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text
                    style={[styles.forgotPassword, { color: colors.primary }]}
                  >
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                      color: colors.text,
                    },
                  ]}
                  placeholder="Ingresa tu contraseña"
                  placeholderTextColor={colors.textSecondary + "80"}
                  value={password}
                  onChangeText={setPassword}
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
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                { backgroundColor: colors.primary },
                isLoading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text
                style={[styles.loginButtonText, { color: colors.background }]}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social Login Section */}
          <View style={styles.socialSection}>
            <View style={styles.dividerContainer}>
              <View
                style={[styles.dividerLine, { backgroundColor: colors.border }]}
              />
              <Text
                style={[
                  styles.dividerText,
                  {
                    color: colors.textSecondary,
                    backgroundColor: colors.background,
                  },
                ]}
              >
                O continúa con
              </Text>
              <View
                style={[styles.dividerLine, { backgroundColor: colors.border }]}
              />
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity
                style={[
                  styles.socialButton,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  },
                ]}
                onPress={() => handleSocialLogin("Google")}
              >
                <Ionicons name="logo-google" size={20} color={colors.text} />
                <Text style={[styles.socialButtonText, { color: colors.text }]}>
                  Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.socialButton,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  },
                ]}
                onPress={() => handleSocialLogin("Apple")}
              >
                <Ionicons name="logo-apple" size={20} color={colors.text} />
                <Text style={[styles.socialButtonText, { color: colors.text }]}>
                  Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Section */}
          <View style={styles.footerSection}>
            <Text
              style={[styles.registerText, { color: colors.textSecondary }]}
            >
              ¿No tienes cuenta?{" "}
              <TouchableOpacity onPress={navigateToRegister}>
                <Text style={[styles.registerLink, { color: colors.primary }]}>
                  Regístrate
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
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
    height: 256,
    zIndex: 0,
  },
  keyboardContainer: {
    flex: 1,
    zIndex: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
    maxWidth: 448,
    alignSelf: "center",
    width: "100%",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 32,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "300",
  },
  formSection: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
  },
  passwordLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
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
    lineHeight: 24,
  },
  inputIcon: {
    position: "absolute",
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
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
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  socialSection: {
    marginTop: 32,
    marginBottom: 24,
    gap: 24,
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
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    flex: 1,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  footerSection: {
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 40,
  },
  registerText: {
    fontSize: 14,
    textAlign: "center",
  },
  registerLink: {
    fontSize: 14,
    fontWeight: "600",
  },
});
