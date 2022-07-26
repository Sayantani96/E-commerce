import React from 'react'
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/firebase.utils'
const SignIn = () => {
const logGoogleUser=async()=>{
    const {user}= await signInWithGooglePopup();
    console.log(user.uid); 
    createUserDocumentFromAuth(user);
}
  return (
    <>
    <div>
    Sign In
</div>
<button onClick={logGoogleUser}>
Sign in with google popup
</button>
    </>

  )
}

export default SignIn