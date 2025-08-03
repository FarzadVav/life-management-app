import { useColorScheme } from "react-native";

import { ThemeColors } from "@/constants/ThemeColors";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";

  return ThemeColors[theme];
}
