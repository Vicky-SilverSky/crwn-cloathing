// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2P4rdJJ_5jovXeTNV_uhOJccN0hR4Q9Q",
  authDomain: "crwn-clothing-88bf3.firebaseapp.com",
  projectId: "crwn-clothing-88bf3",
  storageBucket: "crwn-clothing-88bf3.appspot.com",
  messagingSenderId: "106283723712",
  appId: "1:106283723712:web:fea04a102f7147f9867625",
  measurementId: "G-2K4N9PJCL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const googleSignin = () => signInWithPopup(getAuth(), provider)

export const getDb = () => getFirestore()

export const createUserDocument = async (userData) => {
  try {
    const { uid } = userData
    const userDocRef = doc(getFirestore(), `users/${uid}`)
    const docRef = await getDoc(userDocRef)
    if (!docRef.exists()) {
      await setDoc(doc(getDb(), "users", uid), userData);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}