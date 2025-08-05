import { SettingsIcon, UserIcon } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { useTheme } from "@/hooks/useTheme";
import { UIStyles } from "@/utils/uiStyles";
import ScreenView from "@/components/ScreenView";
import ThemeText from "@/components/theme/ThemeText";

export default function IndexScreen() {
  const { colors } = useTheme();

  return (
    <ScreenView>
      <View style={[styles.topBar]}>
        <TouchableOpacity style={[UIStyles.btn]}>
          <UserIcon color={colors.foreground} size={Sizes.icon} />
          <ThemeText>
            Support
          </ThemeText>
        </TouchableOpacity>

        <TouchableOpacity style={[UIStyles.btnIcon]}>
          <SettingsIcon color={colors.foreground} size={Sizes.icon} />
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})