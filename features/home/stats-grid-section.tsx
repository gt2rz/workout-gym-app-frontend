import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

const StatsGridSection = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.statsContainer,
        { backgroundColor: colors.background.dark },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
        Tu Progreso
      </Text>
      <View
        style={[styles.statsGrid, { backgroundColor: colors.background.dark }]}
      >
        {/* Weight Card */}
        <View style={[styles.statCard, { backgroundColor: "#193326" }]}>
          <View style={styles.statCardHeader}>
            <View style={[styles.statIcon, { backgroundColor: "#3d5a4b" }]}>
              <Ionicons name="scale-outline" size={18} color="#13ec80" />
            </View>
            <View style={styles.statChange}>
              <Ionicons name="trending-down" size={14} color="#13ec80" />
              <Text style={[styles.statChangeText, { color: "#13ec80" }]}>
                -0.5kg
              </Text>
            </View>
          </View>
          <View style={styles.statInfo}>
            <Text style={[styles.statLabel, { color: "#92c9ad" }]}>
              Peso Actual
            </Text>
            <Text style={[styles.statValue, { color: colors.text.light }]}>
              75.5{" "}
              <Text style={[styles.statUnit, { color: "#92c9ad" }]}>kg</Text>
            </Text>
          </View>
          <View style={styles.miniGraph}>
            {[40, 60, 50, 70, 65].map((height, index) => (
              <View
                key={index}
                style={[
                  styles.graphBar,
                  {
                    height: `${height}%`,
                    backgroundColor:
                      index === 4 ? "#13ec80" : "rgba(19, 236, 128, 0.2)",
                  },
                ]}
              />
            ))}
          </View>
        </View>

        {/* Streak Card */}
        <View style={[styles.statCard, { backgroundColor: "#193326" }]}>
          <View style={styles.statCardHeader}>
            <View style={[styles.statIcon, { backgroundColor: "#3d5a4b" }]}>
              <Ionicons name="flame-outline" size={18} color="#ff9500" />
            </View>
          </View>
          <View style={styles.statInfo}>
            <Text style={[styles.statLabel, { color: "#92c9ad" }]}>
              Racha Semanal
            </Text>
            <Text style={[styles.statValue, { color: colors.text.light }]}>
              3{" "}
              <Text style={[styles.statUnit, { color: "#92c9ad" }]}>Días</Text>
            </Text>
          </View>
          <Text style={[styles.streakMessage, { color: "#92c9ad" }]}>
            ¡Vas genial! Mantén el ritmo.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
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
