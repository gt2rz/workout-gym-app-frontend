import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import GreetingSection from "@/features/home/greeting-section";
import HeaderHomeSection from "@/features/home/header-home-section";
import WeeklyCalendarSection from "@/features/home/weekly-calendar-section";
import { useHomeData } from "@/hooks/useHomeData";
import { useTheme } from "@/theme";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { colors } = useTheme();
  const { weekDays } = useHomeData();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background.dark }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <HeaderHomeSection />

      {/* Greeting Section */}
      <GreetingSection />

      {/* Weekly Calendar */}
      <WeeklyCalendarSection />

      {/* Hero Card: Daily Routine */}
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
                  <Text
                    style={[styles.routineDetailText, { color: "#92c9ad" }]}
                  >
                    45 Minutos
                  </Text>
                </View>
                <View style={styles.routineDetailItem}>
                  <Ionicons name="list-outline" size={16} color="#92c9ad" />
                  <Text
                    style={[styles.routineDetailText, { color: "#92c9ad" }]}
                  >
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

      {/* Stats Grid */}
      <View style={styles.statsContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
          Tu Progreso
        </Text>
        <View style={styles.statsGrid}>
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
                <Text style={[styles.statUnit, { color: "#92c9ad" }]}>
                  Días
                </Text>
              </Text>
            </View>
            <Text style={[styles.streakMessage, { color: "#92c9ad" }]}>
              ¡Vas genial! Mantén el ritmo.
            </Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
          Accesos Rápidos
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickActionsContent}
        >
          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
          >
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: "rgba(59, 130, 246, 0.2)" },
              ]}
            >
              <Ionicons name="add" size={20} color="#3b82f6" />
            </View>
            <Text
              style={[styles.quickActionText, { color: colors.text.light }]}
            >
              Registrar Peso
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
          >
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: "rgba(147, 51, 234, 0.2)" },
              ]}
            >
              <Ionicons name="calendar-outline" size={20} color="#9333ea" />
            </View>
            <Text
              style={[styles.quickActionText, { color: colors.text.light }]}
            >
              Crear Rutina
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: "#193326" }]}
          >
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: "rgba(249, 115, 22, 0.2)" },
              ]}
            >
              <Ionicons name="time-outline" size={20} color="#f97316" />
            </View>
            <Text
              style={[styles.quickActionText, { color: colors.text.light }]}
            >
              Historial
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Bottom spacing */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50, // Account for status bar
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(19, 236, 128, 0.2)",
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4,
  },
  weeklyCalendarContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    fontSize: 14,
    fontWeight: "500",
  },
  weeklyCalendar: {
    marginVertical: 8,
  },
  weeklyCalendarContent: {
    paddingHorizontal: 8,
  },
  dayItem: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  dayName: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 8,
  },
  dayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeDayCircle: {
    backgroundColor: "#13ec80",
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  activeDayNumber: {
    color: "#11221a",
  },
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
  },
  statChangeText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 2,
  },
  statInfo: {
    marginBottom: 12,
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
  quickActionsContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  quickActionsContent: {
    paddingHorizontal: 8,
    gap: 12,
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
