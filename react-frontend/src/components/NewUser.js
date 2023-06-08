import React, { useState } from 'react';

const NewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the API endpoint
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        setName('');
        setEmail('');
        setPhone('');
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
      <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Phone:</label>
        <input type="integer" value={phone} onChange={handlePhoneChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NewUser;