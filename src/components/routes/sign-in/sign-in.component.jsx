import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

const { Fragment } = require('react/cjs/react.production.min');

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <Fragment>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </Fragment>
  );
};

export default SignIn;
