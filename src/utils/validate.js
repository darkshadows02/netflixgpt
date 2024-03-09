export const checkValiddata=(email, password, name)=>{
      
     const isEmailValid= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
     const isPaswordValid= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
       
     if(!isEmailValid){
            return "Email is not valid";
        }
        if(!isPaswordValid){
            return "password is not valid";
        }
        return null;
}