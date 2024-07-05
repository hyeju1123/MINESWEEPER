import { atom } from "recoil";

export type LevelType = "BEGINNER" | "INTERMEDIATE" | "EXPERT";

export type BoardType = {
  level: LevelType;
  rows: number;
  cols: number;
  bombs: number;
};

export type SettingType = {
  [key in LevelType]: BoardType;
};

export const defaultSetting: SettingType = {
  BEGINNER: {
    level: "BEGINNER",
    rows: 8,
    cols: 8,
    bombs: 10,
  },
  INTERMEDIATE: {
    level: "INTERMEDIATE",
    rows: 14,
    cols: 10,
    bombs: 20,
  },
  EXPERT: {
    level: "EXPERT",
    rows: 32,
    cols: 14,
    bombs: 60,
  },
};

export const settingState = atom<BoardType>({
  key: "setting",
  default: defaultSetting.BEGINNER,
});
