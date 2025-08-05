import { Link } from "expo-router";
import { SettingsIcon, UserIcon } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ScreenView from "@/components/ScreenView";
import ThemeText from "@/components/theme/ThemeText";
import { Sizes } from "@/constants/Sizes";
import { useTheme } from "@/hooks/useTheme";
import { createUIStyles } from "@/utils/uiStyles";

export default function IndexScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors)

  return (
    <ScreenView>
      <View style={[uiStyles.rowCenter, styles.topBar]}>
        <TouchableOpacity style={[uiStyles.btnIcon]}>
          <SettingsIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>

        <TouchableOpacity style={[uiStyles.btn]}>
          <ThemeText>
            Support
          </ThemeText>
          <UserIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>
      </View>

      <Link style={[uiStyles.rowCenter, uiStyles.box]} href={"/(index)/daily-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Daily plan</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.rowCenter, uiStyles.box]} href={"/(index)/weekly-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Weekly plan</ThemeText>
        </TouchableOpacity>
      </Link>

      <Link style={[uiStyles.rowCenter, uiStyles.box]} href={"/(index)/inbox"} asChild>
        <TouchableOpacity>
          <ThemeText>Inbox</ThemeText>
        </TouchableOpacity>
      </Link>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    justifyContent: "space-between"
  }
})