import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
import { userApi } from "../utils/constants";
import Shimmer from "./Shimmer";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch(userApi);
    const users = await data.json();
    setUsers(users);
  };

  if (users.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap px-2 sm:px-10 justify-center">
      {users.map((user) => (
        <User key={user.id} data={user} />
      ))}
    </div>
  );
};

export default Users;
