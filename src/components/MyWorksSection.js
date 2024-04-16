import React, { useEffect, useState } from 'react';
import styles from '../styles/myWork.module.css';
import MyWorkComponent from './MyWorkComponent';

const MyWorksSection = ({windowWidth}) => {
  const [transitionLayers, setTransitionLayers] = useState([]);

  useEffect(() => {
    const transition = 40;
    const layers = Array.from({ length: 5 }, (_, i) => (
      <div key={i} className={styles.sky_level}>
        {Array.from({ length: transition }, (_, j) => (
          <div key={j}></div>
        ))}
      </div>
    ));

    setTransitionLayers(layers);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className='relative'>
      <div className={`${styles.sky} h-14`}>
        {transitionLayers}
        <div className={styles.sky_stars}>
          {/* Manually include your stars here */}
          <span className={`${styles.star} top-[10vh] left-[10vw]  ${styles['star--lg']}`}>
            <span className={styles.star__part}></span>
            <span className={styles.star__part}></span>
          </span>
          <span className={`${styles.star} top-[300px] left-[50vw] ${styles['star--sm']}`}>
            <span className={styles.star__part}></span>
            <span className={styles.star__part}></span>
          </span>

          <span className={`${styles.star} top-[10vw] left-[70vw] ${styles['star--lg']}`}>
            <span className={styles.star__part}></span>
            <span className={styles.star__part}></span>
          </span>

          <span className={`${styles.dot} left-[200px] top-[7px] ${styles['dot--blinking']}`}></span>
          <span className={`${styles.dot} left-[200px] ${styles['dot--blinking']}`}></span>
          <span className={`${styles.dot} left-[200px] ${styles['dot--blinking']}`}></span>

          {/* Add more stars as needed */}
        </div>
      </div>
      <div className='absolute top-0 left-0 z-20 w-full'>
        <div className='container mx-auto px-5'>
          <MyWorkComponent />
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;
