import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidSignInForm, checkValidSignUpForm} from '../utils/validate'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // useRef Hook - used to reference some form element
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSubmitClick = () => {

    // validate the form data
    if(!isSignInForm){      
      const message = checkValidSignUpForm(name.current.value, email.current.value, password.current.value);
      setErrorMessage(message);
      if(message) return;

      // create new user      
        createNewUser(email.current.value, password.current.value, name.current.value);
        
    }
    else{
      const message = checkValidSignInForm(email.current.value, password.current.value);
      setErrorMessage(message);
      if(message) return;

      loginUser(email.current.value, password.current.value);

    }
  }

  const createNewUser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // Update User's name
      updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVATAR
      }).then(() => {
        // Profile updated!
        console.log("User Profile name updated!");
        const {uid, email,displayName, photoURL } = auth.currentUser;              
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));

      }).catch((error) => {
        handleAuthError(error);
      });

    })
    .catch((error) => {
      handleAuthError(error);
    });

  }

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      handleAuthError(error);
    })
  }

  const handleAuthError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " : " +errorMessage);
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BG_URL} alt="logo"/>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-[#000000] w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className="text-3xl font-bold py-4 "> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-transparent border border-white border-1' /> }
            
            <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-transparent border border-white border-1' />
            
            <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-transparent border border-white border-1' />
            
            <p className='text-red-700 p-2'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleSubmitClick}> 
              {isSignInForm ? "Sign In" : "Sign Up"} 
            </button>        
           
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix?  Sign up Now" : "Already registered? Sign In Now."}
              </p>
        </form>



    </div>
  )
}

export default Login