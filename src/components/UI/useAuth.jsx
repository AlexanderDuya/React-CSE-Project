import { createContext, useState } from "react";
import { useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    // Initialisation ------------------------------------------
    const user = {
        UserID: 1,
        UserFirstname: "Guest",
        UserUsertypeName: "Client"
          
    }
    // State ---------------------------------------------------
    const [loggedInUser, setLoggedInUser] = useState(null);

    // Handlers -------------------------------------

    const login = (user) => setLoggedInUser(user);
    const logout = () => setLoggedInUser(null);

    // View ------------------------------------------

    return (
        <AuthContext.Provider value = {{loggedInUser,login,logout}}>
            {children}
        </AuthContext.Provider>

    );

}

export const useAuth = () => useContext(AuthContext);