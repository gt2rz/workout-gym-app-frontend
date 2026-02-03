import { View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const HeaderHomeSection = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const handleProfilePress = () => {
    router.push("/profile");
  };

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.background.transparent },
      ]}
    >
      <View
        style={[
          styles.userInfo,
          { backgroundColor: colors.background.transparent },
        ]}
      >
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrGjpDrUxo084O9lpHVmi0rP5fifEE4gCANQQ-kzoFW6Q809Yy9uXcLu3oAvKUkHY-KeuO0KXZKd56I6U2XgucShMQRrS4TzXX2GGcxvwvw1dNyYFYVqwdp9wg_EXf5N-F1p7DP4L5fr-HLNooQvVFYCtf98qBkrePHwUn20WPPJ014Klq-JeBLzorgeJQoX28PFYghupIwjnrDrPaMsRU4gcENRBMfrnjVfk9yRjr3eaHe-zja8F_9eRFqTZuKcbFNyG4n2l-rNE",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.notificationButton, { backgroundColor: "#193326" }]}
      >
        <Ionicons name="notifications-outline" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HeaderHomeSection;
