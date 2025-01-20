import connectDb from "@/helpers/db";
import { taskModel } from "@/models/tasks";
import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
connectDb();

// export async function GET(request, { params }) {
//   try {
//     let { userId } = params;
//     let user = await userModel.findById(userId);
//     return NextResponse.json({
//       user,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({
//       message: "user not found",
//     });
//   }
// }

export async function PUT(request, { params }) {
  try {
    let { userId } = params;
    let { name, email, password, about, profileUrl } = await request.json();

    await userModel.findByIdAndUpdate(userId, {
      name,
      email,
      password,
      about,
      profileUrl,
    });

    return NextResponse.json({
      success: true,
      message: "updated successfulyy",
      name,
      email,
      password,
      about,
      profileUrl,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  let { userId } = params;
  try {
    await userModel.deleteOne({
      _id: userId,
    });
    const response = NextResponse.json({
      message: "user is deleted successfully",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "delete is not done",
      success: false,
    });
  }
}



