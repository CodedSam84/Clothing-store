import { useState } from "react";
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
    <div>
      <h1>Sign up with your email and password</h1>

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

        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
};

export default SignUp;