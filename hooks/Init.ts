import { useCallback } from "react";
import { defaultSetting } from "@/recoil/SettingState";

import useTime from "@/hooks/Time";
import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";
import useBombPlaced from "@/hooks/BombPlaced";

export default function Init() {
  const { resetTime } = useTime();
  const { setting } = useSetting();
  const { initBoard } = useBoard();
  const { handlePlaceBomb } = useBombPlaced();

  const initGame = useCallback(() => {
    const { level } = setting;
    const { rows, cols } = defaultSetting[level];

    resetTime();
    initBoard(rows, cols);
    handlePlaceBomb(false);
  }, [setting, resetTime, initBoard, handlePlaceBomb]);

  return { initGame };
}
