import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyB8DVPSiAyXAM-aSNnLOgUYhAi56tU3mOY",
    authDomain: "shoppingproject-a1190.firebaseapp.com",
    databaseURL: "https://shoppingproject-a1190.firebaseio.com",
    projectId: "shoppingproject-a1190",
    storageBucket: "shoppingproject-a1190.appspot.com",
    messagingSenderId: "821207239819",
    appId: "1:821207239819:web:5ec7f11c87ba8b03f3588e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize your firebase app
// firebase.initializeApp({
//     projectId: 'YOUR_PROJECT_ID',
//     databaseURL: 'YOUR_DB_URL'
// })


export const db = firebase.firestore()