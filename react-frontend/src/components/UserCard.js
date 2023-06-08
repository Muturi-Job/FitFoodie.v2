import React, { useState, useEffect } from 'react';

const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');

  useEffect(() => {
    // Fetch user details from the API endpoint
    fetch(`http://localhost:9292/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error if needed
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
         
        
        
        }
        ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleInputChange = (event) => {
    setUpdatedName(event.target.value)
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
         {isEditing ? (
        <div>
          <input type="text" value={updatedName} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => setIsEditing(true)}>Update</button>
        </div>
      )}
    
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UserCard;
