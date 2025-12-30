import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function HomeScreen() {
  const navigateToLogin = () => {
    router.push("/(auth)/login");
  };

  const navigateToRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GymApp Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Enlaces temporales para testing */}
      <View style={styles.tempLinksContainer}>
        <Text style={styles.tempTitle}>Enlaces temporales:</Text>

        <TouchableOpacity style={styles.tempButton} onPress={navigateToLogin}>
          <Text style={styles.tempButtonText}>🔑 Ver Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tempButton, styles.registerButton]}
          onPress={navigateToRegister}
        >
          <Text style={styles.tempButtonText}>📝 Ver Registro</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  tempLinksContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  tempTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
    color: "#666",
  },
  tempButton: {
    backgroundColor: "#3498db",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButton: {
    backgroundColor: "#27ae60",
  },
  tempButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
