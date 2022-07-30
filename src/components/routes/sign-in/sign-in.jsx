import React,{useEffect} from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth, 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect } from '../../../utils/firebase.utils'
import SignupForm from '../../signupForm/signupForm';

const SignIn = () => {
  
  useEffect(()=>{
    (async()=>{
      const response=await getRedirectResult(auth);
      console.log(response.user);
      if(response){
        const userDocRef=await createUserDocumentFromAuth(response.user);
      }
    })();
  },[])
const logGoogleUser=async()=>{
    const {user}= await signInWithGooglePopup();
    console.log(user.uid); 
    const userDocRef=await createUserDocumentFromAuth(user);
}
// const logRedirectUser=async()=>{
//   const {user}=await signInWithGoogleRedirect();
//   console.log(user);
// }
  return (
    <>
    <div>
    Sign In
</div>
<button onClick={logGoogleUser}>
Sign in with google popup
</button>
<button onClick={signInWithGoogleRedirect}>
Sign in with google redirect
</button>
<SignupForm/>
    </>

  )
}

export default SignIn