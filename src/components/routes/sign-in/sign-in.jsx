import React,{useContext, useEffect, useState} from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth, 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword } from '../../../utils/firebase.utils'
import SignupForm from '../../signupForm/signupForm';
import './sign-in.scss'
import InputForm from '../../signupForm/InputForm';
import Button from '../../Button/Button';
import { UserContext } from '../../../context/UserContext';

const SignIn = () => {
  const {setCurrentUser}=useContext(UserContext);
 const [signInFields,setSignInFields]=useState({
  email:'',
  password:''
 }) 
 const {email,password}=signInFields
  useEffect(()=>{
    (async()=>{
      const response=await getRedirectResult(auth);
      // console.log(response.user);
      // if(response){
      //   const userDocRef=await createUserDocumentFromAuth(response.user);
      // }
    })();
  },[])
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setSignInFields({...signInFields,[name]:value})
  }
const logGoogleUser=async()=>{
    const {user}= await signInWithGooglePopup();
    // console.log(user.uid); 
    
//     setCurrentUser(user);
 }
const Signin=async()=>{
  
  try{
    const response=await signInUserWithEmailAndPassword(email,password);
    // setCurrentUser(response.user);
    if(response){
      alert('signed in')
    }
  }catch(error){
    console.log(error.message);
  }

}

  return (
    <>
<div style={{display:'flex',justifyContent:'space-evenly'}}>
  <div>
    <h2>I already have an account</h2>
    <h3>Sign in with your email and password</h3>
    <InputForm
          label="Email"
          type="email" 
          required
          name="email" 
          value={email}
          onChange={handleChange}
          />
           <InputForm
          label="Password"
          type="password" 
          required
          name="password" 
          value={password}
          onChange={handleChange}
          />
          <div style={{display:'flex'}}>
            <Button
             buttonText="Sign in"
              buttonType="submit" 
              buttonClass=''
              onClick={Signin}/>
            <Button 
            buttonText="Sign in with google" 
            buttonType="submit" 
            buttonClass='google-sign-in' 
            onClick={logGoogleUser}/>
          </div>
  </div>
<SignupForm/>
</div>
    </>

  )
}

export default SignIn