import { View } from "react-native";
import Cell from "./Cell";
import { styles } from "@/style/BoardStyle";

import useBoard from "@/hooks/Board";

export default function Board() {
  const { board } = useBoard();

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
