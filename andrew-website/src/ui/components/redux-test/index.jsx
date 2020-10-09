import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';

// Broken, since no actions yet
export default function ReduxTest() {
  const dispatch = useDispatch();

  return (
    <div className={styles.reduxTest}>
      This is a test
      <div className={styles.button}>
        <div className={styles.text} onClick={() => dispatch(null)}>
          button 1
        </div>
      </div>
      <div className={styles.button} onClick={() => dispatch(null)}>
        <div className={styles.text}>button 2</div>
      </div>
    </div>
  );
}
