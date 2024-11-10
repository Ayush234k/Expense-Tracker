// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSHKoAuWve9JcWK87V1vmlbPZt0_E1680",
  authDomain: "expensetracker-auth-321a5.firebaseapp.com",
  projectId: "expensetracker-auth-321a5",
  storageBucket: "expensetracker-auth-321a5.firebasestorage.app",
  messagingSenderId: "487101244266",
  appId: "1:487101244266:web:f7d2587072af48383e3b13"
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);
export default auth;