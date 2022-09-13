import classNames from 'classnames';
import React from 'react';

import styles from './Profile.module.css';

const Profile = ({ avatar, name, period, setPeriod }) => (
  <div className={styles.profile}>
    <div className={styles.card}>
      <img src={avatar} alt='avatar' className={styles.photo} />
      <div>
        <p className={styles.subtitle}>Report for</p>
        <h1 className={styles.title}>{name}</h1>
      </div>
    </div>
    <div className={styles.periods}>
      <p
        onClick={() => setPeriod('Daily')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'Daily',
        })}
      >
        Daily
      </p>
      <p
        onClick={() => setPeriod('Weekly')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'Weekly',
        })}
      >
        Weekly
      </p>
      <p
        onClick={() => setPeriod('Monthly')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'Monthly',
        })}
      >
        Monthly
      </p>
    </div>
  </div>
);

export default Profile;
