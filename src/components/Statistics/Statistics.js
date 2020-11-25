import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem/StatisticsItem';

const randomColor = () => {
  let random1 = Math.round(Math.random() * 255);
  let random2 = Math.round(Math.random() * 255);
  let random3 = Math.round(Math.random() * 255);
  return `rgb(${random1}, ${random2}, ${random3})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(props => {
          let backgroundColor = randomColor();
          return (
            <StatisticsItem
              key={props.id}
              backgroundColor={backgroundColor}
              props={props}
            />
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Statistics;
