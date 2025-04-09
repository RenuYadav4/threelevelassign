import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./Pages/UsersList";
import PortfolioForm from "./Pages/PortfolioForm";
import PortfolioPreview from "./Pages/PortfolioPreview";
import EditUser from "./Components/EditUser";
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
            <Route path="/portfolio-form" element={<PortfolioForm/>}></Route>
            <Route path="/preview" element={<PortfolioPreview/>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
