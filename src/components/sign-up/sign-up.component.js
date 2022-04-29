import { useState } from "react";
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss"

const defaultsFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

const SignUp = () => {

  const [formFields, setFormFields] = useState(defaultsFormFields);
  console.log(formFields);
  const { displayName, email, password, passwordConfirmation } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultsFormFields);
  }
  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormFields({ ...formFields, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ( password !== passwordConfirmation ) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
    } catch(error) {
      alert(error);
    }

    resetFormFields();
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          label = "Name"
          type="text" 
          name="displayName" 
          required 
          onChange={handleChange} 
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email" 
          name="email" 
          required 
          onChange={handleChange} 
          value={email}
        />

        <FormInput
          label="Password"
          type="password" 
          name="password" 
          required 
          onChange={handleChange} 
          value={password}
        />

        <FormInput
          label="PasswordConfirmation"
          type="password" 
          name="passwordConfirmation" 
          required 
          onChange={handleChange} 
          value={passwordConfirmation}
        />
        <Button type="submit">
          SIGNUP
        </Button>
      </form>
    </div>
  );
};

export default SignUp;