import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

interface StatsItem {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  color?: string;
}

interface StatsCardProps {
  stats: StatsItem[];
  style?: any;
}

export function StatsCard({ stats, style }: StatsCardProps) {
  const { colors } = useTheme();

  const renderSeparator = () => (
    <View
      style={[styles.separator, { backgroundColor: colors.border.light }]}
    />
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface.primary,
          borderColor: colors.border.light,
        },
        style,
      ]}
    >
      <View style={styles.statsRow}>
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <View style={styles.statItem}>
              <Ionicons
                name={stat.icon}
                size={20}
                color={stat.color || colors.primary.main}
              />
              <Text style={[styles.statValue, { color: colors.text.primary }]}>
                {stat.value}
              </Text>
              <Text
                style={[styles.statLabel, { color: colors.text.secondary }]}
              >
                {stat.label}
              </Text>
            </View>
            {index < stats.length - 1 && renderSeparator()}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

interface SingleStatCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  value: string;
  color?: string;
  style?: any;
}

export function SingleStatCard({
  icon,
  title,
  subtitle,
  value,
  color,
  style,
}: SingleStatCardProps) {
  const { colors } = useTheme();
  const statColor = color || colors.primary.main;

  return (
    <View
      style={[
        styles.singleContainer,
        {
          backgroundColor: statColor + "10",
          borderColor: statColor + "20",
        },
        style,
      ]}
    >
      <View style={styles.singleContent}>
        <View
          style={[styles.singleIcon, { backgroundColor: statColor + "20" }]}
        >
          <Ionicons name={icon} size={20} color={statColor} />
        </View>
        <View style={styles.singleInfo}>
          <Text style={[styles.singleTitle, { color: colors.text.primary }]}>
            {title}
          </Text>
          <Text
            style={[styles.singleSubtitle, { color: colors.text.secondary }]}
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <Text style={[styles.singleValue, { color: colors.text.primary }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
    gap: 4,
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 11,
    textAlign: "center",
  },
  separator: {
    width: 1,
    height: 32,
  },
  singleContainer: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singleContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  singleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  singleInfo: {
    gap: 2,
  },
  singleTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  singleSubtitle: {
    fontSize: 10,
  },
  singleValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
