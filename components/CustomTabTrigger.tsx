import { useTabTrigger } from "expo-router/ui";
import { StyleSheet, View, ViewProps } from "react-native";

import { ColorsType } from "@/constants/ThemeColors";
import { useThemeColors } from "@/hooks/useThemeColors";

type CustomTabTriggerProps = ViewProps & {
  name: string;
}

export function CustomTabTrigger({ name, ...rest }: CustomTabTriggerProps) {
  const trigger = useTabTrigger({ name });
  const focused = trigger.trigger?.isFocused;

  const colors = useThemeColors();
  const styles = createStyles(colors);

  return (
    <View
      style={[
        styles.default,
        focused && styles.active
      ]}
      {...rest}
    />
  );
}

const createStyles = (colors: ColorsType) => (
  StyleSheet.create({
    default: {
      paddingVertical: 12,
      paddingHorizontal: 30
    },
    active: {
      backgroundColor: colors.background,
      borderRadius: 9999
    }
  })
)