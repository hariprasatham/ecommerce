// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdv2Aj04cPeoGXCv0Q_RuSebgFavAhOtM",
  authDomain: "flipkart-clone-react-e946e.firebaseapp.com",
  projectId: "flipkart-clone-react-e946e",
  storageBucket: "flipkart-clone-react-e946e.appspot.com",
  messagingSenderId: "427132213135",
  appId: "1:427132213135:web:0f4c3e443d10d09ededdfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export default app;