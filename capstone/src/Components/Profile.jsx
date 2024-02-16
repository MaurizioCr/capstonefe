import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error('User ID not found in local storage.');
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Error fetching user data. Server response:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error('User ID not found in local storage.');
        return;
      }

      if (Object.keys(updatedUser).length === 0) {
        console.warn('No data to update.');
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        setUser(updatedUserData);
        setUpdatedUser({}); // Reset the updatedUser state
        console.log('User updated successfully');
      } else {
        console.error('Error updating user data. Server response:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <Col className='bg-secondary relative col-12 col-lg-3 pt-2 border' key={user.id}>
        <div className='text-white'>
          <p>Nome: {user.nome}</p>
          <p>Cognome: {user.cognome}</p>
          <p className='absolute'>Username: {user.username}</p>
        </div>
      </Col>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={updatedUser.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={updatedUser.nome} onChange={handleInputChange} />
      </div>
      <div>
        <label>Cognome:</label>
        <input type="text" name="cognome" value={updatedUser.cognome} onChange={handleInputChange} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={updatedUser.username} onChange={handleInputChange} />
      </div>
      <button onClick={handleUpdateProfile}>Aggiorna Profilo</button>
    </div>
  );
};

export default UserProfile;
