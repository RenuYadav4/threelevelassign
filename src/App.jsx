import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./Pages/UsersList";
import EditUser from "./Pages/EditUser";
import Login from "./Pages/Login";
import { UserProvider } from "./context/context";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/userslist" element={<UsersList />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/edituser" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
