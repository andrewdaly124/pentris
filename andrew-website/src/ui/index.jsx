import React from 'react';
import ReduxTest from './components/redux-test';
import Board from './board';

import styles from './index.module.scss';
import { refreshTheme } from './theme';

// Root UI component
export default function Ui() {
  refreshTheme();
  const reduxTest = false; // remove
  return (
    <div className={styles.ui}>
      {reduxTest && <ReduxTest />}
      <Board />
    </div>
  );
}
