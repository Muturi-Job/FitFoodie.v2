import React, { useState, useEffect } from 'react';

const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');


  useEffect(() => {
    // Fetch user details from the API endpoint
    fetch(`http://localhost:9292/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId]);

  const handleDelete = () => {
    // Send a DELETE request to the API endpoint
    fetch(`http://localhost:9292/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  //Updating a users details

  const handleUpdate = () => {
    fetch(`http://localhost:9292/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { name: updatedName,
         email :updatedEmail,
         phone :updatedPhone      
        }
        ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleNameChange = (event) => {
    setUpdatedName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setUpdatedEmail(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setUpdatedPhone(event.target.value)
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <label >Name</label>
          <input type="text" value={updatedName} onChange={handleNameChange} />
          <label >Email</label>
          <input type="text" value={updatedEmail} onChange={handleEmailChange} />
          <label >Phone</label>
          <input type="text" value={updatedPhone} onChange={handlePhoneChange} />
  
          <button onClick={handleUpdate}>Save</button>
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
      }

export default UserCard