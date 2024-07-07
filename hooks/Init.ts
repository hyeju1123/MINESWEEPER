import { useCallback } from "react";
import { defaultSetting } from "@/recoil/SettingState";

import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";
import useBombPlaced from "@/hooks/BombPlaced";
import { useResetRecoilState } from "recoil";
import { timeState } from "@/recoil/TimeState";

export default function Init() {
  const { setting } = useSetting();
  const { initBoard } = useBoard();
  const { handlePlaceBomb } = useBombPlaced();
  const resetTime = useResetRecoilState(timeState);

  const initGame = useCallback(() => {
    const { level } = setting;
    const { rows, cols } = defaultSetting[level];

    resetTime();
    initBoard(rows, cols);
    handlePlaceBomb(false);
  }, [setting, resetTime, initBoard, handlePlaceBomb]);

  return { initGame };
}
