export const SignInValidate = (email, password) => {
    // Corrected: Removed unnecessary escape character before the dot in the regex
    const validemail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!validemail) {
      return "Enter a valid email";
    }
    if (!validpassword) {
      return "Enter a valid password";
    }
    return null;
  };
  