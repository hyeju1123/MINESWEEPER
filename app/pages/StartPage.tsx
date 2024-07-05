import { SafeAreaView, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CustomText from "@/components/CustomText";
import LevelButton from "@/components/LevelButton";
import { styles } from "@/style/StartPageStyle";

import useBombPlaced from "@/hooks/BombPlaced";

type StartPageProps = NativeStackScreenProps<RootStackParamList, "Start">;

export default function StartPage({
  navigation: { navigate },
}: StartPageProps) {
  const { handlePlaceBomb } = useBombPlaced();

  const moveToPlay = () => {
    navigate("Play");
    handlePlaceBomb(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomText style={styles.font}>MINE SWEEPER</CustomText>
      <TouchableOpacity style={styles.button} onPress={moveToPlay}>
        <CustomText style={styles.font}>GO</CustomText>
      </TouchableOpacity>
      <>
        <LevelButton level="BEGINNER" />
        <LevelButton level="INTERMEDIATE" />
        <LevelButton level="EXPERT" />
      </>
    </SafeAreaView>
  );
}
