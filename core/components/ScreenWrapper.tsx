import { useTheme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle;
    withScroll?: boolean;
}

/**
 * Componente base para todas las pantallas de la aplicación.
 * Centraliza el gradiente de fondo y el manejo de ScrollView y SafeAreas.
 */
export const ScreenWrapper = ({
    children,
    style,
    withScroll = true
}: ScreenWrapperProps) => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    const Content = withScroll ? ScrollView : View;

    return (
        <View style={[styles.container, { backgroundColor: colors.background.dark }]}>
            <LinearGradient
                colors={[colors.background.light, "transparent"]}
                style={styles.backgroundGradient}
            />

            <Content
                style={[styles.content, { paddingTop: insets.top }, style]}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </Content>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    backgroundGradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
});
