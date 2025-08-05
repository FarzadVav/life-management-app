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
      paddingHorizontal: Sizes.btnHeight / 2,
      borderRadius: Sizes.btnHeight,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: Sizes.btnHeight / 4
    },
    btnIcon: {
      height: Sizes.btnHeight,
      width: Sizes.btnHeight,
      borderRadius: Sizes.btnHeight,
      alignItems: "center",
      justifyContent: "center"
    },
    box: {
      marginTop: Sizes.spacing.md,
      backgroundColor: colors.background_thick,
      height: 100,
      borderRadius: 30
    },
  })
)