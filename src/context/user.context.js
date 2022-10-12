import { createContext, useState } from "react";

export const UserContext =createContext({
    currentUser: null,
    setCurrentUser:()=>null,
});


//this provider is essentially allowing any of these children to access the values inside of the useState
export const UserProvider=({children})=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}