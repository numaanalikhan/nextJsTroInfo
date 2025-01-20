import connectDb from "@/helpers/db";
import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";
connectDb()
export async function POST(request){
    try{
        var {title,content,addedData,status,userId} = await request.json();
    const task =new  taskModel({
        title,
        content,
        addedData,
        status,
        userId
    })
    await task.save()

    return NextResponse.json({
        message:"Task Added Successfully",
        success:true,
        task
    })
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"No Task Added UNSuccessfully",
            success:false,
            
        })        
    }
    
}

export async function GET(request){

    let tasks = await  taskModel.find()
    return NextResponse.json({
        message:"list of tasks",
        success:true,
        tasks
    })
}
