import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/6f4a54e8-cd9d-47fd-a89b-4a8041b7bb23/CA-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
        </div>

        <form className='absolute p-12 bg-[#000000] w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 classname="text-3xl font-bold py-4 "> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-transparent border border-white border-1' /> }
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-transparent border border-white border-1' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-transparent border border-white border-1' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> {isSignInForm ? "Sign In" : "Sign Up"} </button>
        
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix?  Sign up Now" : "Already registered? Sign In Now."}
              </p>
        </form>



    </div>
  )
}

export default Login