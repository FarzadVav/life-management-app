import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { HomeIcon, ListTodoIcon, PencilLineIcon } from 'lucide-react-native';

import { useThemeColors } from '@/hooks/useThemeColors';
import { CustomTabTrigger } from '@/components/CustomTabTrigger';

export default function TabsLayout() {
  const colors = useThemeColors();

  return (
    <Tabs>
      <TabSlot />

      <TabList
        style={{
          height: 80,
          backgroundColor: colors.background_thick,
          borderTopColor: colors.background_thin,
          borderTopWidth: 2,
          alignItems: "center"
        }}
      >
        <TabTrigger
          style={{
            flex: 1,
            alignItems: "center"
          }}
          name="journals"
          href="/journals"
        >
          <CustomTabTrigger name='journals'>
            <PencilLineIcon color={colors.foreground} size={24} />
          </CustomTabTrigger>
        </TabTrigger>

        <TabTrigger
          style={{
            flex: 1,
            alignItems: "center"
          }}
          name="checklist"
          href="/checklist"
        >
          <CustomTabTrigger name='checklist'>
            <ListTodoIcon color={colors.foreground} size={24} />
          </CustomTabTrigger>
        </TabTrigger>

        <TabTrigger
          style={{
            flex: 1,
            alignItems: "center"
          }}
          name="home"
          href="/"
        >
          <CustomTabTrigger name='home'>
            <HomeIcon color={colors.foreground} size={24} />
          </CustomTabTrigger>
        </TabTrigger>
      </TabList>
    </Tabs>
  )
}