import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CONTACT_EMAIL } from "./constants";

export const signIn = (password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, CONTACT_EMAIL, password)
};