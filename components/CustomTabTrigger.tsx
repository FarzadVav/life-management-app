import { useTabTrigger } from "expo-router/ui";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";

import { useThemeColors } from "@/hooks/useTheme";

type CustomTabTriggerProps = ViewProps & {
  name: string;
};

export function CustomTabTrigger({ name, ...rest }: CustomTabTriggerProps) {
  const trigger = useTabTrigger({ name });
  const focused = trigger.trigger?.isFocused;

  const { colors } = useThemeColors();

  const animate = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animate, {
      toValue: focused ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [focused, animate]);

  const backgroundColor = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.background_thick, colors.background],
  });

  const scaleAnimate = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0.75, 1],
  })

  return (
    <Animated.View
      style={[
        styles.default,
        {
          backgroundColor,
          transform: [{
            scale: scaleAnimate
          }]
        }
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 999
  },
});