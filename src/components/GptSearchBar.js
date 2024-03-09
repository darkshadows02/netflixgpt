import React, { useRef } from 'react'
import  lang  from '../utils/languageConstants.js';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai.js';
import { API_OPTIONS } from '../utils/constants.js';
import { addGPTMoviesResults } from '../utils/gptSlice.js';

 

const GptSearchBar = () => {
     const languagekey=useSelector((store)=> store.config.lang);
      const SearchText=useRef(null);
      const dispatch=useDispatch();
   
     const searchMoviesTMDB= async(movie)=>{
            const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
            +movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
            const json= await data.json();
            return json.results;
      }
  const handleGPTSearchClick= async()=>{
          console.log(SearchText.current.value);
           const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query"
              + SearchText.current.value + 
              ". only give me names of 5 movies , comma seperated like the example result given ahade. Example Result: Gardar, Goolmal,Sholay, Koi Mil Gaya, Don ";

         const gptResults=await openai.chat.completions.create({
          messages: [{ role: 'user', content:gptQuery}],
          model: 'gpt-3.5-turbo',
        });

      console.log(gptResults.choices?.[0]?.message?.content);
     const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray=gptMovies.map((movie)=>searchMoviesTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGPTMoviesResults({movieNames:gptMovies, movieResults:tmdbResults}));
  }

  return (
    <div className='pt-[45%] md:pt-[12%] flex justify-center'> 
         <form className=' w-full md:w-1/2  bg-black grid grid-cols-12 rounded-lg ' onSubmit={(e)=>e.preventDefault()}> 

    <input type='text' className='p-4 m-4  col-span-9 rounded-lg bg-gray-200 '
          ref={SearchText}  
     placeholder={lang[languagekey].gptSearchPlaceholder} />
            <button className='col-span-3 my-4 mx-2 py-2 px-4 bg-red-800 text-white rounded-lg '
            onClick={handleGPTSearchClick}>
            {lang[languagekey].search}</button>
         </form>
    </div>
  )
}

export default GptSearchBar