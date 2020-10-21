import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import { getBoardHeight, getBoardWidth } from '../../store/selectors';

import { EmptyPng } from '../../static';

export default function Board() {
  const boardHeight = useSelector(getBoardHeight);
  const boardWidth = useSelector(getBoardWidth);

  function renderBoard() {
    const board = [];
    for (let i = 0; i < boardWidth; i += 1) {
      const row = [];
      for (let j = 0; j < boardHeight; j += 1) {
        row.push(<img src={EmptyPng} alt="" />);
      }
      board.push(<div className={styles.row}>{row}</div>);
    }
    return board;
  }

  return <div className={styles.board}>{renderBoard()}</div>;
}
