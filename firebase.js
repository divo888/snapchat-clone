import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEqbCsBhHYo7g_rEyqJDU19h6B2XCbj18",
    authDomain: "snap-chat-clone-336e3.firebaseapp.com",
    projectId: "snap-chat-clone-336e3",
    storageBucket: "snap-chat-clone-336e3.appspot.com",
    messagingSenderId: "867668647282",
    appId: "1:867668647282:web:25894c1ca1be60594411eb",
    measurementId: "G-DY0J44GWGC"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db =firebaseApp.firestore();
   const  auth = firebase.auth();
   const storage = firebase.storage();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {db, storage, auth, provider };
   