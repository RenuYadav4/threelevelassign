import { createContext, useState } from "react";
import React from "react";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(false);
    const [updated, setUpdated] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState(""); // State for success/error messages

    return (
        <UserContext.Provider 
        value={{ data, setData, editing, setEditing, updated, setUpdated, showForm, setShowForm, message, setMessage }} >
            {children}
        </UserContext.Provider>
    )
} 