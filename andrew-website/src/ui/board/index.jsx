import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import { getBoardHeight, getBoardWidth } from '../../store/selectors';

import theme from '../theme';

export default function Board() {
  const boardHeight = useSelector(getBoardHeight);
  const boardWidth = useSelector(getBoardWidth);

  function renderBoard() {
    const board = [];
    for (let i = 0; i < boardHeight; i += 1) {
      const row = [];
      for (let j = 0; j < boardWidth; j += 1) {
        row.push(<img src={theme.empty} alt="" />);
      }
      board.push(<div className={styles.row}>{row}</div>);
    }
    return board;
  }

  return <div className={styles.board}>{renderBoard()}</div>;
}
