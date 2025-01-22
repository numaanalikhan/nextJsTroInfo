"use client";

import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { getCurrentUserApi } from "@/services/loginService";
import { toast } from "react-toastify";

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  // to update the user we need to do api get current user call 
  
   
  useEffect(()=>{
   try {
    const load = async ()=>{
        const currentUser = await  getCurrentUserApi()
        console.log(currentUser);
        setUser({...currentUser})
    }
    load()
    console.log("this will only show when state is updated"+JSON.stringify(user) );
    
} catch (error) {
    console.log(error)
    setUser({})
    toast.error("error in fetching current user")
   }
  },[])
//   useEffect(() => {
//     console.log('Updated user state:', user);
//   }, [user]); // This will run whenever the `user` state changes
  return (
    <>
      <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    </>
  );
}

export default UserProvider;
