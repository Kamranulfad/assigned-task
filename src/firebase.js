import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCnFmSqTX1DUSWayxJ5J-TBFiIYAdjwkq0",
  authDomain: "newproject-20cd4.firebaseapp.com",
  projectId: "newproject-20cd4",
  storageBucket: "newproject-20cd4.appspot.com", 
  messagingSenderId: "897642578680",
  appId: "1:897642578680:web:1f431405347f067f75b10d",
  measurementId: "G-7DES5264MH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };