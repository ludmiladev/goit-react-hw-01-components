import React from 'react';

import Profile from './Profile/';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

export default () => {
  return (
    <>
      <Profile {...user} />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </>
  );
};
