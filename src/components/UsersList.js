import React from 'react';
import UserItem from './UserItem';
import UserContext from '../context/UserContext';

const UsersList = () => {
  return (
    <UserContext.Consumer>
      {({ isLoading, users }) => (
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
      )}
    </UserContext.Consumer>
  );
};

export default UsersList;
