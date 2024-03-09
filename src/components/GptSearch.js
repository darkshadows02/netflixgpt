import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions'
import { IMG_URL_BC } from '../utils/constants';

const GptSearch = () => {
  return (
   <> 
    <div className=' fixed -z-10'>
            <img className=' h-screen object-cover md:w-screen' src={IMG_URL_BC} alt='image' />
   </div>
    <div className=''> 
    
    <GptSearchBar/>
    <GptMovieSuggestions />
    
    </div>
    </>
  )
}

export default GptSearch