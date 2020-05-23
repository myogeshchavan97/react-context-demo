import React, { useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../context/UserContext';

const UsersList = () => {
  const { users, isLoading } = useContext(UserContext);
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
