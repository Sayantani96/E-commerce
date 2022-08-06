import React, { useState } from 'react'
import { createUserDocWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase.utils';
import InputForm from './InputForm';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
// import { UserContext } from '../../context/UserContext';

const SignupForm = () => {
  // const {setCurrentUser}=useContext(UserContext);
  const [formFields,setField]=useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
 
  const {displayName,email,password,confirmPassword}=formFields;


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
      // setCurrentUser(user);
    }catch(error){
      if(error.message==='auth/email-already-in-use'){
        alert("Already signed up");
      }
      else alert(error.message)
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
        <form onSubmit={handleSubmit} className='sign-up-form'>
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
          <Link to='/'>
          <Button buttonText="Sign Up" buttonType="submit" buttonClass=""/>
          </Link>
         
        </form>
    </div>
  )
}

export default SignupForm