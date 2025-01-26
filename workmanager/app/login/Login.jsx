

import { userContext } from "@/contextApi/userProvider";
import { loginfn } from "@/services/loginService";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginComp() {

  //1 states
  const router = useRouter();
  const { user, setUser } = userContext();
  // setting up the states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //2 onSubmit from form
  const handleLogin = async (e) => {
    //2.1 preventiing refrsh
    e.preventDefault();

    //2.2 basic validation
    if (!loginData.email || !loginData.password) {
      return toast.warning("fill out the required fields");
    }

    //2.3 http post method

    try {
      const result = await loginfn(loginData);
      console.log(result);

      setUser({ ...result });
      toast.success("Login Successfull", { position: "top-center" });
      router.push("/profile/user");
      setLoginData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(`login unsuccessfull ${error.response.data.message || ""}`);
    }
  };

  // double binding with input field and state variable
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-4">
          <h1 className="text-center text-3xl">Login</h1>

          {
            //form login
          }
          <form onSubmit={handleLogin}>
            {
              // Email
            }
            <label htmlFor="email" className="block my-4">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              value={loginData.email}
              placeholder="Enter here"
              onChange={(e) => {
                handleChange(e);
              }}
              type="email"
              className="w-full bg-gray-600 p-3 rounded-full "
              autoComplete="off"
            />

            {
              // User Password
            }

            <label htmlFor="password" className="block my-4">
              Your Password
            </label>
            <input
              id="password"
              name="password"
              value={loginData.password}
              placeholder="Enter here"
              onChange={(e) => {
                handleChange(e);
              }}
              type="password"
              className="w-full bg-gray-600 p-3 rounded-full"
            />

            {
              // button..
            }
            <div className="text-center mt-5">
              <button
                type="submit"
                className="font-bold bg-blue-500 hover:bg-blue-800 px-4 py-2 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          {/* {JSON.stringify(login)} */}
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
