import { SafeAreaView } from "react-native";
import CustomText from "@/components/CustomText";
import PlayButton from "@/components/PlayButton";
import LevelButton from "@/components/LevelButton";
import { styles } from "@/style/StartPageStyle";

export default function StartPage() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText style={styles.font}>MINE SWEEPER</CustomText>
      <PlayButton />
      <>
        <LevelButton level="BEGINNER" />
        <LevelButton level="INTERMEDIATE" />
        <LevelButton level="EXPERT" />
      </>
    </SafeAreaView>
  );
}
