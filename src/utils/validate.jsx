export const SignInValidate=(email,password)=>{
const validemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const validpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!validemail){
    return "Enter the valid email";
}
if(!validpassword){
    return "Enter valid password"
}
return null;
}