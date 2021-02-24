import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyD4ypmMIM3MVFCea-J9bCdT8FCLPQaxzeU",
        authDomain: "crwn-db-501bb.firebaseapp.com",
        projectId: "crwn-db-501bb",
        storageBucket: "crwn-db-501bb.appspot.com",
        messagingSenderId: "479349905581",
        appId: "1:479349905581:web:589b7ef29ac5686ee3ce24",
        measurementId: "G-6E38BRWNGP"
      };

      firebase.initializeApp(config);
      export const auth=firebase.auth();
      export const firestore=firebase.firestore();
    
      const provider=new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle=()=>auth.signInWithPopup(provider);
      export default firebase;