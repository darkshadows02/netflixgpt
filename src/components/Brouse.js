import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

function Brouse() {
     const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
    console.log("suraj", showGptSearch);
  return (
    <div> 
       <Header />
      {
        showGptSearch ?  <GptSearch />  : <>{console.log("sk")}   <MainContainer/> <SecondaryContainer/></>
      }
    
    
     
    </div>
  )
}

export default Brouse