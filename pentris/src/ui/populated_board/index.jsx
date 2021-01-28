import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import {
  getCurrentPiece,
  getBoardRect,
  getBoardMap,
} from "../../store/selectors";
import { UNIT_SIZE } from "../../constants";

import { COLORS } from "../theme";

export default function PopulatedBoard() {
  const boardMap = useSelector(getBoardMap);
  const currentPiece = useSelector(getCurrentPiece);
  const boardRect = useSelector(getBoardRect);
  const [board, setBoard] = useState(null);

  useLayoutEffect(() => {
    setBoard(
      boardMap.map((row, i) => {
        return row.map((block, j) => {
          return (
            block.populated && (
              <img
                className={styles.unit}
                src={COLORS[block.color % COLORS.length]}
                alt=""
                key={`piece-${i}-${j}`}
                style={{
                  transform: `translate(${boardRect.left + i * UNIT_SIZE}px, ${
                    boardRect.top + j * UNIT_SIZE
                  }px)`,
                }}
              />
            )
          );
        });
      })
    );
  }, [boardRect, boardMap, currentPiece]);

  return <div className={styles.board}>{board}</div>;
}
