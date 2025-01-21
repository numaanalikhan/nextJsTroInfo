import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");
 const authToken =   request.cookies.get("authToken")?.value
 console.log(authToken);
 
//1
 // this variables true vlaue if we go to that path with help of nextUrl.pathnam
 let loggedInUserNotAccessPath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"
 console.log(loggedInUserNotAccessPath);

// 1) is for login user 2) is for not logined user
// 1) checking if one is at signup || login path and has token then he cant acces the signup and login page instead redirected to /profile/user route
// 2) if he is either signup || login page but no  token is aviable i.e. he is not loggd in he directed to login page

    if(request.nextUrl.pathname=== '/api/login'){
        return
    }


    if(loggedInUserNotAccessPath){
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }else{
        if(!authToken){
            return NextResponse.redirect(new URL('/login', request.url))
         }
    }

    // check weather the user is login or not
    


//2
 
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    // the above are not secured routes but the below are secured route
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*"
],
};
