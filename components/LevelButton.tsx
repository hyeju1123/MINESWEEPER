import { Text, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { styles } from "@/style/LevelButtonStyle";

export default function LevelButton({ level }: { level: string }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.levelFont}>{level}</Text>
      <CustomText>GO</CustomText>
    </TouchableOpacity>
  );
}
