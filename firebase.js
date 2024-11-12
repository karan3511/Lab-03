
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEQbhcSvdas22RI7V-Nitsx2DhrUmkxlw",
  authDomain: "lab0-c1f06.firebaseapp.com",
  projectId: "lab0-c1f06",
  storageBucket: "lab0-c1f06.firebasestorage.app",
  messagingSenderId: "932916338751",
  appId: "1:932916338751:web:5fce8c578e1708e9c8588a",
  measurementId: "G-33C7FH3GYW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
