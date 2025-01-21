### about login api...

# in login api we call the end point 
> for post request api/login
> in ui we go to route app/login

## in post request we need to pass email and password as body...

## Backend
> first we destructure {email and password} from  request.json(), 
> second we check is the email exist in the db if yes we then we compate the provided pass with db hased pass if it is correct then follow next step
> in third step we create our jwt tokent through jwt.sign() by passing required parameters, store in variable and log it and check weather we got the token or no
> in fourth step we need to send the token as response either header or cookie 
we choose cookie for sending token as response to client.
   * we use response.cookie.set() to send token through client read the documention of nextResponse() from next .js

## In UI
> we pass the email and password fields and click on login button form will be submited and handleLogin will get exectued
  * first loading of page is prevented
  * second we use basic validation 
  * at last we do post request
            * first configureing the axios instance and exporting as axiosInstance
            * secon in helper folder we call the 
               axiosInstance.post("api/login"/,state)
               .then((res)=>{res})
            * in ui page we just call the fun and pass the state variables
......................................................................................

### Middleware in the Project....

> before executing the request, the middleware code is executed first
> so first it checks if the user is on the path signin || login through
  request.nextUrl.pathname>>> you need to go through nextResponse > nextUrl >url
  it will provide either true or false
> check weather the user is logged in or not it can be checked throug if the token 
  is  visible or not


* we need to specify matcher to which it shall be implemeted...
  

