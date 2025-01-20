import { taskModel } from "@/models/tasks";
import { NextResponse } from "next/server";


// api/tasks/[tasks]

export async function GET(request,{params}){
    try{
        let {taskId} = params;

    let task = await taskModel.findById(taskId);

    return NextResponse.json({
        success:true,
        message:"Got single user",
        name:task.title
    })
    }catch(error){
      console.log(error);
      return NextResponse.json({
          success:false,
          message: "task cant be fetched"
      })
      
    }
}

export async function DELETE(request,{params}){

    try{
        let {taskId} = params;

        await taskModel.findByIdAndDelete({_id:taskId});
    
        return NextResponse.json({
            success:true,
            message:"task deleted successfully"
        })
    }catch(error){
      console.log(error);
      return NextResponse.json({
          success:false,
          message:"task is not deleted"
      })
      
    }
}


export async function PUT(request,{params}){

  try{
    let {taskId} = params;

    let {title,content,addedData,status,userId} = await request.json()

    await taskModel.findByIdAndUpdate(taskId,{title,content,addedData,status,userId})

    return NextResponse.json({
        
        title,content,addedData,status,userId
    })
  }catch(error){
    console.log(error);
    return NextResponse.json({
        success:false,
        message:"task is not updated"
    })
    
  }
}