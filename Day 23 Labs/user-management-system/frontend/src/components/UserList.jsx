import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        <h2>Users List</h2>

        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;