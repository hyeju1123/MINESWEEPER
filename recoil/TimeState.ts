import { atom } from "recoil";

export const timeState = atom<number>({
  key: "time",
  default: 0,
});
