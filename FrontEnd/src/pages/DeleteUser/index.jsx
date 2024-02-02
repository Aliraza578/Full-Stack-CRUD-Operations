import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const DeleteUser = () => {
  const [data, setData] = useState([]);

  const deleteUser = async () => {
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
  const handleDelete =  async(id) => {
    const response = await axios.delete(`http://localhost:3000/admin/deleteUser?id=${id}`)
    // console.log(response)
    alert(response.data)
    window.location.reload();
  }
  useEffect(() => {
    deleteUser();
  }, []);
  return(
    <>
        <div>
    <h2>All Users</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fName}</td>
            <td>{user.lName}</td>
            <td>{user.email}</td>
            <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </>
  )
  
};

export default DeleteUser;
