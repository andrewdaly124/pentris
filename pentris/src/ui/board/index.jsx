import React, { useCallback, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { createBoardMap, setBoardRect } from "../../store/actions";
import {
  getBoardHeight,
  getBoardWidth,
  getBoardMap,
} from "../../store/selectors";
import CurrentPiece from "../current_piece";
import PopulatedBoard from "../populated_board";
import theme from "../theme";

/**
 * Wraps currentpiece and populatedboard,
 * and draws the backplate of background blocks
 */
export default function Board() {
  const dispatch = useDispatch();
  const boardHeight = useSelector(getBoardHeight);
  const boardWidth = useSelector(getBoardWidth);
  const boardMap = useSelector(getBoardMap);

  useLayoutEffect(() => {
    if (boardMap.length !== boardWidth || boardMap[0]?.length !== boardWidth) {
      // create empty board map
      dispatch(createBoardMap([boardWidth, boardHeight]));
    }
    // Do not need boardMap as a dependency
    // eslint-disable-next-line
  }, [boardHeight, boardWidth]);

  const setBoardDims = useCallback((node) => {
    const boardRect = node.getBoundingClientRect();
    dispatch(setBoardRect({ top: boardRect.top, left: boardRect.left }));
  }, []);

  return (
    <div className={styles.board}>
      <div className={styles.back} ref={setBoardDims}>
        {(() => {
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
          return newBoard;
        })()}
      </div>
      <PopulatedBoard />
      <CurrentPiece />
    </div>
  );
}
