import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

type ViewType = "Macrociclos" | "Microciclos" | "Splits";

export default function RoutinesScreen() {
  const { colors } = useTheme();
  const [selectedView, setSelectedView] = useState<ViewType>("Macrociclos");

  const viewOptions: ViewType[] = ["Macrociclos", "Microciclos", "Splits"];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Mis Programas",
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
            fontWeight: "bold",
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Text style={[styles.editButton, { color: colors.primary }]}>
                Editar
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        {/* Segmented Control */}
        <View
          style={[
            styles.segmentedContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View
            style={[
              styles.segmentedControl,
              { backgroundColor: colors.surface },
            ]}
          >
            {viewOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.segmentedOption,
                  selectedView === option && [
                    styles.segmentedActive,
                    { backgroundColor: colors.primary },
                  ],
                ]}
                onPress={() => setSelectedView(option)}
              >
                <Text
                  style={[
                    styles.segmentedText,
                    {
                      color:
                        selectedView === option
                          ? colors.background
                          : colors.textSecondary,
                    },
                    selectedView === option && { color: colors.background },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Active Program Section */}
        <View style={[styles.section, { backgroundColor: colors.background }]}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              En curso
            </Text>
            <View
              style={[styles.iconBadge, { borderColor: colors.primary + "30" }]}
            >
              <Ionicons name="flash" size={18} color={colors.primary} />
            </View>
          </View>

          {/* Active Program Card */}
          <View
            style={[styles.activeCard, { backgroundColor: colors.surface }]}
          >
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxI2B_zE86Wd12nJRsNgWz66hXK2226uKPmfciEAvMHRob1bu7bV687NK7xsaupKyX4imtTyihyLRCTLVxnVmbzLTocb-pMYNh1o0pw4C3ubLeCUrq3GEMbXd6aIuy4K2RtRk0KKhbKttWVe7MxgSqCeMcpRBAFya2u__NxFxKFq1CGfNObRKG4WXu7XNuWC7T9Ths_TW9G2xYMOXVmSm4Gs0fi8ui6kX_h8nns4hBTvPirlLEyHHhiko7UJlvHq6Pjfv4HCVXCfU",
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
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Text
                    style={[styles.categoryText, { color: colors.background }]}
                  >
                    FUERZA
                  </Text>
                </View>
                <Text style={styles.cardTitle}>Macrociclo de Volumen</Text>
              </View>
            </ImageBackground>

            <View style={styles.cardContent}>
              {/* Progress Bar */}
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text
                    style={[
                      styles.progressLabel,
                      { color: colors.textSecondary },
                    ]}
                  >
                    PROGRESO GENERAL
                  </Text>
                  <Text
                    style={[styles.progressValue, { color: colors.primary }]}
                  >
                    65%
                  </Text>
                </View>
                <View
                  style={[
                    styles.progressBarBg,
                    { backgroundColor: colors.background },
                  ]}
                >
                  <View
                    style={[
                      styles.progressBar,
                      { backgroundColor: colors.primary, width: "65%" },
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
                    color={colors.textSecondary}
                  />
                  <View style={styles.detailInfo}>
                    <Text
                      style={[
                        styles.detailLabel,
                        { color: colors.textSecondary },
                      ]}
                    >
                      Semana
                    </Text>
                    <Text style={[styles.detailValue, { color: colors.text }]}>
                      4 de 12
                    </Text>
                  </View>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons
                    name="barbell-outline"
                    size={20}
                    color={colors.textSecondary}
                  />
                  <View style={styles.detailInfo}>
                    <Text
                      style={[
                        styles.detailLabel,
                        { color: colors.textSecondary },
                      ]}
                    >
                      Fase
                    </Text>
                    <Text style={[styles.detailValue, { color: colors.text }]}>
                      Hipertrofia
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  styles.continueButton,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text
                  style={[
                    styles.continueButtonText,
                    { color: colors.background },
                  ]}
                >
                  Continuar sesión
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={18}
                  color={colors.background}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Upcoming Programs Section */}
        <View style={styles.upcomingSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Próximos programas
          </Text>

          <View style={styles.upcomingCards}>
            {/* Upcoming Card 1 */}
            <View
              style={[
                styles.upcomingCard,
                { backgroundColor: colors.surface, borderColor: colors.border },
              ]}
            >
              <ImageBackground
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdE4OISd8D3oG_mmmshiaDtFkS9Fcf8DWLOePHkrFdxQ-36Ez4e7cDTY0IofpEMgEexdl-8BypkUYMq8zYHB2AdvDAo-q3x65sp9Fh9XAXlQ8OnZnP_GRdpu8JPJGHvJUv138aeEAWsrnuJc7dv95ngTUcSzBVsuAwNWYJlwamVH0H2t7if8mncGKXlRAWu9PB8mj76j_APDCJGIwk0pnYDv1OQTB_JrpMEq8kZrTn14Mlyuj2JNq-K-w95yLfysUprxwZlAKK2o0",
                }}
                style={styles.upcomingImage}
                imageStyle={styles.upcomingImageStyle}
              />
              <View style={styles.upcomingContent}>
                <Text style={[styles.upcomingTitle, { color: colors.text }]}>
                  Definición Verano
                </Text>
                <Text
                  style={[
                    styles.upcomingSubtitle,
                    { color: colors.textSecondary },
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
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
            </View>

            {/* Upcoming Card 2 */}
            <View
              style={[
                styles.upcomingCard,
                { backgroundColor: colors.surface, borderColor: colors.border },
              ]}
            >
              <ImageBackground
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnjdkRECbr7V6DWtlxjgCq-0WPN5ZJBaaXWQvlpazu9n0DTfLfqv5Cp8PJEMovE2GwLCftGGYhFZQXjfmogD59CB7vgPGGBDCmPGFSsT8-TpCZtffsH606O19_NBDDhQbAmcBKc65wE70NGO3xCcsfoPXecQPPe5EwQSW8tBFTAWXFkGd_IyoZTg6GSiYtgW6LfsrwEAmiIMPEXbfT_1ZqAWHZOVlPlFYYcZXnkXwRY2i7cCmJOxGp1HxQGsobiJB1lkBanAWux9M",
                }}
                style={styles.upcomingImage}
                imageStyle={styles.upcomingImageStyle}
              />
              <View style={styles.upcomingContent}>
                <Text style={[styles.upcomingTitle, { color: colors.text }]}>
                  Fuerza Máxima
                </Text>
                <Text
                  style={[
                    styles.upcomingSubtitle,
                    { color: colors.textSecondary },
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
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Stats Section */}
        <View
          style={[
            styles.statsCard,
            {
              backgroundColor: colors.primary + "10",
              borderColor: colors.primary + "20",
            },
          ]}
        >
          <View style={styles.statsContent}>
            <View
              style={[
                styles.statsIcon,
                { backgroundColor: colors.primary + "20" },
              ]}
            >
              <Ionicons name="analytics" size={20} color={colors.primary} />
            </View>
            <View style={styles.statsInfo}>
              <Text style={[styles.statsTitle, { color: colors.text }]}>
                Volumen Total
              </Text>
              <Text
                style={[styles.statsSubtitle, { color: colors.textSecondary }]}
              >
                Esta semana
              </Text>
            </View>
          </View>
          <Text style={[styles.statsValue, { color: colors.text }]}>
            12,450 kg
          </Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
      >
        <Ionicons name="add" size={32} color={colors.background} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  editButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
  segmentedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "sticky",
    top: 0,
    zIndex: 40,
  },
  segmentedControl: {
    flexDirection: "row",
    height: 48,
    borderRadius: 8,
    padding: 4,
    gap: 4,
  },
  segmentedOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  segmentedActive: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentedText: {
    fontSize: 14,
    fontWeight: "bold",
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
  bottomSpacer: {
    height: 100,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#13ec80",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 14,
    elevation: 8,
  },
});
