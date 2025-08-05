import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { Theme, DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { useTheme } from "@/hooks/useTheme";
import { ThemeColors } from "@/constants/ThemeColors";

const MyDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    background: ThemeColors.light.background,
    primary: ThemeColors.light.primary,
    card: ThemeColors.light.background_thick,
    text: ThemeColors.light.foreground,
    border: ThemeColors.light.background_thin,
    notification: ThemeColors.light.primary,
  }
}

const MyDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    background: ThemeColors.dark.background,
    primary: ThemeColors.dark.primary,
    card: ThemeColors.dark.background_thick,
    text: ThemeColors.dark.foreground,
    border: ThemeColors.dark.background_thin,
    notification: ThemeColors.dark.primary,
  }
}

export default function RootLayout() {
  const { theme } = useTheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
