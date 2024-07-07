import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    zIndex: 20,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modal: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
    backgroundColor: theme.card,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  restartButton: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.text,
  },
  font: {
    textAlign: "center",
    color: theme.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
