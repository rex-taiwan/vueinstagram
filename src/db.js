import firebase from 'firebase'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCuzJ4IsWR31fgvsKJaMPP6UOi6rs9DNus",
    authDomain: "vueinstagram-42742.firebaseapp.com",
    databaseURL: "https://vueinstagram-42742.firebaseio.com",
    projectId: "vueinstagram-42742",
    storageBucket: "gs://vueinstagram-42742.appspot.com/",
    messagingSenderId: "902482724232",
    appId: "1:902482724232:web:8f0cfcf810508b6e00263d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize your firebase app
// firebase.initializeApp({
//     projectId: 'YOUR_PROJECT_ID',
//     databaseURL: 'YOUR_DB_URL'
// })


export const db = firebase.firestore()