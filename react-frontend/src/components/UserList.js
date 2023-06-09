import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users , setUsers}) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} userId={user.id}  users={users} setUsers={setUsers}/>
      ))}
    </div>
  );
};

export default UserList;
