import { useCallback, useEffect } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Cell from "./Cell";
import { FlashList } from "@shopify/flash-list";
import { styles } from "@/style/BoardStyle";

import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";
import useBombPlaced from "@/hooks/BombPlaced";
import { CellType } from "@/recoil/CellState";
import { RootStackParamList } from "@/app/App";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Board() {
  const {
    setting: { bombs, rows, cols },
  } = useSetting();
  const { isBombPlaced, handlePlaceBomb } = useBombPlaced();
  const { board, positionBombs, revealValue, setupFlag } = useBoard();
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  /** handling a short touch: reveal cell */
  const touchCell = (rIdx: number, cIdx: number) => {
    let copied = JSON.parse(JSON.stringify(board));
    if (!isBombPlaced) {
      handlePlaceBomb(true);
      copied = positionBombs(copied, bombs, [rIdx, cIdx]);
    }

    const revealReturn = revealValue(copied, rIdx, cIdx);

    if (revealReturn === -1) {
      Alert.alert("Game Over", "", [{ text: "OK", onPress: () => goBack() }]);
    }
  };

  /** handling a long touch: set up flag */
  const longTouchCell = (rIdx: number, cIdx: number) => {
    let copied = JSON.parse(JSON.stringify(board));
    setupFlag(copied, rIdx, cIdx);
  };

  const renderItem = useCallback(
    ({ item: row, index: rIdx }: { item: CellType[]; index: number }) => (
      <View style={styles.boardRow}>
        {row.map(({ isBomb, flagged, revealed, surroundedBombs }, cIdx) => (
          <TouchableOpacity
            key={`${rIdx}${cIdx}`}
            activeOpacity={1}
            onPress={() => touchCell(rIdx, cIdx)}
            onLongPress={() => longTouchCell(rIdx, cIdx)}
            delayLongPress={100}
          >
            <Cell
              cols={cols}
              isBomb={isBomb}
              flagged={flagged}
              revealed={revealed}
              surroundedBombs={surroundedBombs}
            />
          </TouchableOpacity>
        ))}
      </View>
    ),
    [board]
  );

  useEffect(() => {
    const revealedNum = board.reduce((totalAcc, row) => {
      totalAcc += row.reduce((rowAcc, cell) => {
        rowAcc += cell.revealed ? 1 : 0;
        return rowAcc;
      }, 0);
      return totalAcc;
    }, 0);

    if (revealedNum === rows * cols - bombs) {
      Alert.alert("Succeed!", "", [{ text: "OK", onPress: () => goBack() }]);
    }
  }, [board]);

  return (
    <>
      <View style={styles.container}>
        <FlashList
          data={board}
          renderItem={renderItem}
          bounces={false}
          estimatedItemSize={27}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {rows > 8 && <View style={styles.downArrow} />}
    </>
  );
}
