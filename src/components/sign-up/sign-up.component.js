import { useState } from "react";

const defaultsFormFields = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

const SignUp = () => {
  const handleSignUp = () => {};

  const [formFields, setFormFields] = useState(defaultsFormFields);
  console.log(formFields);
  const { name, email, password, passwordConfirmation } = formFields;

  const setInputValue = (event) => {
    const { name, value} = event.target;
    setFormFields({ ...formFields, [name]: value});
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSignUp}>
        <label>Name</label>
        <input
          type="text" 
          name="name" 
          required 
          onChange={setInputValue} 
          value={name}
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          onChange={setInputValue} 
          value={email}
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          required 
          onChange={setInputValue} 
          value={password}
        />

        <label>Password Confirmation</label>
        <input 
          type="password" 
          name="passwordConfirmation" 
          required 
          onChange={setInputValue} 
          value={passwordConfirmation}
        />

        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
};

export default SignUp;