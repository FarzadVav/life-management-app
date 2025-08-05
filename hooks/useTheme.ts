import { useColorScheme } from "react-native";

import { ThemeColors } from "@/constants/ThemeColors";

export function useTheme() {
  const theme = useColorScheme() ?? "light";

  const colors = ThemeColors[theme];

  return { theme, colors };
}
