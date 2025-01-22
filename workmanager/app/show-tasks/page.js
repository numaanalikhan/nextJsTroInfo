"use client";
import { UserContext } from "@/contextApi/userContext";
import { axiosInstance } from "@/helpers/createInstance";
import React, { useContext, useEffect, useState } from "react";

// export const metadata ={
//     title:"SHOW TASKS: Work Manager",
//   }

function ShowTasks() {
  var {
    user: { _id },
  } = useContext(UserContext);
  console.log(_id);

  useEffect(() => {
    const load = async () => {
      const result = await axiosInstance
        .get(`/api/users/${_id}/tasks`)
        .then((res) => {
          console.log(res);
          return res;
        });
      return result;
    };

    load();
  }, []);

  return <div></div>;
}

export default ShowTasks;
