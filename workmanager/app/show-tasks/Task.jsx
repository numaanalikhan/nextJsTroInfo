import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';
function Task({task,id,deleteTaskParent}) {
    const handleDeleteTask = (taskId)=>{
        try{
            deleteTaskParent(taskId)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div key={id} className=''>
        <div className={`relative  rounded-md p-5 mb-2 ${task.status=="completed" ? "bg-green-800" :"bg-gray-800"}`}>
            <h1 className='text-2xl font-bold mb-2'>{task.title}</h1>
            <p>{task.content}</p>
            <p className='mt-2'>Status: <span className='font-bold'> {task.status.toUpperCase()}</span></p>
            <RxCross1 onClick={()=>{handleDeleteTask(task._id)}} className='hover:text-red-800 text-2xl absolute bottom-16 top-7 right-4'/>
        </div>
    </div>
  )
}

export default Task