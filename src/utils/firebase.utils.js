import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged} from 'firebase/auth'
import {getFirestore,
doc,
setDoc,
getDoc} from 'firebase/firestore'

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
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)
  export const db=getFirestore();

 export const createUserDocumentFromAuth= async(userAuth,additionalInfo)=> {
    const userDocRef= doc(db,'users',userAuth.uid);

    const userSnapshot=await getDoc(userDocRef);
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }catch(error){
        console.log(error.message);
      }
    }
 }

 export const createUserDocWithEmailAndPassword=async(email,password)=>{
  if(!email || !password) return;
 return await createUserWithEmailAndPassword(auth,email,password);
 }

 export const signInUserWithEmailAndPassword=async(email,password)=>{
  if(!email || !password) return;
 return await signInWithEmailAndPassword(auth,email,password);
 }

 export const signOutUser=async()=>{
  return await signOut(auth);
 }

 export const authChangeListener=(callback)=>{
  return onAuthStateChanged(auth,callback)
 }