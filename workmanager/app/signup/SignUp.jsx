"use client";
import { signUp } from "@/services/taskService";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

function SignUpComp() {
    
   const [signup,setSignup] = useState({
        name:"",
        email:"",
        password:"",
        about:"",
        profileUrl:"something"
    })
    
    const handleSignup= async (e)=>{
        // preventing reload
        e.preventDefault();


        //validation..

        if(!signup.name || !signup.email || !signup.password || !signup.about || !signup.profileUrl){
          return toast.warning("Please fill the requied fields")
        }

        if(signup.password.length < 6){
          return toast.error("Password shall be greater than 6 characters")
        }

        // try catch block for post 
        try{
        const result =  await signUp(signup)
        toast.success("user added successfully",{
            position:"top-center"
        })
        setSignup({
            name:"",
            email:"",
            password:"",
            about:"",
            profileUrl:"something"
        })
        }catch(error){
            console.log(error);
            toast.error("User not Addd",{
                position:"bottom-center"
            })
        }

    }

    const handleChange = (e)=>{
        setSignup({
            ...signup,[e.target.name]:e.target.value
        })
    }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
            {// Image
            }
          <div className="flex justify-center my-4">
                   <Image src="signup.svg" alt="login image" width={350} height={10} />
                 </div>
          <h1 className="text-3xl text-center">Sign Up</h1>

          {// form postions
          }
          <form onSubmit={handleSignup}>

            {// User Name
            }
            <label htmlFor="user" className="block my-4">
              Your Name
            </label>
            <input
            
              id="user"
              name="name"
              value={signup.name}
              placeholder="Enter here"
              onChange={(e)=>{handleChange(e)}}
              type="text"
              className="w-full bg-gray-600 p-3 rounded-full"
            />

            {// Email
            }
            <label htmlFor="email" className="block my-4">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              value={signup.email}
              placeholder="Enter here"
              onChange={(e)=>{handleChange(e)}}
              type="email"
              className="w-full bg-gray-600 p-3 rounded-full "
            />

            {// User Password
            }

            <label htmlFor="password" className="block my-4">
              Your Password
            </label>
            <input
              id="password"
              name="password"
              value={signup.password}
              placeholder="Enter here"
              onChange={(e)=>{handleChange(e)}}
              type="password"
              className="w-full bg-gray-600 p-3 rounded-full"
            />

            {// User About
            }

            <label htmlFor="about" className="block my-4">
              About
            </label>
            <textarea
              rows={8}
              id="about"
              name="about"
              value={signup.about}
              placeholder="Enter here"
              onChange={handleChange}
              className="w-full bg-gray-600 p-3 rounded-lg"
            />

            {// buttion
            }
            <div className="text-center mt-4">
                <button
                type="submit"
                className="bg-blue-500 px-4 py-2 hover:bg-blue-700 rounded-sm font-bold ">Sign Up</button>
            </div>
        
          </form>
        {JSON.stringify(signup)}
        </div>
      </div>
    </div>
  );
}

export default SignUpComp;

/* name,
email,
password,
about,
profileUrl,*/
