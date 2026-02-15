import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useHome } from "../hooks/useHome";

const getIconName = (apiName: string): any => {
  const map: Record<string, string> = {
    playlist_add: "add-circle-outline",
    history: "time-outline",
    // Agrega más mapeos
  };
  return map[apiName] || apiName;
};

const QuickActionsSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.quick_access.enabled) return null;

  const { title, options } = homeData.quick_access;

  return (
    <View
      style={[
        styles.quickActionsContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.quickActionsContent}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[styles.quickActionButton, { backgroundColor: colors.background.secondary }]}
          >
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: `${option.icon_color}33` }, // Opacidad del 20%
              ]}
            >
              <Ionicons name={getIconName(option.icon_name)} size={20} color={option.icon_color} />
            </View>
            <Text style={[styles.quickActionText, { color: colors.text.light }]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
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
