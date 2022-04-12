import { initializeApp } from "firebase/app";

import { 
  getFirestore, 
  collection, 
  addDoc,
  getDoc,
  setDoc,
  doc
} from "firebase/firestore";

import { 
  getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJN5ZLQq9G0SFNsZA8CgvEXIPBd__-kDg",
  authDomain: "clothing-store-db-9d06a.firebaseapp.com",
  projectId: "clothing-store-db-9d06a",
  storageBucket: "clothing-store-db-9d06a.appspot.com",
  messagingSenderId: "224096180097",
  appId: "1:224096180097:web:7c987eef9d22e1cfc1ba80"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (user) => {
  const { displayName, uid, email} = user;
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const createdAt = new Date();

  if (!docSnap.exists()) {
    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(error) {
      console.log("error creating the user", error.message);
    }
  }

  return docSnap;
};