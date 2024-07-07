import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    width: "101%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderTopWidth: 0,
    borderColor: theme.cellBorderBottom,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
