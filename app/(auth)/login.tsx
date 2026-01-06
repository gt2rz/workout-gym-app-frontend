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
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      {/* Background Gradient */}
      <LinearGradient
        colors={[colors.background.light, "transparent"]}
        style={styles.backgroundGradient}
      />

      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        enabled
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Header Section */}
          <View
            style={[
              styles.headerSection,
              { backgroundColor: colors.background.transparent },
            ]}
          >
            {/* App Logo */}
            <LinearGradient
              colors={["#16df9cff", "#0d7051ff"]}
              style={styles.logoContainer}
            >
              <Ionicons
                name="barbell"
                size={32}
                color={colors.background.primary}
              />
            </LinearGradient>

            <Text style={[styles.title, { color: colors.text.primary }]}>
              Bienvenido de nuevo
            </Text>
            <Text style={[styles.subtitle, { color: colors.text.secondary }]}>
              Continúa tu progreso donde lo dejaste.
            </Text>
          </View>

          {/* Form Section */}
          <View
            style={[
              styles.formSection,
              { backgroundColor: colors.background.transparent },
            ]}
          >
            {/* Email Field */}
            <View
              style={[
                styles.inputGroup,
                { backgroundColor: colors.background.transparent },
              ]}
            >
              <Text style={[styles.inputLabel, { color: colors.text.primary }]}>
                Correo Electrónico
              </Text>
              <View
                style={[
                  styles.inputContainer,
                  {
                    backgroundColor: colors.background.primary,
                    borderColor: colors.border.medium,
                  },
                ]}
              >
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: colors.border.light,
                      color: colors.text.primary,
                    },
                  ]}
                  placeholder="ejemplo@correo.com"
                  placeholderTextColor={colors.text.muted + "80"}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <View
                  style={[
                    styles.inputIcon,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: colors.border.light,
                      height: 40,
                      justifyContent: "center",
                      top: 8,
                    },
                  ]}
                >
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={colors.text.secondary}
                  />
                </View>
              </View>
            </View>

            {/* Password Field */}
            <View
              style={[
                styles.inputGroup,
                { backgroundColor: colors.background.transparent },
              ]}
            >
              <View
                style={[
                  styles.passwordLabelRow,
                  { backgroundColor: colors.background.primary },
                ]}
              >
                <Text
                  style={[styles.inputLabel, { color: colors.text.primary }]}
                >
                  Contraseña
                </Text>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text
                    style={[styles.forgotPassword, { color: colors.text.link }]}
                  >
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.inputContainer,
                  {
                    backgroundColor: colors.background.primary,
                    borderColor: colors.border.medium,
                  },
                ]}
              >
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: colors.border.light,
                      color: colors.text.primary,
                    },
                  ]}
                  placeholder="Ingresa tu contraseña"
                  placeholderTextColor={colors.text.muted + "80"}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  style={[
                    styles.inputIcon,
                    {
                      backgroundColor: colors.background.secondary,
                      borderColor: colors.border.light,
                      height: 40,
                      justifyContent: "center",
                      top: 8,
                    },
                  ]}
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

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                { backgroundColor: colors.primary.main },
                isLoading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text
                style={[
                  styles.loginButtonText,
                  { color: colors.background.secondary },
                ]}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Text>
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
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity
                style={[
                  styles.socialButton,
                  {
                    backgroundColor: colors.background.secondary,
                    borderColor: colors.border.light,
                  },
                ]}
                onPress={() => handleSocialLogin("Google")}
              >
                <Ionicons
                  name="logo-google"
                  size={20}
                  color={colors.text.primary}
                />
                <Text
                  style={[
                    styles.socialButtonText,
                    { color: colors.text.primary },
                  ]}
                >
                  Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.socialButton,
                  {
                    backgroundColor: colors.background.secondary,
                    borderColor: colors.border.light,
                  },
                ]}
                onPress={() => handleSocialLogin("Apple")}
              >
                <Ionicons
                  name="logo-apple"
                  size={20}
                  color={colors.text.primary}
                />
                <Text
                  style={[
                    styles.socialButtonText,
                    { color: colors.text.primary },
                  ]}
                >
                  Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer Section */}
          <View style={styles.footerSection}>
            <Text
              style={[styles.registerText, { color: colors.text.secondary }]}
            >
              ¿No tienes cuenta?{" "}
              <TouchableOpacity onPress={navigateToRegister}>
                <Text
                  style={[styles.registerLink, { color: colors.primary.main }]}
                >
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
    height: 300,
    // zIndex: 0,
  },
  keyboardContainer: {
    flex: 1,
    zIndex: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    maxWidth: 448,
    alignSelf: "center",
    width: "100%",
    minHeight: "100%",
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
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
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
    shadowColor: "#3ecd1aff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
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
    backgroundColor: "transparent",
  },
  dividerContainer: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  dividerLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 0,
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    backgroundColor: "transparent",
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16,
    backgroundColor: "transparent",
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
    backgroundColor: "transparent",
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
