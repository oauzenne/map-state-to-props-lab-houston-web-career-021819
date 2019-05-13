import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
                  Users! {this.props.userCount}
          {this.props.users.map(user => (<li>{user.username}</li>))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

export default Users
