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

      while (places.size < bombs) {
        let candidate = Math.floor(Math.random() * rowNum * colNum);
        places.add(candidate);
      }

      places.forEach(place => {
        let row = Math.floor(place / colNum);
        let col = place % colNum;
        board[row][col].isBomb = true;
      });

      if (board[touchedR][touchedL].isBomb) {
        board[touchedR][touchedL].isBomb = false;
        let findOtherCandidate = false;
        for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
          for (let colIdx = 0; colIdx < board[0].length; colIdx++) {
            if (!board[rowIdx][colIdx].isBomb) {
              board[rowIdx][colIdx].isBomb = true;
              findOtherCandidate = true;
              break;
            }
          }
          if (findOtherCandidate) break;
        }
      }

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
      newBoard = countSurroundedBombs(newBoard);
      setBoard(newBoard);
    },
    [randomizeBombPlace, countSurroundedBombs, setBoard]
  );

  return { board, initBoard, positionBombs };
}
