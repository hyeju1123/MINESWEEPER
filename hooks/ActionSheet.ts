import { useRecoilState } from "recoil";
import { actionSheetState } from "@/recoil/ActionSheetState";

export default function ActionSheet() {
  const [showSheet, handleShowSheet] = useRecoilState(actionSheetState);

  return { showSheet, handleShowSheet };
}
