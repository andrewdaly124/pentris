import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import { setTestVar } from "../../../store/actions";
import { getTestVar } from "../../../store/selectors";

export default function ReduxTest() {
  const dispatch = useDispatch();
  const testVar = useSelector(getTestVar);

  return (
    <div className={styles.reduxTest}>
      test value:
      {testVar}
      <div className={styles.button} onClick={() => dispatch(setTestVar(10))}>
        <div className={styles.text}>Set to 5</div>
      </div>
      <div className={styles.button} onClick={() => dispatch(setTestVar(5))}>
        <div className={styles.text}>Set to 10</div>
      </div>
    </div>
  );
}
