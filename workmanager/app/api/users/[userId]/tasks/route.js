//localhost:3000/users/[userId]/tasks

import connectDb from "@/helpers/db";
import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";

connectDb()

export async function GET(request, { params }) {
  try {
    let { userId } = await params;

    let tasks = await taskModel.find({ userId });

    return NextResponse.json({
      message: "fetched tasks of user successfully",
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
}
