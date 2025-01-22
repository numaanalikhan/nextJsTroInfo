import { NextResponse } from "next/server";

export async function POS(request){
    const response = NextResponse.json({
        message:"user successfully logged out!!!",
        success:true,
    })
    response.cookies.set("authToken","",{
        expires:new Date(0)
    })
    
    return response
}