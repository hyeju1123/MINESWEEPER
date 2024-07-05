import { atom } from "recoil";
import { defaultSetting } from "./SettingState";

export type CellType = {
  isBomb: boolean;
  flagged: boolean;
  revealed: boolean;
  surroundedBombs: number;
};

export const EmptyCell = {
  isBomb: false,
  flagged: false,
  revealed: false,
  surroundedBombs: 0,
};

export const bombPlacedState = atom<boolean>({
  key: "bombPlaced",
  default: false,
});

export const boardState = atom<CellType[][]>({
  key: "board",
  default: new Array(defaultSetting["BEGINNER"].rows)
    .fill(null)
    .map(() =>
      new Array(defaultSetting["BEGINNER"].cols).fill(null).map(() => EmptyCell)
    ),
});
