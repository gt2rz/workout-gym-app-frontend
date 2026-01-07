import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { mockMacrocycles, mockRoutineStats } from "../data/mock-data";
import { TabComponentProps } from "../types";
import { SectionHeader } from "./section-header";
import { SingleStatCard } from "./stats-card";

interface MacrocyclesTabProps extends TabComponentProps {}

export function MacrocyclesTab({ onRoutinePress }: MacrocyclesTabProps) {
  const { colors } = useTheme();

  const activeMacrocycle = mockMacrocycles.find((m) => m.status === "active");
  const upcomingMacrocycles = mockMacrocycles.filter(
    (m) => m.status !== "active"
  );

  const handleRoutinePress = (id: string) => {
    onRoutinePress?.(id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "#3B82F6";
      case "planned":
        return "#8B5CF6";
      default:
        return colors.text.secondary;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "PENDIENTE";
      case "planned":
        return "PLANIFICADO";
      default:
        return "";
    }
  };

  return (
    <View style={styles.container}>
      {/* Active Program Section */}
      <View style={styles.section}>
        <SectionHeader title="Macrociclo Activo" icon="flash" />

        {/* Active Program Card */}
        {activeMacrocycle && (
          <TouchableOpacity
            style={[
              styles.activeCard,
              { backgroundColor: colors.background.transparent },
            ]}
            onPress={() => handleRoutinePress(activeMacrocycle.id)}
          >
            <ImageBackground
              source={{
                uri:
                  activeMacrocycle.image ||
                  "https://via.placeholder.com/400x200",
              }}
              style={styles.cardImage}
              imageStyle={styles.cardImageStyle}
            >
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={styles.imageOverlay}
              />
              <View style={styles.cardImageContent}>
                <View
                  style={[
                    styles.categoryBadge,
                    { backgroundColor: colors.primary.main },
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      { color: colors.background.light },
                    ]}
                  >
                    {activeMacrocycle.category}
                  </Text>
                </View>
                <Text style={styles.cardTitle}>{activeMacrocycle.name}</Text>
              </View>
            </ImageBackground>

            <View style={styles.cardContent}>
              {/* Progress Bar */}
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text
                    style={[
                      styles.progressLabel,
                      { color: colors.text.secondary },
                    ]}
                  >
                    PROGRESO GENERAL
                  </Text>
                  <Text
                    style={[
                      styles.progressValue,
                      { color: colors.primary.main },
                    ]}
                  >
                    65%
                  </Text>
                </View>
                <View
                  style={[
                    styles.progressBarBg,
                    { backgroundColor: colors.background.transparent },
                  ]}
                >
                  <View
                    style={[
                      styles.progressBar,
                      { backgroundColor: colors.primary.main, width: "65%" },
                    ]}
                  />
                </View>
              </View>

              {/* Details Grid */}
              <View style={styles.detailsGrid}>
                <View style={styles.detailItem}>
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color={colors.text.secondary}
                  />
                  <View style={styles.detailInfo}>
                    <Text
                      style={[
                        styles.detailLabel,
                        { color: colors.text.secondary },
                      ]}
                    >
                      Semana
                    </Text>
                    <Text
                      style={[
                        styles.detailValue,
                        { color: colors.text.primary },
                      ]}
                    >
                      4 de 12
                    </Text>
                  </View>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons
                    name="barbell-outline"
                    size={20}
                    color={colors.text.secondary}
                  />
                  <View style={styles.detailInfo}>
                    <Text
                      style={[
                        styles.detailLabel,
                        { color: colors.text.secondary },
                      ]}
                    >
                      Fase
                    </Text>
                    <Text
                      style={[
                        styles.detailValue,
                        { color: colors.text.primary },
                      ]}
                    >
                      Hipertrofia
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.continueButton,
                  { backgroundColor: colors.primary.main },
                ]}
                onPress={() => handleRoutinePress(activeMacrocycle.id)}
              >
                <Text
                  style={[
                    styles.continueButtonText,
                    { color: colors.background.primary },
                  ]}
                >
                  Continuar sesión
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={18}
                  color={colors.background.primary}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Upcoming Programs Section */}
      <View style={styles.upcomingSection}>
        <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
          Próximos macrociclos
        </Text>

        <View style={styles.upcomingCards}>
          {/* Upcoming Card 1 */}
          <TouchableOpacity
            style={[
              styles.upcomingCard,
              {
                backgroundColor: colors.surface.primary,
                borderColor: colors.border.light,
              },
            ]}
            onPress={() => handleRoutinePress("definicion-verano")}
          >
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdE4OISd8D3oG_mmmshiaDtFkS9Fcf8DWLOePHkrFdxQ-36Ez4e7cDTY0IofpEMgEexdl-8BypkUYMq8zYHB2AdvDAo-q3x65sp9Fh9XAXlQ8OnZnP_GRdpu8JPJGHvJUv138aeEAWsrnuJc7dv95ngTUcSzBVsuAwNWYJlwamVH0H2t7if8mncGKXlRAWu9PB8mj76j_APDCJGIwk0pnYDv1OQTB_JrpMEq8kZrTn14Mlyuj2JNq-K-w95yLfysUprxwZlAKK2o0",
              }}
              style={styles.upcomingImage}
              imageStyle={styles.upcomingImageStyle}
            />
            <View style={styles.upcomingContent}>
              <Text
                style={[styles.upcomingTitle, { color: colors.text.primary }]}
              >
                Definición Verano
              </Text>
              <Text
                style={[
                  styles.upcomingSubtitle,
                  { color: colors.text.secondary },
                ]}
              >
                Inicio: 15 Nov • 8 Semanas
              </Text>
              <View style={styles.statusBadgeBlue}>
                <Text style={styles.statusTextBlue}>PENDIENTE</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons
                name="ellipsis-vertical"
                size={20}
                color={colors.text.secondary}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Upcoming Card 2 */}
          <TouchableOpacity
            style={[
              styles.upcomingCard,
              {
                backgroundColor: colors.surface.primary,
                borderColor: colors.border.light,
              },
            ]}
            onPress={() => handleRoutinePress("fuerza-maxima")}
          >
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnjdkRECbr7V6DWtlxjgCq-0WPN5ZJBaaXWQvlpazu9n0DTfLfqv5Cp8PJEMovE2GwLCftGGYhFZQXjfmogD59CB7vgPGGBDCmPGFSsT8-TpCZtffsH606O19_NBDDhQbAmcBKc65wE70NGO3xCcsfoPXecQPPe5EwQSW8tBFTAWXFkGd_IyoZTg6GSiYtgW6LfsrwEAmiIMPEXbfT_1ZqAWHZOVlPlFYYcZXnkXwRY2i7cCmJOxGp1HxQGsobiJB1lkBanAWux9M",
              }}
              style={styles.upcomingImage}
              imageStyle={styles.upcomingImageStyle}
            />
            <View style={styles.upcomingContent}>
              <Text
                style={[styles.upcomingTitle, { color: colors.text.primary }]}
              >
                Fuerza Máxima
              </Text>
              <Text
                style={[
                  styles.upcomingSubtitle,
                  { color: colors.text.secondary },
                ]}
              >
                Inicio: 10 Ene • 6 Semanas
              </Text>
              <View style={styles.statusBadgePurple}>
                <Text style={styles.statusTextPurple}>PLANIFICADO</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Ionicons
                name="ellipsis-vertical"
                size={20}
                color={colors.text.secondary}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Stats Section */}
      <SingleStatCard
        icon="analytics"
        title="Volumen Total"
        subtitle="Esta semana"
        value={mockRoutineStats.totalVolume}
        style={{ marginHorizontal: 16, marginTop: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingTop: 8,
    backgroundColor: "transparent",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: -0.02,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  activeCard: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    justifyContent: "flex-end",
  },
  cardImageStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  cardImageContent: {
    padding: 16,
    zIndex: 20,
    backgroundColor: "transparent",
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    letterSpacing: -0.015,
  },
  cardContent: {
    padding: 16,
    gap: 16,
  },
  progressSection: {
    gap: 6,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  progressLabel: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  progressValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  progressBarBg: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
  detailsGrid: {
    flexDirection: "row",
    gap: 12,
  },
  detailItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailInfo: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 10,
    textTransform: "uppercase",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    gap: 8,
    marginTop: 4,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  upcomingSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 12,
    backgroundColor: "transparent",
  },
  upcomingCards: {
    gap: 12,
  },
  upcomingCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  upcomingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
  },
  upcomingImageStyle: {
    opacity: 0.8,
  },
  upcomingContent: {
    flex: 1,
    gap: 4,
  },
  upcomingTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  upcomingSubtitle: {
    fontSize: 14,
  },
  statusBadgeBlue: {
    backgroundColor: "#3B82F620",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  statusTextBlue: {
    color: "#3B82F6",
    fontSize: 10,
    fontWeight: "bold",
  },
  statusBadgePurple: {
    backgroundColor: "#8B5CF620",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  statusTextPurple: {
    color: "#8B5CF6",
    fontSize: 10,
    fontWeight: "bold",
  },
  moreButton: {
    padding: 8,
  },
  statsCard: {
    marginHorizontal: 16,
    marginTop: 32,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  statsInfo: {
    gap: 2,
  },
  statsTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  statsSubtitle: {
    fontSize: 10,
  },
  statsValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
