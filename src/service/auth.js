import {
  firebaseAuth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "./firebase";

class Auth {
  clickAuth(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      case "Facebook":
        return facebookProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default Auth;
