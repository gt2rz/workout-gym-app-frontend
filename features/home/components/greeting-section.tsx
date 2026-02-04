import { View } from "@/components/Themed";
import { useTheme } from "@/theme";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useHome } from "../hooks/useHome";

const GreetingSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.greeting.enabled) return null;

  return (
    <View
      style={[
        styles.greetingContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <Text style={[styles.dateText, { color: "#92c9ad" }]}>
        {homeData.greeting.today.toUpperCase()}
      </Text>
      <Text style={[styles.greetingText, { color: colors.text.light }]}>
        {homeData.greeting.greeting_message}
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
