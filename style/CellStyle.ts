import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderTopColor: theme.cellBorderTop,
    borderLeftColor: theme.cellBorderTop,
    borderBottomColor: theme.cellBorderBottom,
    borderRightColor: theme.cellBorderBottom,
    backgroundColor: theme.background,
  },
  revealed: {
    borderWidth: 1,
    borderColor: theme.cellBorderBottom,
  },
  cellFont: {
    fontSize: 7,
  },
});
