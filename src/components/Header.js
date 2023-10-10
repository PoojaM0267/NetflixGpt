import React, { useEffect }  from 'react';
import {useSelector } from "react-redux";
import { signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const signOutUser = () => {

    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error.code + " : " +error.message);
      //navigate("/error"); // todo
    });

  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid, email,displayName, photoURL }= user;              
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

      // this callback method will be called when component unmounts
      // unscribe this event
      return () => unsubscribe();
}, []);





  return (
    <div className='flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
        <img
        className='w-44 '        
         src={NETFLIX_LOGO} alt="logo"/>
    
    
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