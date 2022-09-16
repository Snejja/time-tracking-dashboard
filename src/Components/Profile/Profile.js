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
        onClick={() => setPeriod('daily')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'daily',
        })}
      >
        Daily
      </p>
      <p
        onClick={() => setPeriod('weekly')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'weekly',
        })}
      >
        Weekly
      </p>
      <p
        onClick={() => setPeriod('monthly')}
        className={classNames(styles.period, {
          [styles.activePeriod]: period === 'monthly',
        })}
      >
        Monthly
      </p>
    </div>
  </div>
);

export default Profile;
