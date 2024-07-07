import { Alert, View } from "react-native";
import Cell from "./Cell";
import { styles } from "@/style/BoardStyle";

import useInit from "@/hooks/Init";
import useBoard from "@/hooks/Board";
import useSetting from "@/hooks/Setting";
import { useEffect } from "react";

export default function Board() {
  const {
    setting: { bombs, rows, cols },
  } = useSetting();
  const { initGame } = useInit();
  const { board } = useBoard();

  useEffect(() => {
    const revealedNum = board.reduce((totalAcc, row) => {
      totalAcc += row.reduce((rowAcc, cell) => {
        rowAcc += cell.revealed ? 1 : 0;
        return rowAcc;
      }, 0);
      return totalAcc;
    }, 0);

    if (revealedNum === rows * cols - bombs) {
      Alert.alert("Succed!", "Once again?", [
        { text: "Cancel", onPress: () => {} },
        { text: "OK", onPress: initGame },
      ]);
    }
  }, [board]);

  return (
    <View style={styles.container}>
      {board.map((rows, rIdx) => (
        <View key={rIdx} style={styles.boardRow}>
          {rows.map(({ isBomb, flagged, revealed, surroundedBombs }, cIdx) => (
            <Cell
              key={`${rIdx}${cIdx}`}
              rowIdx={rIdx}
              colIdx={cIdx}
              isBomb={isBomb}
              flagged={flagged}
              revealed={revealed}
              surroundedBombs={surroundedBombs}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
