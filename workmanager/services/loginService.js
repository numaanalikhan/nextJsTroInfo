const { axiosInstance } = require("@/helpers/createInstance");

export async function loginfn(state) {
  const result = await axiosInstance.post("/api/login", state).then((res) => {
    console.log(res?.data?.user);
    
   return res?.data?.user;
  });

  return result;
}

export async function getCurrentUserApi() {
  const result = await axiosInstance.get("/api/current").then((res) => {
    console.log("here is the data"+ JSON.stringify(res?.data?.user))
    console.log("here is the data"+ JSON.stringify(res?.data))

   return res?.data?.user;
  });
  return result
}


export async function logout(){
  const result = await axiosInstance.post("/api/logout").then((res)=>{
    console.log(res?.data);
    return res?.data
  })
  return result
}



// export async function getCurrentUserApi() {
//   try {
//     const result = await axiosInstance.get("/api/current");
    
//     // Check if the response is HTML (i.e., a login page or redirection)
//     if (result.headers['content-type'].includes('text/html')) {
//       console.error("Redirected to login page or not authenticated");
//       return null;  // Or handle this case as appropriate
//     }
    
//     console.log("here is the data", JSON.stringify(result.data));
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching current user:", error);
//     return null;  // Handle errors appropriately (e.g., logging out the user)
//   }
// }
