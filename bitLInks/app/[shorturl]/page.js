import React from "react";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
async function page({ params }) {
  console.log(await params);

  const shorturl = await params;
  
  let client = await clientPromise;
  
  let db = client.db("bitLinks");
  
  let collection = db.collection("url");
  
  let docs = await collection.findOne({ shorten: shorturl.shorturl });
  
  console.log(docs);

  if (docs) {
    redirect(docs.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
  return <div className="font-bold text-black">page {shorturl.shorturl}</div>;
}

export default page;
