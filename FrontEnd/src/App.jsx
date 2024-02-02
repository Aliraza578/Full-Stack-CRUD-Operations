import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetUserById from "./pages/GetUserById";
import DeleteUser from "./pages/DeleteUser";
import SignUp from "./pages/SignUP";
import LoginPage from "./pages/LoginPage";
import GetAllUsers from "./pages/GetAllUsers";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componenets";
import UpdateUser from "./pages/UpdateUser";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="getallusers" element={<GetAllUsers />} />
        <Route path="getuser" element={<GetUserById />} />
        <Route path="delete" element={<DeleteUser />} />
        <Route path="update" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
