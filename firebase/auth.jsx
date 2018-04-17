import { auth } from './firebase';

export const signInRegular = (email, password) =>
auth.signInWithEmailAndPassword(email, password);

export const logOut = ( ) =>
auth.signOut();
