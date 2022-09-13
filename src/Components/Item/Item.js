import React from 'react';
import classNames from 'classnames';

import styles from './Item.module.css';
import { ReactComponent as Decoration } from '../../icons/icon-ellipsis.svg';

const Item = ({ period, title, time }) => {
  const lastPeriod = {
    Daily: 'Day',
    Weekly: 'Week',
    Monthly: 'Month',
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
        <p className={styles.time}>{time}hrs</p>
        <p className={styles.lastPeriod}>
          Last {lastPeriod[period]} - {time}hrs
        </p>
      </div>
    </div>
  );
};

export default Item;
