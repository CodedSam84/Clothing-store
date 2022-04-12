import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const createdUserDoc = await createUserDocumentFromAuth(user);
    console.log(createdUserDoc);
  }

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN</button>
    </div>
  );
};

export default SignIn;