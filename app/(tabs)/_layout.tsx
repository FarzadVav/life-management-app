import { Tabs } from 'expo-router';
import { HomeIcon, ListTodoIcon, PencilLineIcon } from 'lucide-react-native';

import { useThemeColors } from '@/hooks/useTheme';

export default function TabsLayout() {
  const { colors } = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.foreground,
        tabBarInactiveTintColor: colors.background,
        tabBarStyle: {
          backgroundColor: colors.background_thick,
          borderTopWidth: 2,
          borderColor: colors.background_thin,
          height: 70,
          paddingTop: 15,
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="journals"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <PencilLineIcon color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="checklist"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <ListTodoIcon color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />
        }}
      />
    </Tabs>
  )
}