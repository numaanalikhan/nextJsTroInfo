### Getting Started 

>Under the helpers Folder we have files that can be used again and again,

## db.js
> The First file is db.js This file exports the connectDB which is used to connect the database with mongodb, 

## createInstance.js
> This file is used to create the axios instances, normalyy we use post or put methods to do http calls, but we can use axios instance by setting up the configuration globally, and can be used any where...

> so here, we call axios.create({configuration}) and store in axiosInstance variable
> then we export it into services folder with the file name of taskService.js
> In taskServie.js file we do the http method suppose
       
       // here we are doing post of tasks
       const addTask =(stateVariable)=>{
    const result =  axiosInstance.post(api/tasks, stateVariable)
                    .then((res.data))
        return result;
       }

> then we export in that particular route where we are dealing

>  app/addTasks/page.js
    axios addTask(stateVariable)




