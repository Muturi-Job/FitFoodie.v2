import React, { useState } from 'react';

const NewUser = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the API endpoint
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Do something with the response data if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error if needed
      });

    // Reset the input field
    setName('');
  };

  return (
    <div className='add-new-user'>
    <h2>Add new user</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NewUser;
