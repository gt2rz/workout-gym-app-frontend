import { router } from "expo-router";
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import LoginForm from "@/features/auth/login/login.form";

export default function LoginScreen() {



  const navigateToRegister = () => {
    router.push("/(auth)/register");
  };

  const openWebsite = () => {
    Linking.openURL("https://gt2rz.dev");
  };

  return (
    <ImageBackground
      source={require("@/assets/images/bg_login.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Text style={styles.appName}>
              Work
              <Text
                style={{
                  color: "rgba(197, 176, 19, 1)",
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                out!
              </Text>
            </Text>
            <Text style={styles.subtitle}>Gym app</Text>
          </View>

          <LoginForm />

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta?</Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.registerLink}>Registrarse</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.copyrightContainer}>
            <Text style={styles.copyrightText}>
              © 2026{" "}
              <Text onPress={openWebsite} style={styles.linkText}>
                gt2rz
              </Text>
              . Todos los derechos reservados.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 43, 0.7)", // Overlay oscuro semi-transparente
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
    backgroundColor: "transparent",
    width: "100%",
  },
  logoText: {
    fontSize: 60,
    marginBottom: 10,
  },
  appName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c4c7acff",
    textTransform: "uppercase",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  registerText: {
    fontSize: 16,
    color: "#cacbaaff",
    marginRight: 5,
  },
  registerLink: {
    fontSize: 16,
    color: "#ced817ff",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  copyrightContainer: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "transparent",
    alignContent: "center",
  },
  copyrightText: {
    fontSize: 14,
    color: "#888",
  },
  linkText: {
    color: "#ced817ff",
  },
});
