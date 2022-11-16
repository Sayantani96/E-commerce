import React,{useContext,useState} from 'react'
// import { getRedirectResult } from 'firebase/auth'
import { 
  signInWithGooglePopup,
  // createUserDocumentFromAuth,
  signInUserWithEmailAndPassword } from '../../../utils/firebase.utils'
import SignupForm from '../../signupForm/signupForm';
import './sign-in.scss'
import InputForm from '../../signupForm/InputForm';
import Button from '../../Button/Button';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const {setCurrentUser}=useContext(UserContext);
  const navigate=useNavigate();
 const [signInFields,setSignInFields]=useState({
  email:'',
  password:''
 }) 
 const {email,password}=signInFields
  // useEffect(()=>{
  //   (async()=>{
  //     await getRedirectResult(auth);
  //   })();
  // },[])
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setSignInFields({...signInFields,[name]:value})
  }
const logGoogleUser=async()=>{
    const {user}= 
    await signInWithGooglePopup(); 
    
    setCurrentUser(user);
    if(user){
      navigate('/');
    }
 }
const Signin=async()=>{
  
  try{
    const response=await signInUserWithEmailAndPassword(email,password);
    setCurrentUser(response.user);
    if(response){
      alert('signed in')
      navigate('/');

    }
  }catch(error){
    console.log(error.message);
  }

}

  return (
    <>
<div className='authenticate'>
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
          <div className='sign-in-button'>
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