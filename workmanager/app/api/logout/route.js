import { NextResponse } from "next/server";

export async function POST(request){
   try {
    const response = NextResponse.json({
        message:"user successfully logged out!!!",
        success:true,
    })
    response.cookies.set("authToken","",{
        expires:new Date(0)
    })
    return response;
   } catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"faile api/logout",
        error
    })
   }
    
    return response
}