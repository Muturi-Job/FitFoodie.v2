import React from 'react';
import { useState, useEffect } from 'react';
import NewUser from './NewUser';
import UserList from './UserList';

export default function Users() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <>
    <NewUser/>
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>    
    </>
  )
}