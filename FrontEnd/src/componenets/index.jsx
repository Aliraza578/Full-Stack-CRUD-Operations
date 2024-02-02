import './Navebar/styles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink className="padd" to="/login" >Login</NavLink>
      <NavLink className="padd" to="/signup" >SignUp</NavLink>
      <NavLink className="padd" to="/getuser" >GetUser</NavLink>
      <NavLink className="padd" to="/getallusers" >GetAllUser</NavLink>
      <NavLink className="padd" to="/delete" >DeleteUser</NavLink>
      {/* <NavLink className="padd" to="/delete" >DeleteUser</NavLink> */}
      <NavLink className="padd" to="/update" >UpdateUser</NavLink>

    </div>
  )
}

export default Navbar
