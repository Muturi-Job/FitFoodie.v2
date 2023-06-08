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
    < >
    <NewUser/>
    <div>
      <h4 className='user-list-title'>USER LIST</h4>
      <UserList users={users} />
    </div>    
    </>
  )
}