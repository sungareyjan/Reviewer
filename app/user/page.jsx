'use client';
import React, { useState, useEffect } from 'react';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
      const data = await response.json();
      setUsers(data);
      console.log(data);
    };

    fetchUsers();
    setMounted(true); // Component is mounted on the client
  }, []);

  return (
    <>
      <div>User Page</div>
      {mounted && <p>{new Date().toLocaleTimeString()}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
