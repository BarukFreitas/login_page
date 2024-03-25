function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "Name should not be empty";
    }
    else if(!email_pattern.test(values.email)){
        error.name = "Email Did not match";
    }
    else{
        error.name = "";
    }
 
    if(values.password === ""){
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(values.password)){
        error.password = "password did not match";
    }
    else{
        error.password = "";
    }
    return error;
}

export default Validation;