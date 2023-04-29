import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export default function FriendList({ items }) {
  return (
    <ul className={css.statList}>
      {items.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
