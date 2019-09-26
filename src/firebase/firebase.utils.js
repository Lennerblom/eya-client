import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBBgGwEQmtAd7Pz8FfJR49f2aFPzJm0wDc",
  authDomain: "chores-db.firebaseapp.com",
  databaseURL: "https://chores-db.firebaseio.com",
  projectId: "chores-db",
  storageBucket: "",
  messagingSenderId: "538832282866",
  appId: "1:538832282866:web:ecc9e0963b385d24b11c6b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
  const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithgoogle = () => auth.signInWithPopup(provider);

  export default firebase;