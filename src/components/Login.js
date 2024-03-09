import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValiddata} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
 import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { IMG_URL_BC, photo_url } from '../utils/constants';

const Login = () => {
       const [isSignInForm, setisSignInForm]=useState(true);
       const[errormassage, seterrormassage]=useState(null);

        const email=useRef(null);
        const password=useRef(null);
        const name=useRef(null);

        const dispatch=useDispatch();
      
    const handleButtonclick=()=>{
       const message= checkValiddata(email.current.value, password.current.value);
          seterrormassage(message);
        //if massage is dispalying somting is violated
          if(message) return;
          
          if(!isSignInForm){
              //sign up
              createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredebtial)=>{
                 const User=userCredebtial.user;
                  
                  updateProfile(User, {
                      displayName: name.current.value,
                      photoURL:photo_url
                  }).then(()=>{
                    const {Uid, email, displayName, photoURL}=auth.currentUser;
                    dispatch(addUser({Uid:Uid, email:email, displayName:displayName, photoURL:photoURL}));
                  }).catch((error)=>{
                    seterrormassage(error.message);
                  })
              })
              .catch((error)=>{
                   seterrormassage("Email is alrady used");
              })
             
          }else{
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredebtial)=>{
               const user=userCredebtial.user;
            })
            .catch((error)=>{
                 seterrormassage("Email and Password are not valid");
            })
          }
          
    }


    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm);
    }

  return (
    <div>
         <Header />
         <div className='absolute'>
            <img className=' h-screen object-cover md:w-screen md:object-cover' src={IMG_URL_BC} alt='image' />
         </div>
         <from onSubmit={(e)=> e.preventDefault()} className=" w-full md:w-3/12  absolute p-12 bg-black  my-24 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80">
             
              <h1 className='font-bold text-3xl py-4' >{isSignInForm ? "Sign in" :"Sign Up"}</h1>
           
              {!isSignInForm && 
                <input type='text' ref={name} placeholder='Name' className='px-4 py-3 my-4 w-full  bg-slate-700 rounded-lg' />}

            <input type='text'  ref={email} placeholder='Email or phone Number' className='px-4 py-3 my-4 w-full  bg-slate-700 rounded-lg' />
           
           
            <input type='password'  ref={password} placeholder='Password' className='px-4 py-3 my-4 w-full  bg-slate-700 rounded-lg' />
           
             <p className=' text-red-800 text-lg font-bold'>{errormassage}</p>
            <button className='px-4 py-3 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonclick}>{isSignInForm ? "Sign in" :"Sign Up"}</button>
            
            <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now" :"New to Netflix?Sign In Now" } </p>
         </from>
    </div>
  )
}

export default Login