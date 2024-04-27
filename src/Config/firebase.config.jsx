import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM6IhXccRaVauGym_YvsboxvjR3nr6WBw",
  authDomain: "arts-and-crafts-f48a2.firebaseapp.com",
  projectId: "arts-and-crafts-f48a2",
  storageBucket: "arts-and-crafts-f48a2.appspot.com",
  messagingSenderId: "129978263538",
  appId: "1:129978263538:web:2da04c6ca17e7acb3cad6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;