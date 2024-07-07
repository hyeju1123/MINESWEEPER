import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LevelButton from "./LevelButton";
import { styles } from "@/style/ModalStyle";

import useInit from "@/hooks/Init";
import useSetting from "@/hooks/Setting";
import useActionSheet from "@/hooks/ActionSheet";
import { levelValues } from "@/recoil/SettingState";

export default function Modal() {
  const { initGame } = useInit();
  const { handleSetting } = useSetting();
  const { handleShowSheet } = useActionSheet();

  const restartGame = useCallback(() => {
    initGame();
    handleShowSheet(false);
  }, [initGame, handleSetting]);

  return (
    <View style={styles.modal}>
      <TouchableOpacity onPress={restartGame} style={styles.restartButton}>
        <Text style={styles.font}>다시 시작하기</Text>
      </TouchableOpacity>
      {levelValues.map((level, i) => (
        <LevelButton key={i} level={level} />
      ))}
    </View>
  );
}
