import { useTheme } from "@/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useHome } from "../hooks/useHome";

const GreetingSection = () => {
  const { colors } = useTheme();
  const { homeData } = useHome();

  if (!homeData?.greeting.enabled) return null;

  const renderGreetingMessage = () => {
    const { message, user_name } = homeData.greeting.greeting;
    const parts = message.split("{{user_name}}");

    return (
      <Text style={[styles.greetingText, { color: colors.text.primary }]}>
        {parts[0]}
        {parts.length > 1 && (
          <Text style={styles.greetingBoldText}>{user_name}</Text>
        )}
        {parts[1]}
      </Text>
    );
  };

  return (
    <View
      style={[
        styles.greetingContainer,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <Text style={[styles.dateText, { color: colors.text.secondary }]}>
        {homeData.greeting.today.toUpperCase()}
      </Text>
      {renderGreetingMessage()}
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
    fontSize: 22,
    fontWeight: "light",
    marginTop: 4,
  },
  greetingBoldText: {
    fontWeight: "900",
  },
});

export default GreetingSection;
