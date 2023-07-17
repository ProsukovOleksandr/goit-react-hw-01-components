import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline}, key) => {
  return (
    <li className={css.item}>
      <span className={isOnline===true?(css.statusOnline):(css.statusOffline)}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
}