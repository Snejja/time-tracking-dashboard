import React from 'react';
import classNames from 'classnames';

import styles from './Item.module.css';
import { ReactComponent as Decoration } from '../../icons/icon-ellipsis.svg';

const Item = ({ period, data }) => {
  const { title, timeframes } = data;
  const time = timeframes[period];
  const lastPeriod = {
    daily: 'Day',
    weekly: 'Week',
    monthly: 'Month',
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.orange]: title === 'Work',
        [styles.blue]: title === 'Play',
        [styles.red]: title === 'Study',
        [styles.green]: title === 'Exercise',
        [styles.violet]: title === 'Social',
        [styles.yellow]: title === 'Self Care',
      })}
    >
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.decoration}>
            <Decoration />
          </div>
        </div>
        <div className={styles.time}>
          <p className={styles.period}>{time.current}hrs</p>
          <p className={styles.lastPeriod}>
            Last {lastPeriod[period]} - {time.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
