import { useCallback } from "react";
import { timeState } from "@/recoil/TimeState";
import { useRecoilState, useResetRecoilState } from "recoil";

export default function Time() {
  const resetTime = useResetRecoilState(timeState);
  const [time, setTime] = useRecoilState(timeState);

  const increaseTime = useCallback(() => {
    setTime(prev => (prev < 999 ? prev + 1 : prev));
  }, [setTime]);

  return { time, increaseTime, resetTime };
}
