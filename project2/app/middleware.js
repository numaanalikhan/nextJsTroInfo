import { NextResponse } from "next/server";
export function middleware(request){
    return NextResponse.redirect(new URL("/login",request.url))
}