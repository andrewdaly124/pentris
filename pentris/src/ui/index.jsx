import React from "react";
import Board from "./board";
import Score from "./score";
import Results from "./results";
import { KeyDownHandler, KeyUpHandler } from "../utils/input_handler";

import styles from "./index.module.scss";
import { refreshTheme } from "./theme";

// Root UI component
export default function Ui() {
  // Initialize input handlers
  document.addEventListener("keydown", KeyDownHandler);
  document.addEventListener("keyup", KeyUpHandler);

  // Initialize theme and colors
  refreshTheme();

  return (
    <div className={styles.ui}>
      <Board />
      <Score />
      <Results />
    </div>
  );
}
