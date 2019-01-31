import React from "react";
import { connect } from "react-redux";

import { fetchFriends } from "../actions";
import styled from "styled-components";

const Header = styled.div`
  background: #00274c;
  width: 30%;
  padding: 10px 2%;
  margin: 20px auto;
`;

const CardText = styled.div`
  color: #ffcb05;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-weight: 400;
`;
const H2 = styled.h2`
  color: #ffcb05;
  letter-spacing: 1px;
  font-size: 2rem;
  font-weight: 500;
`;

function Friends(props) {
  return (
    <Header>
      {props.friends.map(friend => (
        <CardText key={friend.id}>
          <H2> {friend.name} </H2>
          Age: {friend.age} <br />
          Email: {friend.email}
        </CardText>
      ))}
    </Header>
  );
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(Friends);
