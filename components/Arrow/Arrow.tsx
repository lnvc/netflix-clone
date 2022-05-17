import { useState } from 'react';

import styles from './Arrow.module.scss';

interface IArrow {
  direction: 'right' | 'left'
}

const Arrow = ({ direction }: IArrow) => {
  return (
    <>
      <h1 className={styles.arrow}>{direction === 'right' ? '>' : '<' }</h1>
    </>
  );
};

export default Arrow;
