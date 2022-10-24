
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeb5Sodno0Ck6_KWZfOEofT1Maw8O0b-s",
    authDomain: "online-shopping-webapp-style.firebaseapp.com",
    projectId: "online-shopping-webapp-style",
    storageBucket: "online-shopping-webapp-style.appspot.com",
    messagingSenderId: "70843022683",
    appId: "1:70843022683:web:80c3da408b03902ed7ae7e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocFromAuth = async (
    userAuth,
    additionalInfo = {}
) => {

    if (!auth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
    if (!email || !password) return;    

    return await signInWithEmailAndPassword(auth, email,password);
}

export const signOutUser = async ()=> await signOut(auth);

//open listener
export const onAuthStateChangedListener =(callback)=>onAuthStateChanged(auth,callback);