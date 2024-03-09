import React, { useEffect, useRef } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
 import {useNavigate} from "react-router-dom";  
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {  Logo_Netflix, SUPPORTED_LANGUAGEs } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
 import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const User= useSelector(store=> store.User);
  const Istruegpt= useSelector(store=> store.gpt.showGptSearch);
  const language=useRef();
  useEffect(()=>{
  const unsubsscrib=  onAuthStateChanged(auth, (User)=>{
        if(User){
             const {Uid, email, displayName, photoURL}=User;
             dispatch(addUser({Uid:Uid, email:email, displayName:displayName, photoURL:photoURL}));
             navigate("/browse");
        }else{
          dispatch(removeUser());
          navigate("/");
        }
    })
    return ()=> unsubsscrib();
  }, []);

  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
    }).catch((error)=>{
    })
  }
  
  const handleGptSearchClick=()=>{
         dispatch(toggleGptSearchView());
  } 
   const handleLanguageChange=()=>{
    //  console.log();
     dispatch(changeLanguage(language.current.value));
   }
   console.log(Istruegpt)
  return (
    <div className='px-8 py-2 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row '> 
       <img className='w-44 mx-auto md:mx-0' src={Logo_Netflix} alt='logo' />
           
      { User && <div className='flex p-2 justify-between'>
        {Istruegpt &&  <select className='p-2 m-2  bg-slate-300 text-black rounded-lg' ref={language}  onClick={handleLanguageChange}> 
              {SUPPORTED_LANGUAGEs.map((lang)=> <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
             </select> }
           <button className='py-2 px-3 bg-blue-700 text-white mx-4 my-2 rounded-lg hover:bg-yellow-400 hover:text-black 
           ' onClick={handleGptSearchClick}> { Istruegpt ? "Homepage" : "GPT SEARCH"}</button>
          <img className=' hidden md:block w-12 h-12 rounded-md' src={User.photoURL} />
         <button onClick={handleSignOut} className=' font-bold text-white hover:text-red-400'>(sign out)</button>
      </div>
      }
   
    </div>
    

  )
}

export default Header