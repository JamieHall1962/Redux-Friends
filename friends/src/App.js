// change made for commit purposes https://github.com/JamieHall1962/Redux-Friends/pull/1

import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import { fetchFriends } from "./actions";
import { addFriend } from "./actions";
import FriendsList from "./components/friendsList";
import FriendsForm from "./components/friendsForm";

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        {this.props.fetchingFriends ? (
        <h2> Fetching your Friends... </h2>
        ) : (
          <div>
            <FriendsList {...this.props} />
            <FriendsForm {...this.state} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendAdded: state.friendAdded,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchFriends, addFriend })(App);
