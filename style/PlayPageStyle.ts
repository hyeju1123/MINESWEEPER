import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  boardWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});
