import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ERROR_FETCHING_FRIENDS,
  DELETE_FRIEND,
  ADDING_FRIEND,
  FRIEND_ADDED,
  ERROR_ADDING_FRIEND
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  addingFriend: false,
  friendAdded: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      };

    case FRIENDS_FETCHED:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      };

    case ERROR_FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };

    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true
      };

    case FRIEND_ADDED:
      return {
        ...state,
        addingFriend: false,
        friendAdded: true,
        friends: action.payload
      };

    case ERROR_ADDING_FRIEND:
      console.log(action.payload);
      return { ...state, addingFriend: false, error: action.payload };

    default:
      return state;
  }
};
