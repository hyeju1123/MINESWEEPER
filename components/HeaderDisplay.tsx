import { PropsWithChildren } from "react";
import { View } from "react-native";
import CustomText from "./CustomText";
import { styles } from "@/style/HeaderDisplayStyle";
import { theme } from "@/style/color";

type HeaderDisplayProps = {
  text: string;
};

export default function HeaderDisplay({ text }: HeaderDisplayProps) {
  return (
    <View style={styles.container}>
      <CustomText style={{ fontSize: 20, color: theme.displayText }}>
        {"0".repeat(3 - text.length || 0) + text}
      </CustomText>
    </View>
  );
}
