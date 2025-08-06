import { StyleSheet } from "react-native";

import { Sizes } from "@/constants/Sizes";
import { ColorsT } from "@/constants/ThemeColors";

export const createUIStyles = (colors: ColorsT) => (
  StyleSheet.create({
    rowAlign: {
      flexDirection: "row",
      alignItems: "center"
    },
    columnAlign: {
      flexDirection: "column",
      justifyContent: "center"
    },
    rowCenter: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    columnCenter: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold"
    },
    btn: {
      height: Sizes.btnHeight,
      borderRadius: Sizes.btnHeight,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: Sizes.btnHeight / 8
    },
    btnIcon: {
      height: Sizes.btnHeight,
      width: Sizes.btnHeight,
      borderRadius: Sizes.btnHeight,
      alignItems: "center",
      justifyContent: "center"
    },
    fillBtn: {
      backgroundColor: colors.background_thick,
      paddingHorizontal: Sizes.btnHeight / 2,
    },
    outlineBtn: {
      borderWidth: 1,
      borderColor: colors.background_thin,
      paddingHorizontal: Sizes.btnHeight / 2,
    },
    textInput: {
      borderWidth: 1,
      borderColor: colors.background_thin,
      color: colors.foreground,
      height: Sizes.btnHeight,
      borderRadius: Sizes.btnHeight,
      paddingHorizontal: Sizes.btnHeight / 2,
      flex: 1
    },
    box: {
      backgroundColor: colors.background_thick,
      padding: Sizes.spacing.md,
      borderRadius: Sizes.spacing.md
    },
  })
)