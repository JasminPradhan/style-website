import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext =createContext({
    currentUser: null,
    setCurrentUser:()=>null,
});


//this provider is essentially allowing any of these children to access the values inside of the useState
export const UserProvider=({children})=>{
    const [currentUser, setCurrentUser]=useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unSubscribe = onAuthStateChangedListener((user)=>{
            setCurrentUser(user);
        })

        return unSubscribe
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}