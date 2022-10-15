import React, {useState} from 'react'

const useForm = (validate) => {
 const [values, setvalues] = useState({
    username:"",
    email:"",
    password:"",
    password2:"",
 });
 const[errors, seterrors] = useState({});

 const handleChange = (e)=>{
    const {name,value} =  e.target;  

    setvalues((prevValues)=>{
        return{
            prevValues,
            [name]: value,
        }
    })
};

const handleSubmit =(event)=>{
    event.preventDefault();

    seterrors(validate(values));
}

return{handleChange, values, handleSubmit, errors};
}

export default useForm


//usestate - it's a react hook = state values ah store pannurathuku help pannum (eg) oru variable la oru value change panurom antha change webpage la display pannanum na ithu use aagum 
//normal variable ooda value ah change panni atha display panna changges theriyathu