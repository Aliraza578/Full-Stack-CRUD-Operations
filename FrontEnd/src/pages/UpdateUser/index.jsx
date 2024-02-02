import axios from "axios";
import React from "react";
import { useState } from "react";

const UpdateUser = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();

  const [items, setItems] = useState([]);
  const defaultValue1 = {
    id,
    fName,
    lName,
    email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response2 = await axios.put(
      "http://localhost:3000/admin/updateUser",
      defaultValue1
    );
    console.log(response2)
    alert(response2.data);
  };
  const getuser = async (id) => {
    const response = await axios.get(
      `http://localhost:3000/admin/getUserById?id=${id}`
    );

    if (response.data !== "No User Found") {
      setItems(response.data);
      setId(id);
      setfName(items.fName);
      setlName(items.lName);
      setEmail(items.email);
    } else {
      alert(response.data);
    }
  };

  return (
    <>
      <input
        type="number"
        placeholder="Search User By Id"
        onChange={(e) => getuser(e.target.value)}
      />
      <div className="mainContainer">
        <div className="col-md-4 text-center box-shadow pt-4 pb-4 ">
          <h2 className="h2">Update User</h2>

          <form onSubmit={handleSubmit}>
            <div className="fieldContainer">
              <div className="col-md-10  ">
                <input
                  defaultValue={items.fName}
                  type="text"
                  name="fName"
                  placeholder="Your fName"
                  className="form-control"
                  onChange={(e) => setfName(e.target.value)}
                />
              </div>
              <div className="col-md-10 ">
                <input
                  defaultValue={items.lName}
                  type="text"
                  name="lName"
                  placeholder="Your lName"
                  className="form-control"
                  onChange={(e) => setlName(e.target.value)}
                />
              </div>
              <div className="col-md-10 ">
                <input
                  defaultValue={items.email}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-10 "></div>
              <div className="col-md-10">
                <button className="btn btn-primary col-md-12" type="submit">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
