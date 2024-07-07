import { View } from "react-native";
import LeftFlagDisplay from "./LeftFlagDisplay";
import SmileButton from "./SmileButton";
import TimeDisplay from "./TimeDisplay";
import { styles } from "@/style/GameHeaderStyle";

export default function GameHeader() {
  return (
    <View style={styles.container}>
      <LeftFlagDisplay />
      <SmileButton />
      <TimeDisplay />
    </View>
  );
}
