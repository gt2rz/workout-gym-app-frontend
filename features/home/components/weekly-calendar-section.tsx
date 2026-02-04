import { View } from "@/components/Themed";
import { useTheme } from "@/theme";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useHome } from "../hooks/useHome";

const WeeklyCalendarSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.weekly_overview.enabled) return null;

  const { title, all_label, week_days } = homeData.weekly_overview;

  return (
    <View
      style={[
        styles.weeklyCalendarContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <View
        style={[
          styles.sectionHeader,
          { backgroundColor: colors.background.transparent },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={[styles.viewAllButton, { color: "#13ec80" }]}>
            {all_label}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weeklyCalendar}
        contentContainerStyle={styles.weeklyCalendarContent}
      >
        {week_days.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayItem,
              { backgroundColor: colors.background.transparent },
            ]}
          >
            <Text style={[styles.dayName, { color: "#92c9ad" }]}>
              {day.day}
            </Text>
            <View
              style={[
                styles.dayCircle,
                day.is_today && styles.activeDayCircle,
                !day.is_today && { backgroundColor: "#193326" },
              ]}
            >
              <Text
                style={[
                  styles.dayNumber,
                  day.is_today && styles.activeDayNumber,
                ]}
              >
                {day.label}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAllButton: {
    fontSize: 12,
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
    paddingVertical: 12,
  },
  dayName: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 8,
  },
  dayCircle: {
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeDayCircle: {
    backgroundColor: "#13ec80",
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
  activeDayNumber: {
    color: "#11221a",
    fontWeight: "900",
    fontSize: 18,
  },
});

export default WeeklyCalendarSection;
