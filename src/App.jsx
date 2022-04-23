import FormInput from "./components/FormInput";
import { useState } from "react";
import "./app.css";


function App() {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });
 
  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder:"username",
      errorMessage:"Username should be 3-16 characters and not include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
    id:2,
    name: "email",
    type: "email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address",
    label: "Email"
    ,
      required:true,
  },
  {
    id:3,
    name: "birthday",
    type: "date",
    placeholder:"Birthday",
    errorMessage:"",
    label: "Birthday"
  },
  {
    id:4,
    name: "password",
    type: "password",
    placeholder:"password",
    errorMessage:"Password should be 8-20 characters and include atleast 1 letter",
    label: "password",
    pattern: "/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/",
    required:true,
  },
  {
    id:5,
    name: "confirmPassword",
    type: "password",
    placeholder:"confirm Password",
    errorMessage:"Passowrd do not match",
    label: "confirm Password",
    pattern: values.password,
    required:true,
  },
  ]
 
  const handleSubmit = (e)=>{
    e.preventDefault();
   
  };

  const onChange = (e)=>{
    setValues ({
      ...values, [e.target.name]: e.target.value
    });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id}
           {...input}value={values[input.name]}
            onChange= {onChange}/>
        ))}
        <button>Submit</button>
      
       </form>

    </div>

    
  );
}

export default App;
