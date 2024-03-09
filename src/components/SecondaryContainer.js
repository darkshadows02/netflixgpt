import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";
const SecondaryContainer = () => {
     const movies=useSelector((store)=>store.movies);
      //  console.log(movies.nowPlayingMovies);
  return movies.nowPlayingMovies && (
    <div className=' bg-black'> 
         <div className='  mt-0 md:-mt-44 pl-2 md:pl-12 relative z-20'> 
         <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
         <MovieList title={"Now popular"} movies={movies.popularMovies}/>
         <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
         <MovieList title={"Upcoming"} movies={movies.UpcomingMovies}/>
         <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
         </div>
    </div>
  )
}

export default SecondaryContainer