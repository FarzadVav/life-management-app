import { Link } from "expo-router";
import { ChevronRightIcon, SettingsIcon, UserIcon } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ScreenView from "@/components/ScreenView";
import ThemeText from "@/components/theme/ThemeText";
import { Sizes } from "@/constants/Sizes";
import { ColorsT } from "@/constants/ThemeColors";
import { useTheme } from "@/hooks/useTheme";
import { UIStyles } from "@/utils/uiStyles";

export default function IndexScreen() {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <ScreenView>
      <View style={[UIStyles.flexAlign, styles.topBar]}>
        <TouchableOpacity style={[UIStyles.btnIcon]}>
          <SettingsIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>

        <TouchableOpacity style={[UIStyles.btn]}>
          <ThemeText>
            Support
          </ThemeText>
          <UserIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>
      </View>

      <Link style={[UIStyles.flexAlign, styles.box]} href={"/(index)/daily-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Daily plan</ThemeText>
          <ChevronRightIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>
      </Link>

      <Link style={[UIStyles.flexAlign, styles.box]} href={"/(index)/weekly-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Weekly plan</ThemeText>
          <ChevronRightIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>
      </Link>

      <Link style={[UIStyles.flexAlign, styles.box]} href={"/(index)/inbox"} asChild>
        <TouchableOpacity>
          <ThemeText>Inbox</ThemeText>
          <ChevronRightIcon color={colors.foreground} size={Sizes.icon.md} />
        </TouchableOpacity>
      </Link>
    </ScreenView>
  );
}

const createStyles = (colors: ColorsT) => (
  StyleSheet.create({
    topBar: {
      justifyContent: "space-between"
    },
    box: {
      marginTop: Sizes.spacing.md,
      backgroundColor: colors.background_thick,
      justifyContent: "center",
      height: 100,
      borderRadius: 30
    },
  })
)