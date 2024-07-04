import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    minWidth: 250,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "auto",
    marginTop: 15,
    padding: 10,
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
  levelFont: {
    color: theme.text,
    fontSize: 15,
    marginRight: 20,
  },
});
