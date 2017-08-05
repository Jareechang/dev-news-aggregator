import alt from '../alt';

/* JSON source*/
//import { users as friends } from '../../friends.json';
const friends = [];

class FriendActions {

  fetchFriends() {
    return (dispatch) => {
      dispatch();
      setTimeout(() => {
        this.updateFriends(friends);
      }, 1000);
    };
  }

  filterFriends(text, friendList) {
    return (dispatch) => {
      dispatch();
      this.updateFriends(friendList.filter(
        friend => friend.name.match(new RegExp(text, 'i'))
      ));
    };
  }

  resetFriends() {
    return (dispatch) => {
      dispatch();
      this.updateFriends([]);
    };
  }

  updateFriends = _friends => (
    _friends
  )
}

export default alt.createActions(FriendActions);

