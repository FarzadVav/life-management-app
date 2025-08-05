import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { UIStyles } from "@/utils/uiStyles";
import { useTheme } from "@/hooks/useTheme";
import ScreenView from "@/components/ScreenView";
import { ColorsT } from "@/constants/ThemeColors";
import ThemeText from "@/components/theme/ThemeText";

export default function JournalsScreen() {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <ScreenView>
      <Link style={[UIStyles.flexAlign, styles.box]} href={"/(index)/daily-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Daily plan</ThemeText>
        </TouchableOpacity>
      </Link>
    </ScreenView>
  )
}

const createStyles = (colors: ColorsT) => (
  StyleSheet.create({
    box: {
      marginTop: Sizes.spacing.md,
      backgroundColor: colors.background_thick,
      justifyContent: "center",
      height: 100,
      borderRadius: 30
    },
  })
)