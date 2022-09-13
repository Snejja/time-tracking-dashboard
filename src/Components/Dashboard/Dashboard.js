import React, { useState } from 'react';

import avatar from '../../icons/image-jeremy.png';
import Item from '../Item/Item';
import Profile from '../Profile';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [period, setPeriod] = useState('Daily');

  return (
    <div className={styles.dashboard}>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <Profile
            name='Jeremy Robson'
            avatar={avatar}
            period={period}
            setPeriod={setPeriod}
          />
        </div>
        <Item title='Work' time='33' />
        <Item title='Play' time='33' />
        <Item title='Study' time='33' />
        <Item title='Exercise' time='33' />
        <Item title='Social' time='33' />
        <Item title='Self Care' time='33' />
      </div>
    </div>
  );
};

export default Dashboard;
