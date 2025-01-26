"use client";

// syntax for create context


import {  useState,createContext, useContext } from "react";

// import { useEffect, useState,createContext } from "react";
// import { getCurrentUserApi } from "@/services/loginService";
// import { toast } from "react-toastify";
// export const UserContext = createContext(undefined)

 const UserContext = createContext(undefined)
export function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);
  // to update the user we need to do api get current user call

  // useEffect(() => {
  //   try {
  //     const load = async () => {
  //       const currentUser = await getCurrentUserApi();
  //       console.log(currentUser);

  //       // if(!currentUser){
  //       // return setUser(null)
  //       // }else{
  //       setUser(currentUser );
  //       // }
  //     };
  //     load();
  //     console.log(
  //       "this will only show when state is updated" + JSON.stringify(user)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     setUser(undefined);
  //     toast.error("error in fetching current user");
  //   }
  // }, []);


  //   useEffect(() => {
  //     console.log('Updated user state:', user);
  //   }, [user]); // This will run whenever the `user` state changes
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
export const userContext = () => useContext(UserContext);

