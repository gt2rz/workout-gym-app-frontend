import { Dimensions, ScrollView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import GreetingSection from "@/features/home/greeting-section";
import HeaderHomeSection from "@/features/home/header-home-section";
import HeroCardDailyRoutineSection from "@/features/home/hero-card-daily-routine-section";
import QuickActionsSection from "@/features/home/quick-actions-section";
import StatsGridSection from "@/features/home/stats-grid-section";
import WeeklyCalendarSection from "@/features/home/weekly-calendar-section";
import { useHomeData } from "@/hooks/useHomeData";
import { useTheme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { colors } = useTheme();
  const { weekDays } = useHomeData();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background.dark }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Background Gradient */}
      <LinearGradient
        colors={[colors.background.light, "transparent"]}
        style={styles.backgroundGradient}
      />
      
      {/* Header */}
      <HeaderHomeSection />

      {/* Greeting Section */}
      <GreetingSection />

      {/* Weekly Calendar */}
      <WeeklyCalendarSection />

      {/* Hero Card: Daily Routine */}
      <HeroCardDailyRoutineSection />

      {/* Stats Grid */}
      <StatsGridSection />

      {/* Quick Actions */}
      <QuickActionsSection />

      {/* Bottom spacing */}
      <View style={{ height: 100, backgroundColor: colors.background.dark }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    // zIndex: 0,
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
