import { memo, useCallback, useMemo } from "react";
import { Alert, Dimensions, TouchableOpacity } from "react-native";
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
  revealed,
  flagged,
  surroundedBombs,
}: CellProps) => {
  const {
    setting: { bombs, cols },
  } = useSetting();
  const { isBombPlaced, handlePlaceBomb } = useBombPlaced();
  const { board, positionBombs, revealValue, setupFlag } = useBoard();
  const cellWidth = useMemo(() => (width * 0.8) / (cols + 1), [cols]);

  const handleFirstTouch = useCallback(
    (copied: CellType[][]) => {
      handlePlaceBomb(true);
      return positionBombs(copied, bombs, [rowIdx, colIdx]);
    },
    [board, positionBombs, handlePlaceBomb]
  );

  const touchCell = useCallback(() => {
    let copied = JSON.parse(JSON.stringify(board));
    if (!isBombPlaced) {
      copied = handleFirstTouch(copied);
    }

    const revealReturn = revealValue(copied, rowIdx, colIdx);
    revealReturn === -1 && Alert.alert("Game Over");
  }, [board, isBombPlaced, revealValue]);

  const longTouchCell = useCallback(() => {
    let copied = JSON.parse(JSON.stringify(board));
    setupFlag(copied, rowIdx, colIdx);
  }, [board, setupFlag]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={touchCell}
      onLongPress={longTouchCell}
      delayLongPress={100}
      style={[
        styles.container,
        { width: cellWidth, height: cellWidth },
        revealed && styles.revealed,
      ]}
    >
      <CustomText style={{ fontSize: cellWidth * 0.5 }}>
        {revealed && surroundedBombs !== 0 ? surroundedBombs : ""}
        {flagged ? "🚩" : ""}
      </CustomText>
    </TouchableOpacity>
  );
};

export default memo(Cell);
