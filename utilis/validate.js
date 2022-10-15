export default function validate (values) {
    let errors = {};
    if (!values.username.trim()){
        errors.username = "username required"
    }
    
    if(!values.email.trim()){
        errors.email = "email required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "email address is invalid"
    }
    if(!values.password.trim()){
        errors.password = "password is required"
    }
    else if(values.password.length  < 6){
        errors.password = "password must contain 6 characters"
    }
    if(!values.password2.trim()){
        errors.password2 = "password is required"
    }
    else if (values.password2 !== values.password){
        errors.password2 = "passwords didnot match"
    }
    return errors;
    
}