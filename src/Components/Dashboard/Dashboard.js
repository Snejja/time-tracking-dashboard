import React, { useState } from 'react';

import avatar from '../../icons/image-jeremy.png';
import Profile from '../Profile';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [period, setPeriod] = useState('Daily');

  return (
    <div className={styles.dashboard}>
      <div className={styles.profile}>
        <Profile
          name='Jeremy Robson'
          avatar={avatar}
          period={period}
          setPeriod={setPeriod}
        />
      </div>
      <div className={styles.work}> 1</div>
      <div className={styles.play}> 2</div>
      <div className={styles.study}> 3</div>
      <div className={styles.exercise}> 4</div>
      <div className={styles.social}> 5</div>
      <div className={styles.selfCare}> 6</div>
    </div>
  );
};

export default Dashboard;
