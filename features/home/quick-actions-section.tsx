import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const QuickActionsSection = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.quickActionsContainer,
        { backgroundColor: colors.background.dark },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
        Accesos Rápidos
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.quickActionsContent}
      >
        <TouchableOpacity
          style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
        >
          <View
            style={[
              styles.quickActionIcon,
              { backgroundColor: "rgba(59, 130, 246, 0.2)" },
            ]}
          >
            <Ionicons name="add" size={20} color="#3b82f6" />
          </View>
          <Text style={[styles.quickActionText, { color: colors.text.light }]}>
            Registrar Peso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
        >
          <View
            style={[
              styles.quickActionIcon,
              { backgroundColor: "rgba(147, 51, 234, 0.2)" },
            ]}
          >
            <Ionicons name="calendar-outline" size={20} color="#9333ea" />
          </View>
          <Text style={[styles.quickActionText, { color: colors.text.light }]}>
            Crear Rutina
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
        >
          <View
            style={[
              styles.quickActionIcon,
              { backgroundColor: "rgba(249, 115, 22, 0.2)" },
            ]}
          >
            <Ionicons name="time-outline" size={20} color="#f97316" />
          </View>
          <Text style={[styles.quickActionText, { color: colors.text.light }]}>
            Historial
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quickActionsContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  quickActionsContent: {
    paddingHorizontal: 8,
    gap: 12,
    marginTop: 16,
  },
  quickActionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  quickActionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default QuickActionsSection;
