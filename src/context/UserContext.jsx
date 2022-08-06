import React,{createContext,useEffect, useState} from 'react'
import { authChangeListener,createUserDocumentFromAuth } from '../utils/firebase.utils';

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
})

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser}
    useEffect(()=>{
        // const signChange=
        authChangeListener((user)=>{
            // console.log(user);
            if(user){
                 createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
    },[])
   
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

