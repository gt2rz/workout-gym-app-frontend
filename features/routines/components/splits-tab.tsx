import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SectionList, StyleSheet, TouchableOpacity } from "react-native";
import {
  mockRoutineStats,
  mockSplits,
  mockWorkoutSessions,
} from "../data/mock-data";
import { TabComponentProps } from "../types";
import { StatsCard } from "./stats-card";

interface SplitsTabProps extends TabComponentProps {}

export function SplitsTab({ onRoutinePress }: SplitsTabProps) {
  const { colors } = useTheme();

  const splits = mockSplits;
  const currentWeekSessions = mockWorkoutSessions;

  const handleRoutinePress = (id: string) => {
    onRoutinePress?.(id);
  };

  const sections = [
    {
      title: "Splits Disponibles",
      data: splits,
      type: "splits" as const,
    },
    {
      title: "Esta Semana",
      data: currentWeekSessions,
      type: "sessions" as const,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "#22C55E";
      case "intermediate":
        return "#F59E0B";
      case "advanced":
        return "#EF4444";
      default:
        return colors.text.secondary;
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "PRINCIPIANTE";
      case "intermediate":
        return "INTERMEDIO";
      case "advanced":
        return "AVANZADO";
      default:
        return "";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "push-pull-legs":
        return "fitness";
      case "upper-lower":
        return "body";
      case "full-body":
        return "person";
      case "body-part":
        return "barbell";
      default:
        return "fitness";
    }
  };

  const renderSplit = ({ item }: { item: Split }) => (
    <TouchableOpacity
      style={[
        styles.splitCard,
        {
          backgroundColor: colors.surface.primary,
          borderColor: item.isActive
            ? colors.primary.main
            : colors.border.light,
          borderWidth: item.isActive ? 2 : 1,
        },
      ]}
      onPress={() => handleRoutinePress(item.id)}
    >
      <View style={styles.splitHeader}>
        <View style={styles.splitInfo}>
          <View style={styles.splitTitleRow}>
            <Text style={[styles.splitTitle, { color: colors.text.primary }]}>
              {item.name}
            </Text>
            {item.isActive && (
              <View
                style={[
                  styles.activeBadge,
                  { backgroundColor: colors.primary.main },
                ]}
              >
                <Text
                  style={[
                    styles.activeBadgeText,
                    { color: colors.background.primary },
                  ]}
                >
                  ACTIVO
                </Text>
              </View>
            )}
          </View>

          <Text style={[styles.splitFocus, { color: colors.text.secondary }]}>
            {item.focus}
          </Text>

          <View style={styles.splitDetails}>
            <View style={styles.detailItem}>
              <Ionicons
                name="calendar-outline"
                size={16}
                color={colors.text.secondary}
              />
              <Text
                style={[styles.detailText, { color: colors.text.secondary }]}
              >
                {item.frequency}x/semana
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons
                name="time-outline"
                size={16}
                color={colors.text.secondary}
              />
              <Text
                style={[styles.detailText, { color: colors.text.secondary }]}
              >
                {item.duration}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.splitIcon}>
          <Ionicons
            name={getTypeIcon(item.type)}
            size={24}
            color={item.isActive ? colors.primary.main : colors.text.secondary}
          />
          <View
            style={[
              styles.difficultyBadge,
              { backgroundColor: getDifficultyColor(item.difficulty) + "20" },
            ]}
          >
            <Text
              style={[
                styles.difficultyText,
                { color: getDifficultyColor(item.difficulty) },
              ]}
            >
              {getDifficultyText(item.difficulty)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.muscleGroups}>
        {item.muscleGroups.slice(0, 3).map((muscle, index) => (
          <View
            key={index}
            style={[
              styles.muscleTag,
              { backgroundColor: colors.primary.main + "10" },
            ]}
          >
            <Text
              style={[styles.muscleTagText, { color: colors.primary.main }]}
            >
              {muscle}
            </Text>
          </View>
        ))}
        {item.muscleGroups.length > 3 && (
          <Text style={[styles.moreText, { color: colors.text.secondary }]}>
            +{item.muscleGroups.length - 3} más
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSession = ({ item }: { item: WorkoutSession }) => (
    <TouchableOpacity
      style={[
        styles.sessionCard,
        {
          backgroundColor: colors.surface.primary,
          borderColor: colors.border.light,
          ...(item.completed && {
            backgroundColor: colors.primary.main + "05",
            borderColor: colors.primary.main + "30",
          }),
        },
      ]}
      onPress={() => handleRoutinePress(item.id)}
    >
      <View style={styles.sessionHeader}>
        <View style={styles.dayContainer}>
          <Text style={[styles.dayText, { color: colors.text.primary }]}>
            {item.day}
          </Text>
          {item.scheduled && (
            <Text style={[styles.timeText, { color: colors.text.secondary }]}>
              {item.scheduled}
            </Text>
          )}
        </View>

        <View style={styles.sessionInfo}>
          <Text style={[styles.sessionName, { color: colors.text.primary }]}>
            {item.name}
          </Text>
          <View style={styles.sessionDetails}>
            <Text
              style={[styles.sessionDetail, { color: colors.text.secondary }]}
            >
              {item.exercises} ejercicios • {item.duration}
            </Text>
          </View>
        </View>

        <View style={styles.sessionStatus}>
          {item.completed ? (
            <View
              style={[
                styles.completedIcon,
                { backgroundColor: colors.primary.main },
              ]}
            >
              <Ionicons
                name="checkmark"
                size={16}
                color={colors.background.primary}
              />
            </View>
          ) : (
            <View
              style={[styles.pendingIcon, { borderColor: colors.border.light }]}
            >
              <Ionicons
                name="time-outline"
                size={16}
                color={colors.text.secondary}
              />
            </View>
          )}
        </View>
      </View>

      <View style={styles.muscleList}>
        {item.muscleGroups.map((muscle, index) => (
          <Text
            key={index}
            style={[
              styles.muscleText,
              { color: colors.text.secondary },
              index < item.muscleGroups.length - 1 &&
                styles.muscleTextSeparator,
            ]}
          >
            {muscle}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({
    section,
  }: {
    section: (typeof sections)[0];
  }) => {
    if (section.type === "sessions") {
      return (
        <View style={styles.section}>
          <View style={styles.weekHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
              {section.title}
            </Text>
            <View style={styles.weekProgress}>
              <Text
                style={[styles.progressText, { color: colors.primary.main }]}
              >
                2/6 completadas
              </Text>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
          {section.title}
        </Text>
      </View>
    );
  };

  const renderItem = ({
    item,
    section,
  }: {
    item: any;
    section: (typeof sections)[0];
  }) => {
    if (section.type === "splits") {
      return renderSplit({ item });
    } else if (section.type === "sessions") {
      return renderSession({ item });
    }
    return null;
  };

  const renderFooter = () => (
    <View>
      <StatsCard
        stats={[
          {
            icon: "barbell-outline",
            label: "Ejercicios",
            value: "24",
          },
          {
            icon: "flame-outline",
            label: "kcal/sesión",
            value: mockRoutineStats.caloriesBurned?.toString() || "420",
          },
          {
            icon: "trophy-outline",
            label: "Adherencia",
            value: `${mockRoutineStats.adherenceRate}%`,
          },
        ]}
        style={{
          marginHorizontal: 16,
          marginBottom: 16,
        }}
      />
      <View style={{ height: 20 }} />
    </View>
  );

  const getItemSeparator = (section: (typeof sections)[0]) => () => {
    return <View style={{ height: section.type === "splits" ? 12 : 8 }} />;
  };

  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={({ section }) => getItemSeparator(section)()}
      ListFooterComponent={renderFooter}
      stickySectionHeadersEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  splitCard: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  splitHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  splitInfo: {
    flex: 1,
    marginRight: 12,
  },
  splitTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 8,
  },
  splitTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  splitFocus: {
    fontSize: 14,
    marginBottom: 8,
  },
  splitDetails: {
    flexDirection: "row",
    gap: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  detailText: {
    fontSize: 12,
  },
  splitIcon: {
    alignItems: "center",
    gap: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  muscleGroups: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  muscleTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  muscleTagText: {
    fontSize: 11,
    fontWeight: "500",
  },
  moreText: {
    fontSize: 11,
    fontStyle: "italic",
  },
  weekHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  weekProgress: {
    backgroundColor: "transparent",
  },
  progressText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  sessionCard: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
  },
  sessionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dayContainer: {
    width: 60,
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 10,
    marginTop: 2,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  sessionDetails: {
    marginBottom: 6,
  },
  sessionDetail: {
    fontSize: 12,
  },
  sessionStatus: {
    width: 32,
    alignItems: "center",
  },
  completedIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  pendingIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  muscleList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    marginLeft: 72,
  },
  muscleText: {
    fontSize: 11,
  },
  muscleTextSeparator: {
    marginRight: 8,
  },
  statsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  statsGrid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
    gap: 4,
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
});
