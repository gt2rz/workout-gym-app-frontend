import { Text, View } from "@/components/Themed";
import { ScreenWrapper } from "@/core/components/ScreenWrapper";
import React from "react";
import { StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Configuración</Text>
        <Text>Contenido próximamente...</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SettingsScreen;
