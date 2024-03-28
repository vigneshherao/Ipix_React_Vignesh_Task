import React from 'react'
import { useState,useEffect } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/users`
      );
      const users = await data.json();
      console.log(users)
      setUsers(users);
    };

  return (
    <div className='flex flex-wrap px-2 sm:px-10 justify-center'>
        {
            users.map((user)=><User data={user}/>)
        }
    </div>
  )
}

export default Users