import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  //1
  // this variables true vlaue if we go to that path with help of nextUrl.pathnam
  let loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  console.log(loggedInUserNotAccessPath);

  
  //the following is the public route, which enables users to easily login
  if (request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users") {
    return;
  }

  // check wheather the user is login or not login
  if (loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      
      if(request.nextUrl.pathname.startsWith("/api")){
        return NextResponse.json({
          message:"not authenticated",
          success:false
        },{
          status:401
        })
      }
       
      return NextResponse.redirect(new URL("/login", request.url));


    }
  }

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
    "/api/:path*",
  ],
};
