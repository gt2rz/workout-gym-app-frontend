import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { useHome } from "../hooks/useHome";

const getIconName = (apiName: string): any => {
  const map: Record<string, string> = {
    weight_scale: "scale-outline",
    fire: "flame",
    streak: "flame",
    // Agrega más mapeos según necesites
  };
  return map[apiName] || apiName;
};

const StatsGridSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.progress_overview.enabled) return null;

  const { title, metrics } = homeData.progress_overview;
  const { weight, streak } = metrics;

  return (
    <View
      style={[
        styles.statsContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
        {title}
      </Text>
      <View
        style={[
          styles.statsGrid,
          { backgroundColor: colors.background.transparent },
        ]}
      >
        {/* Weight Card */}
        <View style={[styles.statCard, { backgroundColor: "#193326" }]}>
          <View style={styles.statCardHeader}>
            <View style={[styles.statIcon, { backgroundColor: "#3d5a4b" }]}>
              <Ionicons name={getIconName(weight.icono_name)} size={18} color="#13ec80" />
            </View>
            {weight.trend.percentage && (
              <View style={styles.statChange}>
                <Ionicons
                  name={weight.trend.direction === "down" ? "trending-down" : "trending-up"}
                  size={14}
                  color="#13ec80"
                />
                <Text style={[styles.statChangeText, { color: "#13ec80" }]}>
                  {weight.trend.percentage}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.statInfo}>
            <Text style={[styles.statLabel, { color: "#92c9ad" }]}>
              {weight.label}
            </Text>
            <Text style={[styles.statValue, { color: colors.text.light }]}>
              {weight.value}{" "}
              <Text style={[styles.statUnit, { color: "#92c9ad" }]}>{weight.unit}</Text>
            </Text>
          </View>
          <View style={styles.miniGraph}>
            {weight.last_measures.map((measure, index) => {
              // Calculamos una altura proporcional (esto es una simplificación)
              const height = 40 + (index * 10);
              return (
                <View
                  key={index}
                  style={[
                    styles.graphBar,
                    {
                      height: `${height}%`,
                      backgroundColor:
                        index === weight.last_measures.length - 1
                          ? "#13ec80"
                          : "rgba(19, 236, 128, 0.2)",
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>

        {/* Streak Card */}
        <View style={[styles.statCard, { backgroundColor: "#193326" }]}>
          <View style={styles.statCardHeader}>
            <View style={[styles.statIcon, { backgroundColor: "#3d5a4b" }]}>
              <Ionicons name={getIconName(streak.icono_name)} size={18} color="#ff9500" />
            </View>
          </View>
          <View style={styles.statInfo}>
            <Text style={[styles.statLabel, { color: "#92c9ad" }]}>
              {streak.label}
            </Text>
            <Text style={[styles.statValue, { color: colors.text.light }]}>
              {streak.value}{" "}
              <Text style={[styles.statUnit, { color: "#92c9ad" }]}>{streak.unit}</Text>
            </Text>
          </View>
          <Text style={[styles.streakMessage, { color: "#92c9ad" }]}>
            {streak.trend.message || "¡Vas genial!"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  statsContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    minHeight: 140,
  },
  statCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
    backgroundColor: "transparent",
  },
  statIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  statChange: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  statChangeText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 2,
    backgroundColor: "transparent",
  },
  statInfo: {
    marginBottom: 12,
    backgroundColor: "transparent",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
  },
  statUnit: {
    fontSize: 14,
    fontWeight: "normal",
  },
  miniGraph: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 32,
    gap: 2,
    backgroundColor: "transparent",
  },
  graphBar: {
    flex: 1,
    borderRadius: 1,
    minHeight: 4,
  },
  streakMessage: {
    fontSize: 12,
    marginTop: 16,
  },
});

export default StatsGridSection;
