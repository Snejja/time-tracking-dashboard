import React, { useEffect, useState } from 'react';

import Item from '../Item';
import Profile from '../Profile';
import styles from './Dashboard.module.css';
import avatar from '../../icons/image-jeremy.png';

const Dashboard = () => {
  const [period, setPeriod] = useState('daily');
  const [data, setData] = useState(null);

  useEffect(() => {
    async function dashboardData() {
      const response = await fetch('/data.json');
      const json = await response.json();

      setData(json);
    }

    dashboardData();
  }, []);

  if (!data) return <div />;

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
        {data.map((item) => (
          <Item period={period} data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
