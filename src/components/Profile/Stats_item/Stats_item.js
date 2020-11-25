import React from 'react-dom';
import styles from '../Profile.module.css';
import PropTypes from 'prop-types';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className={styles.label}>{key}</span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  el: PropTypes.array.isRequired,
};

export default StatsItem;
