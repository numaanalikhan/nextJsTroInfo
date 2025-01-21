import connectDb from "@/helpers/db";
import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connectDb();

export async function POST(request) {
  const { email, password } = await request.json();
  const bcrypt = require("bcrypt");

  try {
    const user = await userModel.findOne({
      email,
    });

    console.log(user);
    // 1 getting user and  checking wrong email
    if (!user) {
      throw new Error("user not found");
    }

    // 2 password check
    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      throw new Error("Password not matched");
    }

    // 3 generate token throw jwt.sign
    const token = jwt.sign(
      {
        _id: user._id,
        user: user.name,
      },
      process.env.JWT_KEY
    );

    console.log("token:",token)
//  send token through cookie

    const response = NextResponse.json({
      message:"Login Succesffluy and sent cookie",
      success:true,
    },{
      status: 201,
    })
    response.cookies.set("authToken",token,{
      expiresIn:"1d",
      httpOnly:true
    })


    return response
    
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
