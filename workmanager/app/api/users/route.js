import connectDb from "@/helpers/db";
import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { toast } from "react-toastify";
connectDb();

export async function POST(request) {
  // try block
  try {

    // gettting the raw json data from body through request and the Fetch part 
    const { name, email, password, about, profileUrl } = await request.json();


    // process 
    const user = new userModel({
      name,
      email,
      password,
      about,
      profileUrl,
    });

    console.log("Password before hashing:", password);

    // hasing the password
    user.password = await bcrypt.hash(user.password, 10);

    // saving the data into db
    await user.save();
    
    // response 
    const response = NextResponse.json({
      status: 201,
      user,
      message: "User created successfully",
    });
    return response;

    //catch block
  } catch (error) {
    // checking if the email is already existed
    
    if(error.errorResponse.code===11000){
      return NextResponse.json({
        status:false,
        message:"email already existed"
      },{status:500})
    }
    return NextResponse.json({
      status: false,
      message: "failed to create user",
      error
    },{status:500});
  }
}

export async function GET(request) {
  let users = [];
  users = await userModel.find().select("-password");
  return NextResponse.json({
    succes: true,
    failure: false,
    message: "succesfully runed get request",
    list: users,
  });
}
