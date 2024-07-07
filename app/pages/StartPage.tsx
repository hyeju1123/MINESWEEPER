import { SafeAreaView } from "react-native";
import CustomText from "@/components/CustomText";
import PlayButton from "@/components/PlayButton";
import LevelButton from "@/components/LevelButton";
import { styles } from "@/style/StartPageStyle";
import { levelValues } from "@/recoil/SettingState";

export default function StartPage() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText style={styles.font}>MINE SWEEPER</CustomText>
      <PlayButton />
      <>
        {levelValues.map((level, i) => (
          <LevelButton key={i} level={level} />
        ))}
      </>
    </SafeAreaView>
  );
}
