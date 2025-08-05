import { Text, TextProps } from 'react-native';

import { useTheme } from '@/hooks/useTheme';
import { ColorsT } from '@/constants/ThemeColors';

type ThemeTextProps = TextProps & {
  color?: keyof ColorsT
}

export default function ThemeText({ color, style, ...rest }: ThemeTextProps) {
  const { colors } = useTheme();

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