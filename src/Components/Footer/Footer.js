import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.attribution}>
    <div>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor.
      </a>
    </div>
    <div>
      Coded by{' '}
      <a href='https://github.com/Snejja' target='_blank' rel='noreferrer'>
        Snejja
      </a>
    </div>
  </div>
);

export default Footer;
