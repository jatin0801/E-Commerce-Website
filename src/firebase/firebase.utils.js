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

      export const createUserProfileDocument=async(userAuth,additionalData)=>{
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
       
        if (!snapShot.exists){
          const{displayName,email}=userAuth;
          const createdAt=new Date;
          try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          }catch(error){
            console.log('error creating user',error.message)
          }
          }
          return userRef;
      }

      firebase.initializeApp(config);
      export const auth=firebase.auth();
      export const firestore=firebase.firestore();
    
      const provider=new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle=()=>auth.signInWithPopup(provider);
      export default firebase;