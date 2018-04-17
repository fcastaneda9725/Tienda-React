import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDT6u9YXf-DlqyJK9DD5OvBVAqh2wxTMew",
    authDomain: "tienda-next-u.firebaseapp.com",
    databaseURL: "https://tienda-next-u.firebaseio.com",
    projectId: "tienda-next-u",
    storageBucket: "tienda-next-u.appspot.com",
    messagingSenderId: "396940530832"
  };

if (!firebase.apps.lenght) {
  firebase.initializeApp.(config);
}

const auth = firebase.auth();

export {
  auth,
};
