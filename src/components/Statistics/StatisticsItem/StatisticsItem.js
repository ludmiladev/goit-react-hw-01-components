import React from 'react-dom';
import styles from '../Statistics.module.css';

const StatisticsItem = ({ backgroundColor, props }) => {
  const { percentage, label } = props;
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
