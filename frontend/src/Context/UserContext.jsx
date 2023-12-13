import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

// Create a new context for the user

export const UserContext=createContext({})


// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}){ // Define a component to provide the user context to its children
    const [user,setUser]=useState(null)

    useEffect(()=>{
      getUser()

    },[])

    // Define the getUser function
    const getUser=async()=>{
      try{
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        //console.log(res.data)
        setUser(res.data)

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>)
}