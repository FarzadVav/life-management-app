import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ScreenView from "@/components/ScreenView";
import ThemeText from "@/components/theme/ThemeText";
import { Sizes } from "@/constants/Sizes";
import { ColorsT } from "@/constants/ThemeColors";
import { useTheme } from "@/hooks/useTheme";
import { createUIStyles } from "@/utils/uiStyles";

export default function ChecklistScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors);
  const styles = createStyles(colors);

  const [activeTab, setActiveTab] = useState<"todos" | "upcomingTasks">("todos");

  return (
    <ScreenView>
      <Link style={[uiStyles.rowCenter, uiStyles.box]} href={"/(journals)/goals"} asChild>
        <TouchableOpacity>
          <ThemeText>Goals</ThemeText>
        </TouchableOpacity>
      </Link>

      <View style={[uiStyles.rowCenter, styles.tabs]}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "todos" ? styles.activeTab : null]}
          onPress={() => setActiveTab("todos")}
        >
          <ThemeText style={[activeTab === "todos" ? styles.activeTabText : null]}>Todos</ThemeText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "upcomingTasks" ? styles.activeTab : null]}
          onPress={() => setActiveTab("upcomingTasks")}
        >
          <ThemeText style={[activeTab === "upcomingTasks" ? styles.activeTabText : null]}>Upcoming tasks</ThemeText>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}

const createStyles = (colors: ColorsT) => {
  const uiStyles = createUIStyles(colors);

  return StyleSheet.create({
    tabs: {
      marginTop: Sizes.spacing.md
    },
    tab: {
      height: uiStyles.btn.height,
      paddingHorizontal: uiStyles.btn.paddingHorizontal,
      flexDirection: uiStyles.btn.flexDirection,
      alignItems: uiStyles.btn.alignItems,
      justifyContent: uiStyles.btn.justifyContent,
      flex: 1,
      borderBottomWidth: 2,
      borderBottomColor: colors.background_thin
    },
    activeTab: {
      borderBottomColor: colors.foreground
    },
    activeTabText: {
      fontWeight: "bold"
    }
  })
}