import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/style/LevelButtonStyle";

import useSetting from "@/hooks/Setting";
import { LevelType, defaultSetting } from "@/recoil/SettingState";

type LevelButtonProps = {
  level: LevelType;
};

export default function LevelButton({ level }: LevelButtonProps) {
  const {
    setting: { level: currentLev },
    handleSetting,
  } = useSetting();
  const { rows, cols } = defaultSetting[level];

  const setLevel = useCallback(() => {
    handleSetting(level);
  }, [handleSetting]);

  return (
    <TouchableOpacity
      onPress={setLevel}
      activeOpacity={0.7}
      style={styles.container}
    >
      {currentLev === level && <View style={styles.circle} />}
      <Text style={styles.levelFont}>
        {level} {rows}x{cols}
      </Text>
    </TouchableOpacity>
  );
}
