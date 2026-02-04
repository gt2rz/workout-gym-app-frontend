import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
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
          style={[styles.heroCard, { backgroundColor: "transparent" }]}
        >
          <LinearGradient
            colors={["#1acf9c8c", "#133e259c", "#083d1ef7"]}
            locations={[0, 0.4, 1]}
            style={styles.backgroundGradient}
          />
          <Image
            source={{ uri: no_workout.image_url }}
            style={styles.heroCardImage}
            resizeMode="cover"
          />
          <View style={styles.heroCardContent}>
            <View style={styles.routineTypeTag}>
              <Ionicons
                name="cafe-outline"
                size={14}
                color="#13ec80"
                style={{ marginRight: 4 }}
              />
              <Text style={[styles.routineTypeText, { color: "#13ec80" }]}>
                Día de Descanso
              </Text>
            </View>
            <Text style={[styles.heroTitle, { color: colors.text.light }]}>
              {no_workout.title}
            </Text>
            <Text style={[styles.heroSubtitle, { color: "#92c9ad" }]}>
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
        style={[styles.heroCard, { backgroundColor: "transparent" }]}
      >
        <LinearGradient
          colors={["#1acf9c8c", "#133e259c", "#083d1ef7"]}
          locations={[0, 0.4, 1]}
          style={styles.backgroundGradient}
        />
        <Image
          source={{ uri: workout.image_url }}
          style={styles.heroCardImage}
          resizeMode="cover"
        />
        <View style={styles.heroCardContent}>
          <View style={styles.routineTypeTag}>
            <Ionicons
              name="barbell-outline"
              size={14}
              color="#13ec80"
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.routineTypeText, { color: "#13ec80" }]}>
              {workout.type}
            </Text>
          </View>
          <Text style={[styles.heroTitle, { color: colors.text.light }]}>
            {workout.title}
          </Text>
          <Text style={[styles.heroSubtitle, { color: "#92c9ad" }]}>
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
                <Ionicons name="time-outline" size={16} color="#92c9ad" />
                <Text style={[styles.routineDetailText, { color: "#92c9ad" }]}>
                  {workout.duration_minutes}
                </Text>
              </View>
              <View style={styles.routineDetailItem}>
                <Ionicons name="list-outline" size={16} color="#92c9ad" />
                <Text style={[styles.routineDetailText, { color: "#92c9ad" }]}>
                  {workout.exercises_count}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.startButton, { backgroundColor: "#13ec80" }]}
            >
              <Text style={[styles.startButtonText, { color: "#11221a" }]}>
                Comenzar
              </Text>
              <Ionicons
                name="play"
                size={18}
                color="#11221a"
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
    backgroundColor: "rgba(19, 236, 128, 0.2)",
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
    shadowColor: "#13ec80",
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
