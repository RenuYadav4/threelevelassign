import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./Pages/UsersList";
import EditUser from "./Pages/EditUser";
import Login from "./Pages/Login";
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/userslist" element={<UsersList/>}></Route>
    <Route path="/edituser" element={<EditUser/>}></Route>
  </Routes>
</Router>
  )
}

export default App
