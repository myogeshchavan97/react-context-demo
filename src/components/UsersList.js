import React from 'react';
import UserItem from './UserItem';

const UsersList = ({ users, isLoading }) => {
  return (
    <div className="users-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {users.map((user, index) => (
            <UserItem key={index} {...user} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default UsersList;
