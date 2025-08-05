import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { useTheme } from "@/hooks/useTheme";
import ScreenView from "@/components/ScreenView";
import { createUIStyles } from "@/utils/uiStyles";
import ThemeText from "@/components/theme/ThemeText";

export default function JournalsScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors);

  return (
    <ScreenView>
      <Link style={[uiStyles.columnCenter, uiStyles.box]} href={"/"} asChild>
        <TouchableOpacity>
          <ThemeText style={[uiStyles.heading]}>Notes</ThemeText>
          <ThemeText style={{ marginTop: Sizes.spacing.sm }}>Your brain data</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.columnCenter, uiStyles.box]} href={"/"} asChild>
        <TouchableOpacity>
          <ThemeText style={[uiStyles.heading]}>Knowledges</ThemeText>
          <ThemeText style={{ marginTop: Sizes.spacing.sm }}>Your new things that you’re learned</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.columnCenter, uiStyles.box]} href={"/"} asChild>
        <TouchableOpacity>
          <ThemeText style={[uiStyles.heading]}>Thoughts</ThemeText>
          <ThemeText style={{ marginTop: Sizes.spacing.sm }}>Your feelings and mind voices</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.columnCenter, uiStyles.box]} href={"/"} asChild>
        <TouchableOpacity>
          <ThemeText style={[uiStyles.heading]}>Events</ThemeText>
          <ThemeText style={{ marginTop: Sizes.spacing.sm }}>Your memories from what is happened</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.columnCenter, uiStyles.box]} href={"/"} asChild>
        <TouchableOpacity>
          <ThemeText style={[uiStyles.heading]}>Ideas</ThemeText>
          <ThemeText style={{ marginTop: Sizes.spacing.sm }}>Your creative approaches for better life</ThemeText>
        </TouchableOpacity>
      </Link>
    </ScreenView>
  )
}

const styles = StyleSheet.create({

})