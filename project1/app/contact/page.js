import React from 'react'
import Script from 'next/script';
export const metadata = {
    title: "Contact ... Facebook Connect with the World",
    description: "This is the discription of the Facebook page Hello every one This is Facebook connect with the world",
  };

function Contact() {
  return (
    <>
   {/* <Script id="alert-script" strategy="beforeInteractive">
        {`
          alert("Welcome to the contact page");
        `}
      </Script> */}
    <div>this is contact page</div>
    </>
  )
}

export default Contact