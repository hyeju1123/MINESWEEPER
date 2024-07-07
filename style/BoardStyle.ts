import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    borderWidth: 3,
    borderTopColor: theme.cellBorderBottom,
    borderLeftColor: theme.cellBorderBottom,
    borderBottomColor: theme.cellBorderTop,
    borderRightColor: theme.cellBorderTop,
  },
  boardRow: {
    display: "flex",
    flexDirection: "row",
  },
  downArrow: {
    alignSelf: "center",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(255, 0, 0, 0.3)",
    transform: [{ rotate: "180deg" }],
  },
});
