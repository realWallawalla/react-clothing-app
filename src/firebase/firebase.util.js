import firebase from 'firebase/app'; //need keyword for import specific parts of firebase
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvN1HdCnXKLgjG5HWCb-mghr_H8vOvcnQ",
    authDomain: "clothing-app-react-c978e.firebaseapp.com",
    databaseURL: "https://clothing-app-react-c978e.firebaseio.com",
    projectId: "clothing-app-react-c978e",
    storageBucket: "clothing-app-react-c978e.appspot.com",
    messagingSenderId: "565472239329",
    appId: "1:565472239329:web:eeb59d3a0cd41f587be1a0",
    measurementId: "G-Z7CH4RS1F0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;