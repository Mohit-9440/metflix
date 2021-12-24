import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here
const config = {
    apiKey: "AIzaSyDHFwndZSMlrJqWWaY09KsgMyf0Uan6RJY",
    authDomain: "metflix-5bf44.firebaseapp.com",
    projectId: "metflix-5bf44",
    storageBucket: "metflix-5bf44.appspot.com",
    messagingSenderId: "96206229669",
    appId: "1:96206229669:web:572715c984cb68b36c3d4c"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };