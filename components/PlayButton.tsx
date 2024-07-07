import { TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app/App";

import CustomText from "./CustomText";
import { styles } from "@/style/StartPageStyle";

import useInit from "@/hooks/Init";

export default function PlayButton() {
  const { initGame } = useInit();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const gotoPlay = () => {
    const { navigate } = navigation;

    initGame();
    navigate("Play");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={gotoPlay}>
      <CustomText style={styles.font}>GO</CustomText>
    </TouchableOpacity>
  );
}
