import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../sign-up/sign-up.component';

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
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
