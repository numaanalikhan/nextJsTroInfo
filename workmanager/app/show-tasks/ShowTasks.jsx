"use client";
import { deleteTask } from '@/services/taskService';

import { getUserTasks } from "@/services/loginService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from 'react-toastify';
import { userContext } from '@/contextApi/userProvider';

function ShowTasksPage() {
  // we need to call the api/users/[users]/tasks api and then store in a state...
  const [tasksData, setTasksData] = useState([]);
  const context = userContext()

  const loadUserTasks = async (userId) => {
    try {
      const tasks = await getUserTasks(userId);
      setTasksData([...tasksData,...tasks]);
      console.log(tasks);
      
    } catch (error) {
      console.log(error);
    }
  };

async  function deleteTaskParent (taskId){
    try { 
     const result = await deleteTask(taskId)
     console.log(result)
     
     var filterTask = tasksData.filter((task)=>{
      // jo elemetn id 
        return  task._id != taskId
     })
     setTasksData(filterTask)
      toast.success("task deleted")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(context.user){
        loadUserTasks(context.user._id)
    }
  }, [context.user]);
  const revTasksData = [...tasksData].reverse()
  return (
      <div className="container grid mt-3 mx-auto">
    <div>
        <h1 className="text-3xl text-center mb-3 ">Your Tasks {tasksData.length}</h1>
          {
          revTasksData.map((task)=>{
              return(
                <Task key={task._id} task={task} id={task._id} deleteTaskParent={deleteTaskParent}/>
              )
          })
              }
      </div>
    </div>
  )
}

export default ShowTasksPage;
