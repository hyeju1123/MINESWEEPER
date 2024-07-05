import { memo, useCallback, useMemo } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { styles } from "@/style/CellStyle";

import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";
import useBombPlaced from "@/hooks/BombPlaced";
import { CellType } from "@/recoil/CellState";

type CellProps = CellType & {
  rowIdx: number;
  colIdx: number;
};

const { width } = Dimensions.get("screen");

const Cell = ({
  rowIdx,
  colIdx,
  isBomb,
  revealed,
  flagged,
  surroundedBombs,
}: CellProps) => {
  const {
    setting: { bombs, cols },
  } = useSetting();
  const { board, positionBombs } = useBoard();
  const { isBombPlaced, handlePlaceBomb } = useBombPlaced();
  const cellWidth = useMemo(() => (width * 0.8) / (cols + 1), [cols]);

  const touchCell = useCallback(() => {
    if (!isBombPlaced) {
      const copied = JSON.parse(JSON.stringify(board));

      positionBombs(copied, bombs, [rowIdx, colIdx]);
      handlePlaceBomb(true);
    }
  }, [board, isBombPlaced, positionBombs, handlePlaceBomb]);

  return (
    <TouchableOpacity
      onPress={touchCell}
      style={[styles.container, { width: cellWidth, height: cellWidth }]}
    >
      <CustomText
        style={[{ fontSize: cellWidth * 0.5 }, isBomb && { color: "red" }]}
      >
        {surroundedBombs}
      </CustomText>
    </TouchableOpacity>
  );
};

export default memo(Cell);
