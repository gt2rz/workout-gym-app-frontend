import { View } from "@/components/Themed";
import { useHomeData } from "@/hooks/useHomeData";
import { useTheme } from "@/theme";
import React from "react";
import { StyleSheet, Text } from "react-native";

const GreetingSection = () => {
  const { colors } = useTheme();
  const { getCurrentDate, weekDays } = useHomeData();

  return (
    <View
      style={[
        styles.greetingContainer,
        { backgroundColor: colors.background.dark },
      ]}
    >
      <Text style={[styles.dateText, { color: "#92c9ad" }]}>
        {getCurrentDate().toUpperCase()}
      </Text>
      <Text style={[styles.greetingText, { color: colors.text.light }]}>
        Hola,{" "}
        <Text style={[styles.greetingBoldText, { color: colors.text.light }]}>
          Miguel
        </Text>{" "}
        👋
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "light",
    marginTop: 4,
  },
  greetingBoldText: {
    fontWeight: "900",
  },
});

export default GreetingSection;
