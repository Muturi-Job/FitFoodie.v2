import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} userId={user.id} />
      ))}
    </div>
  );
};

export default UserList;
