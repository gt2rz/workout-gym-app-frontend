import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Device from "expo-device";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { useTheme } from "@/theme";
import { LoginFormData, loginSchema } from "./schemas";

export default function LoginForm() {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  // Configuración de React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Mutation para manejar el login (Encapsulada en hook)
  const { mutate: login, isPending: isLoading } = useLogin();

  const handleRegister = () => {
    router.push("/(auth)/register");
  };

  const onSubmit = (data: LoginFormData) => {
    login({
      email: data.email,
      password: data.password,
      device: Device.deviceName || Device.modelName || (Platform.OS === "android" ? "Android Device" : "iOS Device"),
    });
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
    <>
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
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={[
                  styles.inputContainer,
                  {
                    backgroundColor: colors.background.primary,
                    borderColor: errors.email
                      ? colors.status.error
                      : colors.border.medium,
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
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
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
            )}
          />
          {errors.email && (
            <Text style={{ color: colors.status.error, fontSize: 12 }}>
              {errors.email.message}
            </Text>
          )}
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
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={[
                  styles.inputContainer,
                  {
                    backgroundColor: colors.background.primary,
                    borderColor: errors.password
                      ? colors.status.error
                      : colors.border.medium,
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
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
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
            )}
          />
          {errors.password && (
            <Text style={{ color: colors.status.error, fontSize: 12 }}>
              {errors.password.message}
            </Text>
          )}
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            { backgroundColor: colors.primary.main },
            isLoading && styles.loginButtonDisabled,
          ]}
          onPress={handleSubmit(onSubmit)}
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
          <TouchableOpacity onPress={handleRegister}>
            <Text
              style={[styles.registerLink, { color: colors.primary.main }]}
            >
              Regístrate
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    height: 1, // Changed to 1 so it's visible (was 0 in login.tsx)
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
    marginTop: 12,
    paddingTop: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 14,
    textAlign: "center",
  },
  registerLink: {
    fontSize: 16,
    fontWeight: "600",
  },
});
