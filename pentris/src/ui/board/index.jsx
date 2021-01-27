import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { setBoardRect } from "../../store/actions";
import { getBoardHeight, getBoardWidth } from "../../store/selectors";
import CurrentPiece from "../currentPiece";

import theme from "../theme";

export default function Board() {
  const dispatch = useDispatch();
  const boardHeight = useSelector(getBoardHeight);
  const boardWidth = useSelector(getBoardWidth);
  const [board, setBoard] = useState(null);
  const boardRef = useRef(null);

  useLayoutEffect(() => {
    console.debug("Rendering board background");
    // Board is tiled with single blocks
    const newBoard = [];
    // Populate column of rows
    for (let i = 0; i < boardHeight; i += 1) {
      const row = [];
      // Populate row
      for (let j = 0; j < boardWidth; j += 1) {
        row.push(
          <img src={theme.empty} alt="" key={`board-element-${i}-${j}`} />
        );
      }
      newBoard.push(
        <div className={styles.row} key={`board-row-${i}`}>
          {row}
        </div>
      );
    }
    setBoard(newBoard);
  }, [boardHeight, boardWidth]);

  useLayoutEffect(() => {
    if (boardRef.current) {
      // Push board location to state on render
      const boardRect = boardRef.current.getBoundingClientRect();
      console.log(boardRect);
      dispatch(setBoardRect({ top: boardRect.top, left: boardRect.left }));
    }
    // Only board
    // eslint-disable-next-line
  }, [board]);

  return (
    <div className={styles.board}>
      <div ref={boardRef}>{board}</div>
      <CurrentPiece />
    </div>
  );
}
