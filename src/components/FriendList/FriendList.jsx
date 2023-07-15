import { FriendListItem } from 'components/FriendList/FriendListItem.jsx';
import css from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  function createList(friends) {
    let list = friends.map(friendData => (
      <FriendListItem
        avatar={friendData.avatar}
        name={friendData.name}
        isOnline={friendData.isOnline}
      />
    ));
    return list;
  }
  let markup = <ul className={css.friendList}>{createList(friends)}</ul>;
  return markup;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,}
