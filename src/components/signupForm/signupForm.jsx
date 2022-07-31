import React, { useState } from 'react'
import { createUserDocWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase.utils';
import InputForm from './InputForm';
import Button from '../Button/Button';

const SignupForm = () => {
  const [formFields,setField]=useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
 
  const {displayName,email,password,confirmPassword}=formFields;
  // console.log(formFields);

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setField({...formFields,[name]:value})
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();

    if(password!==confirmPassword){
      alert("Confirm password is not matching to password")
      return;
    }
    try{
      const {user}=await createUserDocWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user,{displayName});
    }catch(error){
      if(error.message==='auth/email-already-in-use'){
        alert("Already signed up");
      }
      else alert("Some error occured")
    }
  
  }
  return (
    <div className='sign-up-container'>
        <h2>
            I do not have an account
        </h2>
        <h3>
          Sign up with email and password
        </h3>
        <form onSubmit={handleSubmit}>
          <InputForm
          label="Name"
          type="text" 
          required
          name="displayName" 
          value={displayName}
           onChange={handleChange}
          />
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
           <InputForm
          label="Confirm Password"
          type="password" 
          required
          name="confirmPassword" 
          value={confirmPassword}
           onChange={handleChange}
          />
          <Button buttonText="Sign Up" buttonType="submit" buttonClass=""/>
        </form>
    </div>
  )
}

export default SignupForm