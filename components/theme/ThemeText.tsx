import { Text, TextProps } from 'react-native';

import { useThemeColors } from '@/hooks/useTheme';
import { ColorsT } from '@/constants/ThemeColors';

type ThemeTextProps = TextProps & {
  color?: keyof ColorsT
}

export default function ThemeText({ color, style, ...rest }: ThemeTextProps) {
  const { colors } = useThemeColors();

  return (
    <Text
      style={[
        {
          color: colors[color ?? "foreground"]
        },
        style
      ]}
      {...rest}
    />
  )
}