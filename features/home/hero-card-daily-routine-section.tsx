import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const HeroCardDailyRoutineSection = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.heroCardContainer,
        { backgroundColor: colors.background.dark },
      ]}
    >
      <TouchableOpacity
        style={[styles.heroCard, { backgroundColor: "transparent" }]}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          }}
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
              Día de Empuje
            </Text>
          </View>
          <Text style={[styles.heroTitle, { color: colors.text.light }]}>
            Rutina de Pecho y Tríceps
          </Text>
          <Text style={[styles.heroSubtitle, { color: "#92c9ad" }]}>
            Enfócate en la técnica. ¡Tú puedes!
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
                  45 Minutos
                </Text>
              </View>
              <View style={styles.routineDetailItem}>
                <Ionicons name="list-outline" size={16} color="#92c9ad" />
                <Text style={[styles.routineDetailText, { color: "#92c9ad" }]}>
                  6 Ejercicios
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
  heroCardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heroCardContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
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
  statsContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
});

export default HeroCardDailyRoutineSection;
