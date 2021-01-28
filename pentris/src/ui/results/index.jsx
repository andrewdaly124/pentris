import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { getScore, getGameOver } from "../../store/selectors";

export default function Score() {
  const score = useSelector(getScore);
  const gameOver = useSelector(getGameOver);

  return (
    <div className={styles.results} style={{ opacity: gameOver ? 1 : 0 }}>
      <label>GAME OVER :(</label>
      <div className={styles.scoreDisplay}>
        <label>FINAL SCORE:</label>
        <label>{score}</label>
      </div>
      <div className={styles.continue}>
        <label>{"< PRESS ENTER TO PLAY AGAIN >"}</label>
      </div>
    </div>
  );
}
