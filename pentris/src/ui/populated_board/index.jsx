import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import {
  getBoardRect,
  getBoardMap,
  getClearedRows,
} from "../../store/selectors";
import { UNIT_SIZE, EVALUATE_DELAY } from "../../constants";

import { COLORS } from "../theme";

export default function PopulatedBoard() {
  const boardMap = useSelector(getBoardMap);
  const boardRect = useSelector(getBoardRect);
  const clearedRows = useSelector(getClearedRows);
  const [clearedOpacity, setClearedOpacity] = useState(1);

  useEffect(() => {
    if (clearedRows.length) {
      let alternateOpacity = clearedOpacity;
      const interval = setInterval(() => {
        alternateOpacity = alternateOpacity === 0 ? 1 : 0;
        setClearedOpacity(alternateOpacity);
      }, 200);
      setTimeout(() => {
        clearInterval(interval);
        setClearedOpacity(1);
      }, EVALUATE_DELAY);
    }
    // Do not need clearedOpacity as a dependency
    // eslint-disable-next-line
  }, [clearedRows]);

  return (
    <div className={styles.board}>
      {boardMap?.map((row, i) => {
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
      })}
      {clearedRows?.map((row) => {
        return (
          <div
            key={row}
            className={styles.cleared}
            style={{
              transform: `translate(${boardRect.left}px, ${
                boardRect.top + row * UNIT_SIZE
              }px)`,
              width: boardMap.length * UNIT_SIZE,
              opacity: clearedOpacity,
            }}
          />
        );
      })}
    </div>
  );
}
