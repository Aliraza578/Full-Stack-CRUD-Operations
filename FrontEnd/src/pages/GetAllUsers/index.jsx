import React from "react";
import { useEffect, useState } from "react";
import './styles.css'

const GetAllUsers = () => {
  const [data, setData] = useState([]);

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:3000/admin/getAllUser", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
    const holala = await response.json()
    setData(holala.response)
    // console.log(holala);
    // console.log(data)
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return(
    <div>
    <h2>All Users</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fName}</td>
            <td>{user.lName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
  
};

export default GetAllUsers;
