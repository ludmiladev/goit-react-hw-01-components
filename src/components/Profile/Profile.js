import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="user avatar" className={s.avatar} />
        <p className={s.userName}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  location: 'Earth :)',
  avatar:
    'https://tanzolymp.com/fl-builder-template/jury-2020/default-non-user-no-photo-1',
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
