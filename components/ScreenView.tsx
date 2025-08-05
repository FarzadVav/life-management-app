import Constants from "expo-constants";
import { View, ViewProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";

type ScreenViewPropsT = ViewProps & {
  statusBarPaddingTop?: boolean
}

export default function ScreenView({ statusBarPaddingTop = true, ...rest }: ScreenViewPropsT) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: (statusBarPaddingTop ? Constants.statusBarHeight : 0) + 10,
        paddingHorizontal: 10,
        paddingBottom: 10
      }}
      {...rest}
    />
  )
}