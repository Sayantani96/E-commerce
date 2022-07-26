import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,
doc,
getdoc,
setdoc} from 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyAWEWxC6Zt0q1fETFSknhbO85ZyLqJZwdw",
        authDomain: "apparel-db-ca31f.firebaseapp.com",
        projectId: "apparel-db-ca31f",
        storageBucket: "apparel-db-ca31f.appspot.com",
        messagingSenderId: "837471346794",
        appId: "1:837471346794:web:1a81cba387bf676f4b6a13"
      };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account",

  })

  export const auth=getAuth();
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
  export const db=getFirestore();

 export const createUserDocumentFromAuth= async(userAuth)=> {
    const userDocRef= doc(db,'users',userAuth.uid);
    console.log(userDocRef);
 }