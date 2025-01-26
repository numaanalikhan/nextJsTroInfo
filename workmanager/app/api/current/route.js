import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDb from "@/helpers/db";

connectDb()

export async function GET(request){
    // first we need to get the token, in the token we have our user data
    const token =  request.cookies.get("authToken")?.value;
    console.log(`token generated : ${token}`);
    
    // after getting token we need to verify it, 
    // by veriging we can get the payload from the token
    const payload = jwt.verify(token,process.env.JWT_KEY)
    console.log(`payload ${payload._id}`);

    // by gettng the payload we can easily access the user from the db
    const user = await userModel.findOne({_id:payload._id}).select("-password")

    
    
    return NextResponse.json({message:"token generated successfully",user})
}