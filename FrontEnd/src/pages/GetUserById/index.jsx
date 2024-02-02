import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './styles.css'

const GetUserById = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState("")

  const getUserById = async (id) => {
    console.log(id)
    const response = await axios.get(`http://localhost:3000/admin/getUserById?id=${id}`);
    
    if(response.data =="No User Found"){
      setError(response.data)
    }else{
      setError('')
    }
    setItems(response.data)

  };

//   useEffect(() => {
//     getUserById();
//   }, []);
  return(
    <>
    <input type="text" placeholder="Search User By Id" onChange={(e)=>getUserById(e.target.value)}/>
    <p className="error">{error}</p>
    {/* <h2>{items.fName}{" "}{items.lName}</h2> */}
    
{/* <h2>User Data</h2> */}

<table>
  <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>{items.fName}</td>
    <td>{items.lName}</td>
    <td>{items.email}</td>
  </tr>

</table>
    </>
  ) 
};

export default GetUserById;
