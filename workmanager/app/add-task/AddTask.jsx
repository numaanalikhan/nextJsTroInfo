"use client";

import React, { useState } from "react";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import {  toast } from 'react-toastify';

function AddTask() {
  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6788e0074b45b6db4323da7b",// for temporay period only
  });
  const handleChange= (e)=>{
    setTaskData({...taskData,[e.target.name]:e.target.value})
  }
  const handleAddTask = async (e)=>{
    e.preventDefault();
    console.log(taskData);
   
    //validation taskData in future

    try{
        const result = await  addTask(taskData)
        console.log(result);
        toast.success("Task Added Successfully" ,{
          position:"top-center"
        })
        {
          setTaskData(
          {
            title:"",
            content:"",
            status:"none",
            }
          )}
    }catch(error){
      console.log(error);
      toast.error("Task not Added!!!",{
        position:"bottom-center"
      })
    }

  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 shadow-lg p-5">
        <div className="flex justify-center my-2">
          <Image src="login.svg" alt="login image" width={350} height={80} />
        </div>
        <h1 className="text-3xl text-center mt-5">Add your Task Here</h1>

        <form onSubmit={handleAddTask}>
          {
            //task-title
          }
          <div className="mt-4">
            <label
              className="block mb-2 text-lg font-medium  "
              htmlFor="task-title"
            >
              Title
            </label>
            <input
              className="bg-gray-600 p-3 ring-[1px] rounded-xl  focus:ring-black-500   w-full"
              type="text"
              id="task-title"
              name="title"
              value={taskData.title}
              onChange={(e)=>{
                handleChange(e)
              }}
            />
          </div>

          {
            //task-content
          }
          <div className="mt-4">
            <label
              className="block mb-2 text-lg font-medium  "
              htmlFor="task-content"
            >
              Content
            </label>
            <textarea
              rows={5}
              className="bg-gray-600 p-3 ring-[1px] rounded-xl  focus:ring-black-500   w-full"
              id="task-content"
              name="content"
              value={taskData.content}
              onChange={(e)=>{
                handleChange(e)
              }}
            />
          </div>

          {
            //status
          }
          <div>
            <label
              className="block mb-2 text-lg font-medium  "
              htmlFor="task-status"
            >
              Status
            </label>

            <select
              id="task-status"
              className="bg-gray-600 p-3 ring-[1px] rounded-xl  focus:ring-black-500   w-full"
              name="status"
              value={taskData.status}
              onChange={(e)=>{
                handleChange(e)
              }}
            >
              Status
              <option  value="none" disabled>
                ---select options---
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>

          {
            //button options
          }
          <div className="flex justify-center mt-4">
            <button className="bg-blue-600 font-semibold rounded-lg me-4 py-2 px-4 hover:bg-blue-800 ">
              Add Task
            </button>
            <button 
            // onClick={()=>{setTaskData({title:"",content:"",status:"",userId:"6788e0074b45b6db4323da7b"})}}
            className="bg-red-600 font-semibold rounded-lg  py-2 px-4 hover:bg-red-800 ">
              Clear
            </button>
          </div>
        </form>
        {
          JSON.stringify(taskData)
        }
      </div>
    </div>
  );
}

export default AddTask;
