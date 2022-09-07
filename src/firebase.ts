import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const firebaseConfig = {
  apiKey: 'AIzaSyDGYyVGpYu8CphUG2zgjVnb2CYhBC4Ym1s',
  authDomain: 'slack-clone-632cc.firebaseapp.com',
  projectId: 'slack-clone-632cc',
  storageBucket: 'slack-clone-632cc.appspot.com',
  messagingSenderId: '162995355706',
  appId: '1:162995355706:web:8fff7081a2fd2a60727503',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
