import { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { useTheme } from "@/hooks/useTheme";
import ScreenView from "@/components/ScreenView";
import { ColorsT } from "@/constants/ThemeColors";
import ThemeText from "@/components/theme/ThemeText";
import { createUIStyles } from "@/utils/uiStyles";

export default function ChecklistScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors);
  const styles = createStyles(colors);

  const [activeTab, setActiveTab] = useState<"todos" | "upcomingTasks">("todos");

  return (
    <ScreenView>
      <Link style={[uiStyles.flexAlign, uiStyles.box]} href={"/(journals)/goals"} asChild>
        <TouchableOpacity>
          <ThemeText>Goals</ThemeText>
        </TouchableOpacity>
      </Link>

      <View style={[uiStyles.flexAlign, styles.tabs]}>
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