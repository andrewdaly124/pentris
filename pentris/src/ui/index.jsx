import React from "react";
import Board from "./board";

import styles from "./index.module.scss";
import { refreshTheme } from "./theme";

// Root UI component
export default function Ui() {
  refreshTheme();
  return (
    <div className={styles.ui}>
      <Board />
    </div>
  );
}
