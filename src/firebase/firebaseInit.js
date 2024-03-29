import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY_VALUE,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID_VALUE,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
