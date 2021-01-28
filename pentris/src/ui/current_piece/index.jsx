import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import {
  getCurrentPiece,
  getCurrentLocation,
  getBoardRect,
} from "../../store/selectors";
import { UNIT_SIZE } from "../../constants";

import { COLORS } from "../theme";

export default function CurrentPiece() {
  const currentPiece = useSelector(getCurrentPiece);
  const currentLocation = useSelector(getCurrentLocation);
  const boardRect = useSelector(getBoardRect);

  return (
    <div className={styles.piece}>
      {currentPiece?.pieces?.map((unitCoords) => {
        return (
          <img
            className={styles.unit}
            src={COLORS[currentPiece.color % COLORS.length]}
            alt=""
            key={`piece-${unitCoords[0]}-${unitCoords[1]}`}
            style={{
              transform: `translate(${
                boardRect.left +
                (unitCoords[0] + currentLocation[0]) * UNIT_SIZE
              }px, ${
                boardRect.top + (unitCoords[1] + currentLocation[1]) * UNIT_SIZE
              }px)`,
            }}
          />
        );
      })}
    </div>
  );
}
