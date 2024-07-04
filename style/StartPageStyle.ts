import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  font: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 30,
  },
});
