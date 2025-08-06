import { useState } from 'react';
import { CheckIcon, PlusIcon, TrashIcon } from 'lucide-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Reanimated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { Sizes } from '@/constants/Sizes';
import { useTheme } from '@/hooks/useTheme';
import ScreenView from '@/components/ScreenView';
import { createUIStyles } from '@/utils/uiStyles';
import { ColorsT } from '@/constants/ThemeColors';
import ThemeText from '@/components/theme/ThemeText';

export default function DailyPlanScreen() {
  const { colors } = useTheme();

  const uiStyles = createUIStyles(colors);
  const styles = createStyles(colors);

  const [currentDay, setCurrentDay] = useState<"yesterday" | "toDay" | "tomorrow">("toDay");
  const [textInput, setTextInput] = useState("");

  function RightAction(_: SharedValue<number>, drag: SharedValue<number>) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 50 }],
      }
    });

    return (
      <Reanimated.View style={[styleAnimation, uiStyles.rowAlign, styles.reanimatedView]}>
        <TouchableOpacity
          style={[uiStyles.btnIcon]}
        >
          <CheckIcon color={colors.foreground} size={Sizes.icon.sm} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[uiStyles.btnIcon]}
        >
          <TrashIcon color={colors.foreground} size={Sizes.icon.sm} />
        </TouchableOpacity>
      </Reanimated.View>
    );
  }

  return (
    <>
      <ScreenView statusBarPaddingTop={false}>
        <View style={[uiStyles.rowAlign, styles.topBar]}>
          <TouchableOpacity
            onPress={() => setCurrentDay("yesterday")}
            style={[uiStyles.btn, styles.btns, currentDay === "yesterday" ? uiStyles.fillBtn : null]}
          >
            <ThemeText>
              Yesterday
            </ThemeText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentDay("toDay")}
            style={[uiStyles.btn, styles.btns, currentDay === "toDay" ? uiStyles.fillBtn : null]}
          >
            <ThemeText style={[styles.toDay]}>{new Date().toLocaleDateString()}</ThemeText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentDay("tomorrow")}
            style={[uiStyles.btn, styles.btns, currentDay === "tomorrow" ? uiStyles.fillBtn : null]}
          >
            <ThemeText>
              Tomorrow
            </ThemeText>
          </TouchableOpacity>
        </View>

        <View style={[uiStyles.rowAlign, styles.inputContainer]}>
          <TextInput
            value={textInput}
            placeholder="Type here..."
            onChangeText={setTextInput}
            style={[uiStyles.textInput]}
            cursorColor={colors.foreground}
            placeholderTextColor={colors.background_thin}
          />

          <TouchableOpacity style={[uiStyles.btnIcon, uiStyles.fillBtn]}>
            <PlusIcon color={colors.foreground} size={Sizes.icon.md} />
          </TouchableOpacity>
        </View>

        <GestureHandlerRootView style={[styles.worksContainer]}>
          <Swipeable
            friction={2}
            rightThreshold={20}
            containerStyle={[uiStyles.box]}
            renderRightActions={RightAction}
            enableTrackpadTwoFingerGesture
          >
            <ThemeText>
              Lorem ipsum dolor sit amet.
            </ThemeText>
          </Swipeable>
        </GestureHandlerRootView>
      </ScreenView>
    </>
  )
}

const createStyles = (colors: ColorsT) => (
  StyleSheet.create({
    topBar: {
      justifyContent: "space-evenly",
    },
    btns: {
      flex: 1,
      maxWidth: "33.3333333333%"
    },
    toDay: {
      fontWeight: "bold",
      letterSpacing: 1
    },
    inputContainer: {
      paddingTop: Sizes.spacing.lg,
      marginTop: Sizes.spacing.lg,
      borderTopWidth: 1,
      borderStyle: "dashed",
      borderTopColor: colors.background_thin,
      gap: Sizes.spacing.sm
    },
    worksContainer: {
      marginTop: Sizes.spacing.lg
    },
    reanimatedView: {
      gap: Sizes.spacing.sm,
      paddingHorizontal: Sizes.spacing.md
    }
  })
)