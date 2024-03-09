import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector((store)=> store.movies?.nowPlayingMovies);
    console.log("suraj", movies);
       if(movies==null) return ;
       const minMovies=movies[0];
      //  console.log(minMovies);
       const {title, overview, id}=minMovies;
       
  return (
    <div className=' pt-[30%] bg-black md:p-0'> 
       <VideoTitle title={title} overview={overview} />
       <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer