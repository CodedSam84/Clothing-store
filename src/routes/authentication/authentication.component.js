import SignInForm from '../../components/sign-in/sign-in.component.js';
import SignUp from '../../components/sign-up/sign-up.component.js';
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignUp/>
    </div>
  );
};

export default Authentication;