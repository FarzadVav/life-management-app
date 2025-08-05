import Constants from "expo-constants";
import { View, ViewProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";

export default function ScreenView(props: ViewProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 10,
        paddingBottom: 10
      }}
      {...props}
    />
  )
}