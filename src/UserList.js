import React, { useState, useEffect } from 'react';


const useFetch = function (dep){
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    }
    
    fetchUsers();
  }, [...dep]); // Runs once when the component mounts
return {
    users, loading
}
}

function UserList() {

const {loading, users} = useFetch([])
  

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
