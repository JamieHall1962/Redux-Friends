import React from 'react';

import { connect } from 'react-redux';

import { addFriend } from '../actions';
import { Form, Input } from 'reactstrap';


import styled from 'styled-components';

const Header = styled.div`
background:#00274c;
  width: 30%;
  padding: 10px 2%;
  margin: 20px auto;
  `

const Button = styled.button`
    display: inline-block;
    position: relative;
   margin-top: 25px;
    top: 0;
    font-size: 30px;
    font-family: "Open Sans", Helvetica;
    border-radius: 4px;
    border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
    background: rgba( 22, 230, 137, 1 );
    color: #fff;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 ); 
      
  &:hover {
    top: -10px;
    box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
  } 
  
  &:active {
    top: 0px;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
    background: rgba( 20, 224, 133, 1 );
  }
`



class FriendsForm extends React.Component {
    state = {
           name: '',
           age: '',
           email: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    handleAddFriend = () => {
        const friend = this.state;
        this.props.addFriend(friend);
        this.setState({ name: '', age: '', email: '' });

    }

    render() {
        return (
        <Header>
            <Form>
            <Input name="name" value={this.state.name} type="text" onChange={this.handleInputChange} placeholder="Name" />
            <Input name="age" value={this.state.age} type="number" onChange={this.handleInputChange} placeholder="Age" />
            <Input name="email" value={this.state.email} type="email" onChange={this.handleInputChange} placeholder="Email" />
            </Form>

                <Button color="primary"  onClick={this.handleAddFriend}>Add a Friend</Button>
        </Header>
        );
    }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps, { addFriend })(FriendsForm);