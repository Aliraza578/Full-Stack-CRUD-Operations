import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import "./styles.css";
import axios from "axios";

const LoginPage = () => {
  const defaultValue = {
    email: "",
    password: "",
  };

  // const handleSubmit = async (values) => {
  //   const response = await fetch("http://localhost:3000/authentication/login", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(values),
  //   });
  //   console.log(values);
  //   const data = await response.json();
  //   console.log("data ", data);
  // };

  const handleSubmit = async (values) => {
    const response = await axios.post("http://localhost:3000/authentication/login",values)
    console.log(values);
    console.log(response);
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <>
      <div className="loginContainer">
        <div className="col-md-3 text-center login-box-shadow  pt-4 pb-4">
          <h2>Login</h2>
          <Formik initialValues={defaultValue} onSubmit={handleSubmit}>
            <Form>
              <div className="fieldContainer">
                <div className="col-md-10 ">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter User Email"
                    className="form-control"
                  />
                </div>
                <div className="col-md-10">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className="form-control"
                  />
                </div>
                <div className="col-md-10">
                  <button className="btn btn-primary col-md-12" type="submit">
                    Login
                  </button>
                </div>
                <label className="mt-2">
                  Don't have an account? <NavLink to="#">Sign Up</NavLink>
                </label>
                <br />
                <label>OR</label>
                <div className="col-md-10 pb-3">
                  <button className="btn btnColor col-md-12">
                    <GrFacebook />
                    Login With Facbook
                  </button>
                </div>
                <div className="col-md-10 border">
                  <button className="btn  col-md-12">
                    <FcGoogle />
                    Login With Google
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
