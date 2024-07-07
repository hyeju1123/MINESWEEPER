import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    borderWidth: 1,
    borderTopColor: theme.cellBorderBottom,
    borderLeftColor: theme.cellBorderBottom,
    borderRightColor: theme.cellBorderTop,
    borderBottomColor: theme.cellBorderTop,
  },
});
