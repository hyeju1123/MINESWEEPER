import { memo, useMemo } from "react";
import { Dimensions, View } from "react-native";
import CustomText from "./CustomText";
import { styles } from "@/style/CellStyle";
import { Theme, theme } from "@/style/color";
import { CellType } from "@/recoil/CellState";

type CellProps = CellType & { cols: number };

const { width } = Dimensions.get("screen");

const Cell = ({ cols, flagged, revealed, surroundedBombs }: CellProps) => {
  const cellWidth = useMemo(() => (width - 6) / cols, [cols]);

  return (
    <View
      style={[
        styles.container,
        { width: cellWidth, height: cellWidth },
        revealed && styles.revealed,
      ]}
    >
      <CustomText
        style={{
          fontSize: cellWidth * 0.5,
          color: theme[`color${surroundedBombs}` as keyof Theme],
        }}
      >
        {revealed && surroundedBombs !== 0 ? surroundedBombs : ""}
        {flagged ? "🚩" : ""}
      </CustomText>
    </View>
  );
};

export default memo(Cell);
