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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    //console.log('Yoo', firestore.doc('users/aksjas165'))

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;