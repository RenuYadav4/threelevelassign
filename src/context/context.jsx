import { createContext, useState } from "react";
import React from "react";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [data, setData] = useState([]);
    return (
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
} 