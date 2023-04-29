import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ status, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={status ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
