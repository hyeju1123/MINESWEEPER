import { ReactNode } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { useFonts } from "expo-font";
import { theme } from "@/style/color";

interface Props {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}
export default function CustomText({ children, style }: Props) {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../assets/fonts/MINE-SWEEPER.otf"),
  });

  if (!fontsLoaded) return null;

  return <Text style={[styles.base, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "MINE-SWEEPER",
    color: theme.text,
  },
});
