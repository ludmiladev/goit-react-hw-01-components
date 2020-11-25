import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? s.statusOnline : s.statusOfline;
  return (
    <li className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(({ id, ...props }) => {
        return <FriendListItem key={id} {...props} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};

export default FriendList;
