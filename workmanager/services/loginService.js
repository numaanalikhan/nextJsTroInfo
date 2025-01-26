const { axiosInstance } = require("@/helpers/createInstance");

// impor axiosInstance fro

//show users tasks

export async function getUserTasks(userId){

   const result = await axiosInstance.get(`/api/users/${userId}/tasks`)
    .then((res)=>{
      return res?.data?.tasks
    })
    
    return result
}

export async function loginfn(state) {
  const result = await axiosInstance.post("/api/login", state).then((res) => {
    console.log(res?.data?.user);
    
   return res?.data?.user;
  });

  return result;
}

export async function getCurrentUserApi() {
  let data = null
  try {
    
    const result = await axiosInstance.get("/api/current")

    if(result?.data?.user !== undefined){
      data= result?.data?.user
    }
    else{
      return data=undefined;
    }
  } catch (error) {
    console.log("error: ", error)

  }

  // .then((res) => {
  //   console.log("here is the data"+ JSON.stringify(res?.data))
    // the below commented lines were written to solve the login and logout problem

  //   if(res?.data?.user == undefined){
  //     return null
  //   }
  //   else{
  //     return res?.data?.user;
  //   }
  // }).catch((error)=>{
  //   console.log("error: ", error)
  // })
  return data
}


export async function logout(){
  const result = await axiosInstance.post("/api/logout").then((res)=>{
    console.log(res?.data);
    return res?.data
  })
  return result
}





// these are used when we deal only with frontend
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
