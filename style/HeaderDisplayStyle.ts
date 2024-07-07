import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    minWidth: 70,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.displayBg,
    borderWidth: 2,
    borderTopColor: theme.cellBorderBottom,
    borderLeftColor: theme.cellBorderBottom,
    borderBottomColor: theme.cellBorderTop,
    borderRightColor: theme.cellBorderTop,
  },
});
