import { styles } from "@/style/StartPageStyle";
import { SafeAreaView } from "react-native";

import CustomText from "@/components/CustomText";
import LevelButton from "@/components/LevelButton";

export default function StartPage() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText style={styles.font}>Mine SWEEPER</CustomText>
      <>
        <LevelButton level="BEGINNER: 8x8" />
        <LevelButton level="INTERMEDIATE: 10x14" />
        <LevelButton level="EXPERT: 14x32" />
      </>
    </SafeAreaView>
  );
}
