import { Tabs } from 'expo-router';
import { HomeIcon, ListTodoIcon, PencilLineIcon } from 'lucide-react-native';

import { useTheme } from '@/hooks/useTheme';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.foreground,
        tabBarInactiveTintColor: colors.background,
        headerShown: false,
        animation: "shift",
        tabBarStyle: {
          borderTopWidth: 2,
          height: 70,
          paddingTop: 15,
        }
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