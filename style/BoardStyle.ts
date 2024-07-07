import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
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
});
