
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
import LoginForm from "@/features/auth/login/login.form";
import { useTheme } from "@/theme";

export default function LoginScreen() {
  const { colors } = useTheme();

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

          {/* Render the extracted Form Component */}
          <LoginForm />

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
});
