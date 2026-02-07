import React from "react";
import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { ScreenWrapper } from "@/core/components/ScreenWrapper";
import GreetingSection from "@/features/home/components/greeting-section";
import HeaderHomeSection from "@/features/home/components/header-home-section";
import HeroCardDailyRoutineSection from "@/features/home/components/hero-card-daily-routine-section";
import QuickActionsSection from "@/features/home/components/quick-actions-section";
import StatsGridSection from "@/features/home/components/stats-grid-section";
import WeeklyCalendarSection from "@/features/home/components/weekly-calendar-section";

import { useHome } from "@/features/home/hooks/useHome";
import { ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const { isLoading, refetch, isRefetching } = useHome();

  if (isLoading) {
    return (
      <ScreenWrapper withScroll={false} style={styles.center}>
        <ActivityIndicator size="large" color="#13ec80" />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper
      style={styles.container}
      onRefresh={refetch}
      refreshing={isRefetching}
    >
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

      {/* Bottom spacing to avoid TabBar overlap */}
      <View style={styles.bottomSpacer} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    // Especial para el contenido
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
