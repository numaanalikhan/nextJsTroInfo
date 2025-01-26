"use client"
import { userContext } from "@/contextApi/userProvider";
import { getCurrentUserApi } from "@/services/loginService";
import React, { useEffect } from "react";

// export const metadata = {
//   title: "USER PROFILE : WORK MANAGER",
// };
function page() {
  const {user,setUser} = userContext()
    useEffect(() => {
      // if(user==undefined ) return ;
    try {
      const load = async () => {

        const currentUser = await getCurrentUserApi();
        console.log(currentUser);

        // if(!currentUser){
        // return setUser(null)
        // }else{
        setUser(currentUser );
        // }
      };

        load();
        
      console.log(
        "this will only show when state is updated" + JSON.stringify(user)
      );
    } catch (error) {
      console.log(error);
      setUser(undefined);
      toast.error("error in fetching current user");
    }
  }, [user]);
  return <div>this is user page redirected through login</div>;
}

export default page;
