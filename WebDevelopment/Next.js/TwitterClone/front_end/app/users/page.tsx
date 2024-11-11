"use client"

import React, { useState } from 'react';
import axios from 'axios';

const GetUserComponent = () => {
  const [name, setName] = useState(''); 
  interface UserData {
    Name: string;
    
  }

  const [userData, setUserData] = useState<UserData | null>(null); 
  const [error, setError] = useState(''); 

  const fetchUser = async () => {
    try {
      const response = await axios.post('/getUsers', { Name: name });
      setUserData(response.data); 
      setError('');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response && err.response.status === 404) {
        setError('User not found');
      } else {
        setError('Error fetching user');
      }
      setUserData(null); 
    }
  };

  return (
    <div>
      <h2>Get User Info</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={fetchUser}>Get User</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {userData.Name}</p>
        
        </div>
      )}
    </div>
  );
};

export default GetUserComponent;
