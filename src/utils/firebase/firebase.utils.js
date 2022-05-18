import { initializeApp } from "firebase/app";

import { 
  getFirestore, 
  collection,
  writeBatch,
  addDoc,
  getDoc,
  setDoc,
  doc,
  query,
  getDocs
} from "firebase/firestore";

import { 
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

export const createUserDocumentFromAuth = async (user, additionalInformation = {}) => {
  if (!user) return;
  
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
        ...additionalInformation,
      });
    } catch(error) {
      alert(error);
    }
  }

  return docSnap;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if ( !email || !password ) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToadd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToadd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};