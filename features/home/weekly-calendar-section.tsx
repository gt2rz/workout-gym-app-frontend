import { View } from "@/components/Themed";
import { useHomeData } from "@/hooks/useHomeData";
import { useTheme } from "@/theme";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const WeeklyCalendarSection = () => {
  const { colors } = useTheme();
  const { getCurrentDate, weekDays } = useHomeData();

  return (
    <View
      style={[
        styles.weeklyCalendarContainer,
        { backgroundColor: colors.background.dark },
      ]}
    >
      <View
        style={[
          styles.sectionHeader,
          { backgroundColor: colors.background.dark },
        ]}
      >
        <Text style={[styles.sectionTitle, { color: colors.text.light }]}>
          Tu Semana
        </Text>
        <TouchableOpacity>
          <Text style={[styles.viewAllButton, { color: "#13ec80" }]}>
            Ver Todo
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weeklyCalendar}
        contentContainerStyle={styles.weeklyCalendarContent}
      >
        {weekDays.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayItem,
              { backgroundColor: colors.background.dark },
            ]}
          >
            <Text style={[styles.dayName, { color: "#92c9ad" }]}>
              {day.name}
            </Text>
            <View
              style={[
                styles.dayCircle,
                day.isActive && styles.activeDayCircle,
                !day.isActive && { backgroundColor: "#193326" },
              ]}
            >
              <Text
                style={[
                  styles.dayNumber,
                  day.isActive && styles.activeDayNumber,
                ]}
              >
                {day.day}
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
});

export default WeeklyCalendarSection;
