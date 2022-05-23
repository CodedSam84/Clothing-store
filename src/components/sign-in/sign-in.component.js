import { useState } from "react";
import "./sign-in.styles.scss";

import { signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultsFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultsFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultsFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const { email, password } = formFields;

    try {
      await signInUserWithEmailAndPassword(email, password);
    } catch(error) {
      console.log("Error was encountered", error.message);
    }

    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput 
          label = "Email"
          type="email" 
          name="email" 
          required 
          onChange={handleChange} 
          value={email}
        />

        <FormInput 
          label = "Password"
          type="password" 
          name="password" 
          required 
          onChange={handleChange} 
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType = {BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
        
      </form>
    </div>
  );
}

export default SignInForm;