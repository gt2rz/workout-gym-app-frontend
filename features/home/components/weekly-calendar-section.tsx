import { useTheme } from "@/theme";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={[styles.viewAllButton, { color: colors.primary.main }]}>
            {all_label}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.calendarWrapper,
          {
            backgroundColor: colors.surface.primary,
            borderColor: colors.border.light,
          },
        ]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.weeklyCalendar}
          contentContainerStyle={styles.weeklyCalendarContent}
        >
          {week_days.map((day, index) => (
            <View key={index} style={styles.dayItem}>
              <Text style={[styles.dayName, { color: colors.text.secondary }]}>
                {day.day}
              </Text>
              <View
                style={[
                  styles.dayCircle,
                  day.is_today && { backgroundColor: colors.primary.main },
                  !day.is_today && {
                    backgroundColor: colors.background.secondary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.dayNumber,
                    day.is_today && [styles.activeDayNumber, { color: colors.text.dark }],
                  ]}
                >
                  {day.label}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
  calendarWrapper: {
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weeklyCalendar: {
    marginVertical: 4,
  },
  weeklyCalendarContent: {
    paddingHorizontal: 4,
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
  dayNumber: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
  activeDayNumber: {
    fontWeight: "900",
    fontSize: 18,
  },
});

export default WeeklyCalendarSection;
