import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { getBoardWidth, getScore } from "../../store/selectors";

import { UNIT_SIZE } from "../../constants";

export default function Score() {
  const rowLength = useSelector(getBoardWidth);
  const score = useSelector(getScore);

  return (
    <div className={styles.score} style={{ width: UNIT_SIZE * rowLength }}>
      <label>SCORE:</label>
      <label>{score}</label>
    </div>
  );
}
