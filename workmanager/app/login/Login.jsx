"use client";

import React from "react";
import { useState } from "react";

function LoginComp() {
    
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
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
              value={login.email}
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
              value={login.password}
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
