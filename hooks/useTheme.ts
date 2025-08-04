import { useColorScheme } from "react-native";

import { ThemeColors } from "@/constants/ThemeColors";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";

  const colors = ThemeColors[theme];

  return { theme, colors };
}
