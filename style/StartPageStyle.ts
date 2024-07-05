import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
  },
  font: {
    fontSize: 25,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    marginTop: 50,
    backgroundColor: theme.card,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
