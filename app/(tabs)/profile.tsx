import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { useTheme } from "@/theme";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const { colors } = useTheme();

  const statsData = [
    {
      icon: "barbell-outline",
      label: "Total",
      value: "124",
      subtitle: "Entrenamientos",
      color: colors.text.secondary,
    },
    {
      icon: "timer-outline",
      label: "Tiempo",
      value: "86",
      subtitle: "Horas Totales",
      color: colors.text.secondary,
    },
    {
      icon: "flame-outline",
      label: "Racha",
      value: "5 días",
      subtitle: "Sigue así",
      color: "#13ec80",
    },
    {
      icon: "scale-outline",
      label: "Peso",
      value: "75.5",
      unit: "kg",
      subtitle: "+0.5kg este mes",
      color: colors.text.secondary,
    },
  ];

  const menuItems = [
    {
      icon: "person-outline",
      title: "Editar Perfil",
      bgColor: "rgba(59, 130, 246, 0.1)",
      iconColor: "#3b82f6",
    },
    {
      icon: "flag-outline",
      title: "Objetivos",
      bgColor: "rgba(147, 51, 234, 0.1)",
      iconColor: "#9333ea",
    },
    {
      icon: "time-outline",
      title: "Historial de Rutinas",
      bgColor: "rgba(249, 115, 22, 0.1)",
      iconColor: "#f97316",
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background.dark }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View
        style={[styles.header, { backgroundColor: colors.background.dark }]}
      >
        <Text style={[styles.headerTitle, { color: colors.text.light }]}>
          Mi Perfil
        </Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons
            name="settings-outline"
            size={24}
            color={colors.text.light}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatarBorder, { borderColor: "#13ec80" }]}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBCYt1f_c7OXAzsx2xehotLbVoTzLu3HjnKCTxwilu-_qHG_01sbYiZttl2C7_KN5NruNx2ZjdH5hAMrMgqKAUeAlnR5L_1pYsXoog24DRE4DRyVDqn5fl3lkAIpUzXP9nhoXzx5W0THcfaPRITZgibrOwlWOgv1C96MPZ9oRXb0mv-Ze2lCgBBZ2Oqlf5u1Q1lYt0k14_7b31Jz4kpenu5ujxUGorC-zIdJNuANbR6T1KRX3BdpnVJdVPgGUu3aD6rGKGQI-XRFU",
              }}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            style={[styles.editButton, { backgroundColor: "#13ec80" }]}
          >
            <Ionicons name="pencil" size={16} color="#11221a" />
          </TouchableOpacity>
        </View>

        <Text style={[styles.userName, { color: colors.text.light }]}>
          Alex Martinez
        </Text>

        <View style={styles.membershipBadge}>
          <Ionicons name="checkmark-circle" size={16} color="#13ec80" />
          <Text style={[styles.membershipText, { color: "#13ec80" }]}>
            Pro Member
          </Text>
        </View>
      </View>

      {/* Quick Stats Grid */}
      <View style={styles.statsSection}>
        <View style={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <View
              key={index}
              style={[styles.statCard, { backgroundColor: "#193326" }]}
            >
              <View style={styles.statHeader}>
                <Ionicons
                  name={stat.icon as any}
                  size={20}
                  color={stat.color}
                />
                <Text style={[styles.statLabel, { color: stat.color }]}>
                  {stat.label.toUpperCase()}
                </Text>
              </View>
              <Text style={[styles.statValue, { color: colors.text.light }]}>
                {stat.value}
                {stat.unit && (
                  <Text
                    style={[styles.statUnit, { color: colors.text.secondary }]}
                  >
                    {" "}
                    {stat.unit}
                  </Text>
                )}
              </Text>
              <Text
                style={[
                  styles.statSubtitle,
                  {
                    color:
                      stat.color === "#13ec80"
                        ? "#13ec80"
                        : colors.text.secondary,
                  },
                ]}
              >
                {stat.subtitle}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Progress Chart Section */}
      <View style={styles.chartSection}>
        <View style={[styles.chartContainer, { backgroundColor: "#193326" }]}>
          <View style={styles.chartHeader}>
            <Text style={[styles.chartTitle, { color: colors.text.light }]}>
              Progreso de Peso
            </Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllButton, { color: "#13ec80" }]}>
                Ver Todo
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.chartArea}>
            <View style={styles.chartPlaceholder}>
              <View style={styles.chartBars}>
                {[60, 75, 45, 80, 70].map((height, index) => (
                  <View key={index} style={styles.chartBarContainer}>
                    <View
                      style={[
                        styles.chartBar,
                        {
                          height: `${height}%`,
                          backgroundColor:
                            index === 4 ? "#13ec80" : "rgba(19, 236, 128, 0.3)",
                        },
                      ]}
                    />
                  </View>
                ))}
              </View>
              <Text
                style={[styles.chartLabel, { color: colors.text.secondary }]}
              >
                Últimos 5 meses
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Menu Actions */}
      <View style={styles.menuSection}>
        <View style={[styles.menuContainer, { backgroundColor: "#193326" }]}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <View
                    style={[
                      styles.menuIconContainer,
                      { backgroundColor: item.bgColor },
                    ]}
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={20}
                      color={item.iconColor}
                    />
                  </View>
                  <Text
                    style={[styles.menuItemText, { color: colors.text.light }]}
                  >
                    {item.title}
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.text.secondary}
                />
              </TouchableOpacity>
              {index < menuItems.length - 1 && (
                <View
                  style={[
                    styles.menuSeparator,
                    { backgroundColor: colors.text.secondary },
                  ]}
                />
              )}
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom spacing */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileSection: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatarBorder: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    padding: 4,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#11221a",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  membershipBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(19, 236, 128, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  membershipText: {
    fontSize: 14,
    fontWeight: "500",
  },
  statsSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    width: (width - 44) / 2,
    padding: 16,
    borderRadius: 12,
    gap: 4,
  },
  statHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statUnit: {
    fontSize: 14,
    fontWeight: "normal",
  },
  statSubtitle: {
    fontSize: 12,
  },
  chartSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  chartContainer: {
    borderRadius: 12,
    padding: 20,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    fontSize: 12,
    fontWeight: "500",
  },
  chartArea: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  chartPlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chartBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 80,
    width: "80%",
    gap: 8,
  },
  chartBarContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
  },
  chartBar: {
    width: "100%",
    borderRadius: 2,
    minHeight: 8,
  },
  chartLabel: {
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
  menuSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  menuContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  menuSeparator: {
    height: 0.5,
    marginLeft: 68,
    opacity: 0.3,
  },
  logoutButton: {
    paddingVertical: 16,
    alignItems: "center",
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "500",
  },
});
