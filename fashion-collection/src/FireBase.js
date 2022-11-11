import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ32pCC4kyCMp2-I6T7m2xpN86QuMJvpg",
  authDomain: "fashion-collection-auth.firebaseapp.com",
  projectId: "fashion-collection-auth",
  storageBucket: "fashion-collection-auth.appspot.com",
  messagingSenderId: "81640781710",
  appId: "1:81640781710:web:fe33ef5f8825f5783e96df",
  measurementId: "G-P43RLJX371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export {app};