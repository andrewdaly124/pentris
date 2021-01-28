import React from "react";
import Board from "./board";
import { KeyDownHandler, KeyUpHandler } from "../utils/input_handler";

import styles from "./index.module.scss";
import { refreshTheme } from "./theme";

// Root UI component
export default function Ui() {
  // Initialize input handlers
  document.addEventListener("keydown", KeyDownHandler);
  document.addEventListener("keyup", KeyUpHandler);

  refreshTheme();

  return (
    <div className={styles.ui}>
      <Board />
    </div>
  );
}
