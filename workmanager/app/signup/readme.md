### How we have implemented the sign up funcitonaliyt

1) EndPoint for signup:  https:localhost:3000/api/users 

2) we have a form when we click on submit buttion it will triggers>>> handleSignUp fun

in that fun 

first it prevents the form to reload the page

then second we impplemte validation using ### using truthy and fasly value....

then third we see if the password is less than 6 characters then we will give error through toast.warning..

then it goes to the try{} and catch block...

it calls the post api and passes the state variable...

if valid it gives succes or error>>>>>


### in backend, need to test with api calls
###  implemented the hashing of paswword with bcrypt...


