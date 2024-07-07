import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { theme } from "./color";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    zIndex: 20,
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modal: {
    width: "100%",
    padding: 20,
    paddingBottom: 50,
    position: "absolute",
    bottom: 0,
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
