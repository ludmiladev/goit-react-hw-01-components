import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const items = friends.map(props => (
    <FriendListItem key={props.id} {...props} />
  ));
  return <ul className={styles.friendList}>{items}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default FriendList;
