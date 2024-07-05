import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { LevelType, defaultSetting, settingState } from "@/recoil/SettingState";

export default function Setting() {
  const [setting, setSetting] = useRecoilState(settingState);

  const handleSetting = useCallback(
    (level: LevelType) => {
      setSetting(defaultSetting[level]);
    },
    [setSetting]
  );

  return { setting, handleSetting };
}
