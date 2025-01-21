import connectDb from "@/helpers/db";
import { taskModel } from "@/models/tasks";
import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
connectDb();

export async function GET(request, { params }) {
  try {
    let { userId } = params;
    let user = await userModel.findById(userId);
    return NextResponse.json({
      success: true,
      message:"fetched user successfully",
      user,
    },{status:201});
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "user not found",
      error
    },{status:400});
  }
}

export async function PUT(request, { params }) {
  try {
    let { userId } = params;
    let { name, email, password, about, profileUrl } = await request.json();

   const user = await userModel.findByIdAndUpdate(userId, {
      name,
      email,
      password,
      about,
      profileUrl,
    });

    if(!user){
      return NextResponse.json({
        success: false,
        message: "User is not found",
        error
      },{status:500});
    }

    return NextResponse.json({
      success: true,
      message: " User updated successfulyy",
      name,
      email,
      password,
      about,
      profileUrl,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "User is not updated",
      error
    },{status:500});
  }
}

export async function DELETE(request, { params }) {
  try {
    let { userId } = await params;
    const user = await userModel.findOneAndDelete({_id:userId})
   
    if(!user){
      return NextResponse.json({
        success: false,
        message: "User is not found",
      },{status:500});
    }

    const response = NextResponse.json({
      success: true,
      message: "user is deleted successfully",
      user
    },{status:200});
    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "User is not deleted",
      error
    },{status:500});
  }
}



