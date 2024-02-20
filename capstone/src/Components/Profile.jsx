import React, { useState, useEffect } from 'react';
import { Col, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [updatedUser, setUpdatedUser] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [avatarFile, setAvatarFile] = useState({});
    const [saveClicked, setSaveClicked] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (editMode && saveClicked && Object.keys(updatedUser).length > 0) {
      handleUpdateProfile();
      setSaveClicked(false); // Reset saveClicked after handling update
    }
  }, [editMode, saveClicked, updatedUser]);

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
    const { name, value } = e.target;
    setUpdatedUser((prevUpdatedUser) => ({
      ...prevUpdatedUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };
  
  const handleUpdateProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
  
      if (!userId) {
        console.error('User ID not found in local storage.');
        return;
      }
  
      let avatarUrl = null;
  
      // Check if an avatar file is selected
      if (avatarFile) {
        // Upload avatar
        const formData = new FormData();
        formData.append('avatar', avatarFile);
  
        const uploadAvatarResponse = await fetch(`${process.env.REACT_APP_BACKEND}/users/${userId}/upload`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
          body: formData,
        });
  
        if (uploadAvatarResponse.ok) {
          const uploadedData = await uploadAvatarResponse.json();
          avatarUrl = uploadedData.imageUrl;
  
          // Update user avatar
          setUser((prevUser) => ({
            ...prevUser,
            avatar: avatarUrl,
          }));
  
          // Update updatedUser.avatar if maintaining it in edit mode
          setUpdatedUser({
            ...updatedUser,
            avatar: avatarUrl,
          });
  
          console.log('Avatar uploaded successfully');
          console.log(updatedUser);
        } else {
          console.error('Error uploading avatar. Server response:', uploadAvatarResponse.status, uploadAvatarResponse.statusText);
          return; // Stop further processing if avatar upload fails
        }
      }
  
      // Dopo l'upload dell'immagine o se non è stata selezionata alcuna immagine, procedi con l'aggiornamento del profilo
      // Update user data
      const updateUserResponse = await fetch(`${process.env.REACT_APP_BACKEND}/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          ...updatedUser,
          avatar: avatarUrl, // Include the avatar URL if present
        }),
      });
  
      if (updateUserResponse.ok) {
        const updatedUserData = await updateUserResponse.json();
        console.log(updatedUserData);
  
        // Update user with other properties
        setUser((prevUser) => ({
          ...prevUser,
          nome: updatedUserData.nome,
          cognome: updatedUserData.cognome,
          email: updatedUserData.email,
          username: updatedUserData.username,
          // Add other profile properties as needed
        }));
  
        // Update updatedUser if maintaining it in edit mode
        setUpdatedUser({
          // Add other profile properties as needed
        });
  
        console.log('User data updated successfully');
      } else {
        console.error('Error updating user data. Server response:', updateUserResponse.status, updateUserResponse.statusText);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  
  

  
  
  

  const handleEditProfile = () => {
    setEditMode(true);
  };

   const handleSaveProfile = async () => {
    try {
      await handleUpdateProfile(); // Call the function to update the profile
      setEditMode(false); // Set editMode to false after handling update
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div>
      <Col className='bg-secondary relative col-12 col-lg-3 pt-2 border' key={user.id}>
        <div className='text-white'>
          <p>Nome: {user.nome}</p>
          <p>Cognome: {user.cognome}</p>
          <p className='absolute'>Username: {user.username}</p>
          <p>Avatar: <img src={user.avatar} alt="avatar"></img></p>
</div>
      </Col>

      {editMode ? (
        <>
          <div>
        <label>Email:</label>
        <input type="text" name="email" value={updatedUser.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Nome:</label>
            <input type="text" name="nome" value={updatedUser.nome || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Cognome:</label>
            <input type="text" name="cognome" value={updatedUser.cognome || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={updatedUser.username || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Avatar:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <button onClick={handleSaveProfile}>Salva modifiche</button>
        </>
      ) : (
        <>
          <button onClick={handleEditProfile}>Modifica profilo</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;