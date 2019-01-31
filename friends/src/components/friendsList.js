import React from "react";
import { connect } from "react-redux";

import { fetchFriends } from "../actions";
import styled from "styled-components";

const Header = styled.div`
  background: #00274c;
  width: 30%;
  padding: 10px 1%;
  margin: 10px auto;
`;

const CardText = styled.div`
  color: #ffcb05;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-weight: 400;
  border: 3px dotted #0fa53c;
  margin: 15px;
  padding: 15px;
`;
const H2 = styled.h2`
  color: #ffcb05;
  letter-spacing: 1px;
  font-size: 2rem;
  font-weight: 500;
`;

const ButtonSec = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;
  width: 100%;
`;

const Button = styled.button`
      margin-top: 25px;   
    font-size: 18px;
    font-family: "Open Sans", Helvetica;
    border-radius: 4px;
    border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
    background:gray;
    color: #fff;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 ); 
      
  &:hover {
    top: -10px;
    box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.8 );
  `

function Friends(props) {
  return (
    <Header>
      {props.friends.map(friend => (
        <CardText key={friend.id}>
          <H2> {friend.name} </H2>
          Age: {friend.age} <br />
          Email: {friend.email}
          <ButtonSec>
          <Button>Modify</Button>
          <Button>Delete</Button>
          </ButtonSec>
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
