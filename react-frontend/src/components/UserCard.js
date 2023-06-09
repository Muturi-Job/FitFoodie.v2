import React, { useState, useEffect } from 'react';

const UserCard = ({ userId ,users, setUsers}) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');

  useEffect(() => {
    fetch(`http://localhost:9292/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUpdatedName(data.name);
        setUpdatedEmail(data.email);
        setUpdatedPhone(data.phone);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId]);

  const handleDelete = () => {
    fetch(`http://localhost:9292/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setUsers(users.filter((user) => user.id !== userId));

      });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:9292/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.location.reload()
        setIsEditing(false);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleCancelUpdate = () => {
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
    setIsEditing(false);
  };

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUpdatedEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setUpdatedPhone(event.target.value);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='user-card'>
      {isEditing ? (
        <div>
          <label>Name</label>
          <input type="text" value={updatedName} onChange={handleNameChange} />
          <label>Email</label>
          <input type="text" value={updatedEmail} onChange={handleEmailChange} />
          <label>Phone</label>
          <input type="text" value={updatedPhone} onChange={handlePhoneChange} />

          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
