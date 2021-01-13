import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDRVTerNKCiSVdsUSR7XbdmB2M42dsc9o",
    authDomain: "snapchat-clone-57d26.firebaseapp.com",
    projectId: "snapchat-clone-57d26",
    storageBucket: "snapchat-clone-57d26.appspot.com",
    messagingSenderId: "1055218951290",
    appId: "1:1055218951290:web:9ef4ef9dcceb3bf53287c3",
    measurementId: "G-JQV3ZL5ZXQ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
