import React, { useEffect }  from 'react';
import {useSelector } from "react-redux";
import { signOut } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from "../utils/configSlice"


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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


const handleGPTSearchClick  = () => {
  // toggle GPT Search 
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
        <img
        className='w-44 '        
         src={NETFLIX_LOGO} alt="logo"/>    
    
      {user && (<div className='flex p-2 cursor-poiter'>
        
      {showGptSearch && (
        <select className='m-2 p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map( (lang) => (
          <option key={lang.identifier} value={lang.identifier}> 
            {lang.name} 
          </option>))}
        </select>
      )}
        
        
        <button className='py-2 px-4 mx-4 my-2 text-white rounded-lg bg-slate-500' 
        onClick={handleGPTSearchClick}>
          {showGptSearch? "Homepage" : "GPT Search"}
        </button>
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