import { axiosInstance } from "@/helpers/createInstance";

export async function addTask(state) {
  const result = await axiosInstance
    .post("/api/tasks", state)
    .then((res) => {
      console.log((res.data));
     return res.data;
      
    });
    return result
}


export async function signUp(state) {
  const result = await axiosInstance
    .post("/api/users", state)
    .then((res) => {
      res.data;
      console.log((res.data));
      
    });
    return result
}

export const deleteTask = async (taskId)=>{
const result =   await axiosInstance.delete(`/api/tasks/${taskId}`)
  .then((res)=>{
    return res.data
  })
  return result
}

