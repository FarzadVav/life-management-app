import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import ScreenView from "@/components/ScreenView";
import { createUIStyles } from "@/utils/uiStyles";
import ThemeText from "@/components/theme/ThemeText";

export default function JournalsScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors);

  return (
    <ScreenView>
      <Link style={[uiStyles.flexAlign, uiStyles.box]} href={"/(index)/daily-plan"} asChild>
        <TouchableOpacity>
          <ThemeText>Daily plan</ThemeText>
        </TouchableOpacity>
      </Link>
    </ScreenView>
  )
}