import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useHome } from "../hooks/useHome";

const HeroCardDailyRoutineSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.workout_today.enabled) return null;

  const { has_workout, workout, no_workout } = homeData.workout_today;

  // Si no hay entrenamiento hoy, mostramos el estado de descanso
  if (!has_workout) {
    return (
      <View
        style={[
          styles.heroCardContainer,
          { backgroundColor: colors.background.transparent },
        ]}
      >
        <TouchableOpacity
          style={[styles.heroCard, { backgroundColor: "transparent", borderColor: colors.border.light }]}
        >
          <LinearGradient
            colors={["rgba(56, 189, 248, 0.4)", "rgba(15, 23, 42, 0.7)", "#0f172a"]}
            locations={[0, 0.4, 1]}
            style={styles.backgroundGradient}
          />
          <Image
            source={{ uri: no_workout.image_url }}
            style={styles.heroCardImage}
            resizeMode="cover"
          />
          <View style={styles.heroCardContent}>
            <View style={[styles.routineTypeTag, { backgroundColor: "rgba(56, 189, 248, 0.2)" }]}>
              <Ionicons
                name="cafe-outline"
                size={14}
                color={colors.primary.main}
                style={{ marginRight: 4 }}
              />
              <Text style={[styles.routineTypeText, { color: colors.primary.main }]}>
                Día de Descanso
              </Text>
            </View>
            <Text style={[styles.heroTitle, { color: colors.text.primary }]}>
              {no_workout.title}
            </Text>
            <Text style={[styles.heroSubtitle, { color: colors.text.secondary }]}>
              {no_workout.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.heroCardContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <TouchableOpacity
        style={[styles.heroCard, { backgroundColor: "transparent", borderColor: colors.border.light }]}
      >
        <LinearGradient
          colors={["rgba(56, 189, 248, 0.4)", "rgba(15, 23, 42, 0.7)", "#0f172a"]}
          locations={[0, 0.4, 1]}
          style={styles.backgroundGradient}
        />
        <Image
          source={{ uri: workout.image_url }}
          style={styles.heroCardImage}
          resizeMode="cover"
        />
        <View style={styles.heroCardContent}>
          <View style={[styles.routineTypeTag, { backgroundColor: "rgba(56, 189, 248, 0.2)" }]}>
            <Ionicons
              name="barbell-outline"
              size={14}
              color={colors.primary.main}
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.routineTypeText, { color: colors.primary.main }]}>
              {workout.type}
            </Text>
          </View>
          <Text style={[styles.heroTitle, { color: colors.text.primary }]}>
            {workout.title}
          </Text>
          <Text style={[styles.heroSubtitle, { color: colors.text.secondary }]}>
            {workout.subtitle}
          </Text>
          <View
            style={[
              styles.heroCardBottom,
              { backgroundColor: "rgba(0, 0, 0, 0.0)" },
            ]}
          >
            <View style={[styles.routineDetails]}>
              <View style={styles.routineDetailItem}>
                <Ionicons name="time-outline" size={16} color={colors.text.secondary} />
                <Text style={[styles.routineDetailText, { color: colors.text.secondary }]}>
                  {workout.duration_minutes}
                </Text>
              </View>
              <View style={styles.routineDetailItem}>
                <Ionicons name="list-outline" size={16} color={colors.text.secondary} />
                <Text style={[styles.routineDetailText, { color: colors.text.secondary }]}>
                  {workout.exercises_count}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.startButton,
                {
                  backgroundColor: colors.primary.main,
                  shadowColor: colors.primary.main,
                },
              ]}
            >
              <Text style={[styles.startButtonText, { color: "#0f172a" }]}>
                Comenzar
              </Text>
              <Ionicons
                name="play"
                size={18}
                color="#0f172a"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heroCardContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 5,
  },
  heroCard: {
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    minHeight: 200,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heroCardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  heroCardContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-between",
  },
  routineTypeTag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  routineTypeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 14,
    marginBottom: 24,
  },
  heroCardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  routineDetails: {
    flex: 1,
    backgroundColor: "transparent",
  },
  routineDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "transparent",
  },
  routineDetailText: {
    fontSize: 14,
    marginLeft: 8,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HeroCardDailyRoutineSection;
