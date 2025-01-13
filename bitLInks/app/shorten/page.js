"use client";
import Link from "next/link";
import React, { useState } from "react";

function Shorten() {
  const [url, setUrl] = useState("");
  const [shorten, setShorten] = useState("");
  const [generated,setGenerated] = useState("");

  const generateUrl = () => {
    if(url==""||shorten==""){
      alert("misys")
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorten: shorten,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorten}`)
        alert(result.message);
        setUrl("")
        setShorten("")
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex flex-col items-center gap-2 max-w-lg mx-auto bg-purple-100 my-16 p-8 rounded-md">
      <h1 className="text-black font-bold text-lg ">
        Generate your Short URLs
      </h1>
      <div className="flex flex-col gap-5 items-center  rounded-md">
        <input
          type="text"
          value={url}
          className="px-4 py-1  text-black text-left  focus:outline-purple-700 rounded-md"
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        <input
          type="text"
          value={shorten}
          className="px-4 py-1 rounded-md text-black focus:outline-purple-700"
          placeholder="Enter your prefered short URL text"
          onChange={(e) => {
            setShorten(e.target.value);
          }}
        />

        <button
          onClick={() => {
            generateUrl()
          }}
          className="w-3/4 hover:bg-purple-50 hover:text-purple-700 border-2  hover:border-purple-700  py-1 bg-purple-500 font-bold rounded-md"
        >
          Generate URL
        </button>
        <div>
          {
            generated && <>
            <p className="text-black font-bold">Your Path</p>
            <p className="text-black font-bold"><Link target="_blank" href={generated}>{generated}</Link></p>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Shorten;
