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
getDoc,
collection,
writeBatch,
query,
getDocs} from 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyAWEWxC6Zt0q1fETFSknhbO85ZyLqJZwdw",
        authDomain: "apparel-db-ca31f.firebaseapp.com",
        projectId: "apparel-db-ca31f",
        storageBucket: "apparel-db-ca31f.appspot.com",
        messagingSenderId: "837471346794",
        appId: "1:837471346794:web:1a81cba387bf676f4b6a13"
      };
  
  // Initialize Firebase
   initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account",

  })

  const auth=getAuth();

  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)
  export const db=getFirestore();

  export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey);
    const batch=writeBatch(db);

    objectsToAdd.forEach(obj => {
      const docRef=doc(collectionRef,obj.title.toLowerCase())
      batch.set(docRef,obj);
    });

    await batch.commit();
    console.log('created');
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };

 export const createUserDocumentFromAuth= async(userAuth,additionalInfo)=> {
    const userDocRef= doc(db,'users',userAuth.uid);


    const userSnapshot=await getDoc(userDocRef);
  

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