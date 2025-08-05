import { Text } from 'react-native'

import ScreenView from '@/components/ScreenView'

export default function InboxScreen() {
  return (
    <>
      <ScreenView statusBarPaddingTop={false}>
        <Text>InboxScreen</Text>
      </ScreenView>
    </>
  )
}