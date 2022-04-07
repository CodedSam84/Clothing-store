import { auth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response);
  }

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN</button>
    </div>
  );
};

export default SignIn;