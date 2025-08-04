import { StyleSheet } from "react-native";

import { Sizes } from "@/constants/Sizes";

export const UIStyles = StyleSheet.create({
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
});