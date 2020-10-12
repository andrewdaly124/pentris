import React from 'react';
import ReduxTest from './components/redux-test';

import styles from './index.module.scss';

// Root UI component
export default function Ui() {
  return (
    <div className={styles.ui}>
      <ReduxTest />
    </div>
  );
}
