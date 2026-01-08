import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { mockMicrocycles, mockRoutineStats } from "../data/mock-data";
import { TabComponentProps } from "../types";
import { StatsCard } from "./stats-card";

interface MicrocyclesTabProps extends TabComponentProps {}

export function MicrocyclesTab({ onRoutinePress }: MicrocyclesTabProps) {
  const { colors } = useTheme();

  const microcycles = mockMicrocycles;
  const activeMacrocycle = mockMicrocycles.find((m) => m.status === "active");

  const handleRoutinePress = (id: string) => {
    onRoutinePress?.(id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return colors.primary.main;
      case "completed":
        return "#22C55E";
      case "upcoming":
        return "#F59E0B";
      default:
        return colors.text.secondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "EN CURSO";
      case "completed":
        return "COMPLETADO";
      case "upcoming":
        return "PRÓXIMO";
      default:
        return "";
    }
  };

  const getIntensityIcon = (intensity: string) => {
    switch (intensity) {
      case "low":
        return "fitness-outline";
      case "medium":
        return "flash-outline";
      case "high":
        return "flash";
      default:
        return "fitness-outline";
    }
  };

  const renderMicrocycle = ({ item }: { item: Microcycle }) => (
    <TouchableOpacity
      style={[
        styles.microcycleCard,
        {
          backgroundColor: colors.surface.primary,
          borderColor: colors.border.light,
          ...(item.status === "active" && {
            borderColor: colors.border.light,
            borderWidth: 3,
          }),
        },
      ]}
      onPress={() => handleRoutinePress(item.id)}
    >
      <View style={styles.cardHeader}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.microcycleImage}
          imageStyle={styles.microcycleImageStyle}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.imageOverlay}
          />
          <View style={styles.microcycleImageContent}>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: getStatusColor(item.status) + "20" },
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: getStatusColor(item.status) },
                ]}
              >
                {getStatusText(item.status)}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.microcycleHeader}>
          <Text
            style={[styles.microcycleTitle, { color: colors.text.primary }]}
          >
            {item.name}
          </Text>
          <Ionicons
            name={getIntensityIcon(item.intensity)}
            size={20}
            color={colors.primary.main}
          />
        </View>

        <Text style={[styles.weekText, { color: colors.text.secondary }]}>
          {item.week} • {item.phase}
        </Text>

        <Text style={[styles.focusText, { color: colors.text.secondary }]}>
          {item.focus}
        </Text>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressInfo}>
            <Text
              style={[styles.progressLabel, { color: colors.text.secondary }]}
            >
              Sesiones completadas
            </Text>
            <Text
              style={[styles.progressValue, { color: colors.text.primary }]}
            >
              {item.completedSessions}/{item.sessions}
            </Text>
          </View>
          <View
            style={[
              styles.progressBarBg,
              { backgroundColor: colors.background.transparent },
            ]}
          >
            <View
              style={[
                styles.progressBar,
                {
                  backgroundColor: getStatusColor(item.status),
                  width: `${(item.completedSessions / item.sessions) * 100}%`,
                },
              ]}
            />
          </View>
        </View>

        {item.status === "active" && (
          <TouchableOpacity
            style={[
              styles.continueButton,
              { backgroundColor: colors.primary.main },
            ]}
            onPress={() => handleRoutinePress(item.id)}
          >
            <Text
              style={[
                styles.continueButtonText,
                { color: colors.background.primary },
              ]}
            >
              Continuar
            </Text>
            <Ionicons
              name="arrow-forward"
              size={16}
              color={colors.background.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      {/* Header with current phase info */}
      <View style={styles.phaseHeader}>
        <View style={styles.phaseInfo}>
          <Text style={[styles.phaseTitle, { color: colors.text.primary }]}>
            Fase Actual: Hipertrofia
          </Text>
          <Text
            style={[styles.phaseSubtitle, { color: colors.text.secondary }]}
          >
            Macrociclo de Volumen - Semana 4 de 12
          </Text>
        </View>
        <View
          style={[
            styles.phaseIcon,
            { backgroundColor: colors.primary.main + "20" },
          ]}
        >
          <Ionicons name="barbell" size={24} color={colors.primary.main} />
        </View>
      </View>

      {/* Microcycles List */}
      <View style={styles.listContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
          Microciclos
        </Text>

        <FlatList
          data={microcycles}
          renderItem={renderMicrocycle}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
                backgroundColor: colors.background.transparent,
              }}
            />
          )}
        />
      </View>

      {/* Weekly Stats */}
      <StatsCard
        stats={[
          {
            icon: "time-outline",
            label: "Esta semana",
            value: mockRoutineStats.weeklyTime,
          },
          {
            icon: "trending-up-outline",
            label: "vs. sem. anterior",
            value: "+8%",
          },
        ]}
        style={{
          marginHorizontal: 16,
          marginBottom: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phaseHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "transparent",
  },
  phaseInfo: {
    flex: 1,
    backgroundColor: "transparent",
  },
  phaseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  phaseSubtitle: {
    fontSize: 14,
    backgroundColor: "transparent",
  },
  phaseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  microcycleCard: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    height: 120,
  },
  microcycleImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  microcycleImageStyle: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  microcycleImageContent: {
    padding: 12,
    backgroundColor: "transparent",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-end",
  },
  statusText: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  cardBody: {
    padding: 16,
    gap: 12,
    backgroundColor: "transparent",
  },
  microcycleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",

  },
  microcycleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  weekText: {
    fontSize: 14,
    fontWeight: "500",
  },
  focusText: {
    fontSize: 12,
    fontStyle: "italic",
  },
  progressSection: {
    gap: 8,
    backgroundColor: "transparent",

  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",

  },
  progressLabel: {
    fontSize: 12,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 3,
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  statsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  separator: {
    width: 1,
    height: 32,
    marginHorizontal: 16,
  },
});
