import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOJI4EbLs85PZ1L_hPzqpsUx9kGYHfAHg",
    authDomain: "fab-ecom-db.firebaseapp.com",
    databaseURL: "https://fab-ecom-db.firebaseio.com",
    projectId: "fab-ecom-db",
    storageBucket: "fab-ecom-db.appspot.com",
    messagingSenderId: "732104725579",
    appId: "1:732104725579:web:3d446092770f84ec90e9ce"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;