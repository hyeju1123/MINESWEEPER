import { useEffect } from "react";
import HeaderDisplay from "./HeaderDisplay";

import useTime from "@/hooks/Time";

export default function TimeDisplay() {
  const { time, increaseTime } = useTime();

  useEffect(() => {
    const interval = setInterval(() => {
      increaseTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <HeaderDisplay text={time.toString()} />;
}
