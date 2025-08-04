import Constants from "expo-constants";
import { View, ViewProps } from "react-native";

import { useThemeColors } from "@/hooks/useTheme";

export default function ScreenView(props: ViewProps) {
  const { colors } = useThemeColors();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        paddingBottom: 10
      }}
      {...props}
    />
  )
}