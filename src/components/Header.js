import React from 'react';
import {useSelector } from "react-redux";
import { signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const signOutUser = () => {

    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error.code + " : " +error.message);
      //navigate("/error"); // todo
    });

  }


  return (
    <div className='flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
        <img
        className='w-44 '        
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    
    
      {user && (<div className='flex p-2 cursor-pointer'>
        <img className='w-8 h-8 my-4'
          src = { user?.photoURL}
          alt="user-img"
        /> 
        <button className='px-4 text-white font-bold'
        onClick={signOutUser}
        >Sign Out</button>
      </div>)}
      

    </div>
  )
}

export default Header