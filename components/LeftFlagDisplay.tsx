import { useMemo } from "react";
import HeaderDisplay from "./HeaderDisplay";

import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";

export default function LeftFlagDisplay() {
  const { setting } = useSetting();
  const { countLeftFlags } = useBoard();
  const leftFlags = useMemo<string>(() => {
    const { bombs } = setting;
    return countLeftFlags(bombs);
  }, [countLeftFlags, setting]);

  return <HeaderDisplay text={leftFlags} />;
}
