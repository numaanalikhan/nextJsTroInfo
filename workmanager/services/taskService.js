import { axiosInstance } from "@/helpers/createInstance";

export async function addTask(state) {
  const result = await axiosInstance
    .post("/api/tasks", state)
    .then((res) => {
      res.data;
      console.log((res.data));
      
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


