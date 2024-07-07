import { atom } from "recoil";

export const levelValues = ["BEGINNER", "INTERMEDIATE", "EXPERT"] as const;
export type LevelType = (typeof levelValues)[number];

export type BoardType = {
  level: LevelType;
  rows: number;
  cols: number;
  bombs: number;
};

const settingsArray: BoardType[] = [
  { level: "BEGINNER", rows: 8, cols: 8, bombs: 10 },
  { level: "INTERMEDIATE", rows: 14, cols: 10, bombs: 20 },
  { level: "EXPERT", rows: 32, cols: 14, bombs: 60 },
];

export const defaultSetting: Record<LevelType, BoardType> = Object.fromEntries(
  settingsArray.map(setting => [setting.level, setting])
) as Record<LevelType, BoardType>;

export const settingState = atom<BoardType>({
  key: "setting",
  default: defaultSetting.BEGINNER,
});
