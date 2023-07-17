import { FriendListItem } from 'components/FriendList/FriendListItem.jsx';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  function createList(friends) {
    let list = friends.map(({avatar,name,isOnline,id}) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key = {id}
      />
    ));
    return list;
  }
  let markup = <ul className={css.friendList}>{createList(friends)}</ul>;
  return markup;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,}
