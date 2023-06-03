// Import the functions you need from the SDKs you need
import { initializeApp, storage } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNEhqsleHHXVktgma3DYxWPHHodWmO8Zc",
    authDomain: "ichiichi-itss.firebaseapp.com",
    projectId: "ichiichi-itss",
    storageBucket: "ichiichi-itss.appspot.com",
    messagingSenderId: "539748221144",
    appId: "1:539748221144:web:6b4d2f94215b28e29717ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const storage = storage();

// export { storage };
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;