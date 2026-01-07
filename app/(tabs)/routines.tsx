import { Text, View } from "@/components/Themed";
import {
  MacrocyclesTab,
  MicrocyclesTab,
  SplitsTab,
} from "@/features/routines/components";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

type ViewType = "Macrociclos" | "Microciclos" | "Splits";

export default function RoutinesScreen() {
  const { colors } = useTheme();
  const [selectedView, setSelectedView] = useState<ViewType>("Macrociclos");

  const viewOptions: ViewType[] = ["Macrociclos", "Microciclos", "Splits"];

  const handleRoutinePress = (id: string) => {
    router.push(`/routine/${id}`);
  };

  const renderTabContent = () => {
    switch (selectedView) {
      case "Macrociclos":
        return <MacrocyclesTab onRoutinePress={handleRoutinePress} />;
      case "Microciclos":
        return <MicrocyclesTab onRoutinePress={handleRoutinePress} />;
      case "Splits":
        return <SplitsTab onRoutinePress={handleRoutinePress} />;
      default:
        return <MacrocyclesTab onRoutinePress={handleRoutinePress} />;
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Mis Rutinas",
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background.primary,
          },
          headerTitleStyle: {
            color: colors.text.primary,
            fontWeight: "bold",
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Text style={[styles.editButton, { color: colors.primary.main }]}>
                Editar
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <View
        style={[
          styles.container,
          { backgroundColor: colors.background.primary },
        ]}
      >
        {/* Enhanced Segmented Control */}
        <View
          style={[
            styles.segmentedContainer,
            { backgroundColor: colors.background.secondary + "40" },
          ]}
        >
          <View
            style={[
              styles.segmentedControl,
              { backgroundColor: colors.background.secondary + "60" },
            ]}
          >
            {viewOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.segmentedOption,
                  selectedView === option && [
                    styles.segmentedActive,
                    { backgroundColor: colors.primary.main },
                  ],
                ]}
                onPress={() => setSelectedView(option)}
              >
                <Text
                  style={[
                    styles.segmentedText,
                    {
                      color:
                        selectedView === option
                          ? colors.background.primary
                          : colors.text.secondary,
                    },
                    selectedView === option && {
                      color: colors.text.dark,
                    },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>{renderTabContent()}</View>

        {/* Floating Action Button */}
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: colors.primary.main }]}
        >
          <Ionicons name="add" size={28} color={colors.background.primary} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editButton: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
  segmentedContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: "sticky",
    top: 0,
    zIndex: 40,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  segmentedControl: {
    flexDirection: "row",
    height: 44,
    borderRadius: 12,
    padding: 4,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  segmentedOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  segmentedActive: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  segmentedText: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  tabContent: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 8,
  },
});
