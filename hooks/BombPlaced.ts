import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { bombPlacedState } from "@/recoil/CellState";

export default function BombPlaced() {
  const [isBombPlaced, setBombPlaced] = useRecoilState(bombPlacedState);

  const handlePlaceBomb = useCallback(
    (lock: boolean) => {
      setBombPlaced(lock);
    },
    [setBombPlaced]
  );

  return { isBombPlaced, handlePlaceBomb };
}
