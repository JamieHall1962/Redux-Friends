import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const ERROR_ADDING_FRIEND = "ERROR_ADDING_FRIEND";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
        dispatch({ type: FRIENDS_FETCHED, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
      });
  };
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADDING_FRIEND });

  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => {
      dispatch({ type: FRIEND_ADDED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ADDING_FRIEND, payload: err });
    });
};
