import { ScreenWrapper } from "@/core/components/ScreenWrapper";
import GreetingSection from "@/features/home/components/greeting-section";
import HeroCardDailyRoutineSection from "@/features/home/components/hero-card-daily-routine-section";
import QuickActionsSection from "@/features/home/components/quick-actions-section";
import StatsGridSection from "@/features/home/components/stats-grid-section";
import WeeklyCalendarSection from "@/features/home/components/weekly-calendar-section";
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { useHome } from "@/features/home/hooks/useHome";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const { isLoading, refetch, isRefetching } = useHome();
  const { colors } = useTheme();

  if (isLoading) {
    return (
      <ScreenWrapper withScroll={false} style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary.main} />
      </ScreenWrapper>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Inicio",
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background.primary,
          },
          headerTitleStyle: {
            color: colors.text.primary,
            fontWeight: "bold",
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrGjpDrUxo084O9lpHVmi0rP5fifEE4gCANQQ-kzoFW6Q809Yy9uXcLu3oAvKUkHY-KeuO0KXZKd56I6U2XgucShMQRrS4TzXX2GGcxvwvw1dNyYFYVqwdp9wg_EXf5N-F1p7DP4L5fr-HLNooQvVFYCtf98qBkrePHwUn20WPPJ014Klq-JeBLzorgeJQoX28PFYghupIwjnrDrPaMsRU4gcENRBMfrnjVfk9yRjr3eaHe-zja8F_9eRFqTZuKcbFNyG4n2l-rNE",
                }}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  borderWidth: 1.5,
                  borderColor: colors.primary.main,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.text.primary}
              />
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
        }}
      />
      <ScreenWrapper
        style={styles.container}
        onRefresh={refetch}
        refreshing={isRefetching}
      >
        {/* We still keep the Greeting or other parts if needed, but let's see how it looks */}
        <GreetingSection />

        <WeeklyCalendarSection />

        <HeroCardDailyRoutineSection />

        <StatsGridSection />

        <QuickActionsSection />

        <View style={styles.bottomSpacer} />
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSpacer: {
    height: 100,
    backgroundColor: "transparent",
  },
});
