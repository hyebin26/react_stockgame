import {
  firebaseAuth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "./firebase";

class Auth {
  clickGoogle() {
    return firebaseAuth.signInWithPopup(googleProvider);
  }
  clickFacebook() {
    return firebaseAuth.signInWithPopup(facebookProvider);
  }
  clickGithub() {
    return firebaseAuth.signInWithPopup(githubProvider);
  }
}

export default Auth;
