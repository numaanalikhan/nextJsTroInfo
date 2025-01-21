const { axiosInstance } = require("@/helpers/createInstance");

export async function loginfn (state){    

const result = await axiosInstance.post("api/login",state)
               .then((res)=>{res.data})

    return result;
}