import React from 'react';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={s.transType}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, ...props }) => (
          <TransactionRow key={id} {...props} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
TransactionRow.protoTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TransactionHistory;
