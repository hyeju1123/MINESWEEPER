import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { CellType, EmptyCell, boardState } from "@/recoil/CellState";

export default function Board() {
  const [board, setBoard] = useRecoilState(boardState);

  const initBoard = useCallback(
    (rows: number, cols: number) => {
      const initializedBoard = new Array(rows)
        .fill(null)
        .map(() => new Array(cols).fill(null).map(() => EmptyCell));
      setBoard(initializedBoard);
    },
    [setBoard]
  );

  const randomizeBombPlace = useCallback(
    (board: CellType[][], bombs: number, touched: number[]) => {
      const places = new Set<number>();
      const [touchedR, touchedL] = touched;
      const [rowNum, colNum] = [board.length, board[0].length];

      const forbiddenPlaces = new Set<number>();
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const [row, col] = [touchedR + i, touchedL + j];
          if (row >= 0 && row < rowNum && col >= 0 && col < colNum) {
            forbiddenPlaces.add(row * colNum + col);
          }
        }
      }

      while (places.size < bombs) {
        let candidate = Math.floor(Math.random() * rowNum * colNum);
        if (!forbiddenPlaces.has(candidate)) places.add(candidate);
      }

      places.forEach(place => {
        let row = Math.floor(place / colNum);
        let col = place % colNum;
        board[row][col].isBomb = true;
      });

      return board;
    },
    []
  );

  const countSurroundedBombs = useCallback((board: CellType[][]) => {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
      for (let colIdx = 0; colIdx < board[0].length; colIdx++) {
        if (board[rowIdx][colIdx].isBomb) continue;

        let bombNum = 0;
        for (let hor = rowIdx - 1; hor <= rowIdx + 1; hor++) {
          for (let ver = colIdx - 1; ver <= colIdx + 1; ver++) {
            if (board[hor]?.[ver]?.isBomb) bombNum++;
          }
        }
        board[rowIdx][colIdx].surroundedBombs = bombNum;
      }
    }
    return board;
  }, []);

  const positionBombs = useCallback(
    (board: CellType[][], bombs: number, touched: number[]) => {
      let newBoard = randomizeBombPlace(board, bombs, touched);
      return countSurroundedBombs(newBoard);
    },
    [randomizeBombPlace, countSurroundedBombs]
  );

  const revealValue = useCallback(
    (copied: CellType[][], rowIdx: number, colIdx: number) => {
      const touchedOne = copied[rowIdx][colIdx];
      const [rows, cols] = [copied.length, copied[0].length];

      if (touchedOne.revealed || touchedOne.flagged) return 0;
      if (touchedOne.isBomb) return -1;

      const stack = [{ rowIdx, colIdx }];

      /** Find surrounded cell, not a bomb  */
      while (stack.length > 0) {
        const { rowIdx, colIdx } = stack.pop()!;
        const currentOne = copied[rowIdx][colIdx];

        if (!currentOne.revealed) {
          currentOne.revealed = true;

          if (!currentOne.isBomb && currentOne.surroundedBombs === 0) {
            for (let i = -1; i <= 1; i++) {
              for (let j = -1; j <= 1; j++) {
                const [sideR, sideC] = [rowIdx + i, colIdx + j];
                const inBoard =
                  sideR >= 0 && sideR < rows && sideC >= 0 && sideC < cols;

                if (inBoard) {
                  const sideOne = copied[sideR][sideC];
                  const verified = !sideOne.isBomb && !sideOne.revealed;
                  if (verified) {
                    stack.push({ rowIdx: sideR, colIdx: sideC });
                  }
                }
              }
            }
          }
        }
      }

      setBoard(copied);
      return 0;
    },
    [setBoard]
  );

  const setupFlag = useCallback(
    (copied: CellType[][], rowIdx: number, colIdx: number) => {
      if (copied[rowIdx][colIdx].revealed) return;
      copied[rowIdx][colIdx].flagged = !copied[rowIdx][colIdx].flagged;
      setBoard(copied);
    },
    [setBoard]
  );

  return { board, initBoard, positionBombs, revealValue, setupFlag };
}
