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

/**
 * Draws only the already placed pieces on the board
 */
export default function PopulatedBoard() {
  const boardMap = useSelector(getBoardMap);
  const boardRect = useSelector(getBoardRect);
  const clearedRows = useSelector(getClearedRows);
  const [clearedOpacity, setClearedOpacity] = useState(1);

  /** This useEffect only controls the flashing of a cleared row */
  useEffect(() => {
    if (clearedRows.length) {
      // Need internal variable, since an instance of an effect can't
      // measure state change
      let alternateOpacity = clearedOpacity;
      const interval = setInterval(() => {
        alternateOpacity = alternateOpacity === 0 ? 1 : 0;
        setClearedOpacity(alternateOpacity);
      }, 200);
      // Clear interval after evaluate delay
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
            // Will only draw populated squares, but one at a time
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
