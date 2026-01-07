import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface SectionHeaderProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onAction?: () => void;
  actionText?: string;
  badge?: string;
}

export function SectionHeader({
  title,
  icon,
  onAction,
  actionText = "Ver todo",
  badge,
}: SectionHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text.primary }]}>
          {title}
        </Text>
        {icon && (
          <View
            style={[
              styles.iconBadge,
              {
                borderColor: colors.primary.main + "30",
                backgroundColor: colors.primary.main + "10",
              },
            ]}
          >
            <Ionicons name={icon} size={18} color={colors.primary.main} />
          </View>
        )}
        {badge && (
          <View
            style={[
              styles.textBadge,
              { backgroundColor: colors.primary.main + "20" },
            ]}
          >
            <Text style={[styles.badgeText, { color: colors.primary.main }]}>
              {badge}
            </Text>
          </View>
        )}
      </View>

      {onAction && (
        <TouchableOpacity onPress={onAction} style={styles.actionButton}>
          <Text style={[styles.actionText, { color: colors.primary.main }]}>
            {actionText}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={colors.primary.main}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: -0.02,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
