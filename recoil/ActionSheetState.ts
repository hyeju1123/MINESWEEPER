import { atom } from "recoil";

export const actionSheetState = atom<boolean>({
  key: "actionSheet",
  default: false,
});
