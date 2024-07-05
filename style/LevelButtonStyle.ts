import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    padding: 10,
    backgroundColor: theme.card,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.text,
  },
  levelFont: {
    flex: 1,
    textAlign: "right",
    color: theme.text,
    fontSize: 15,
  },
});
