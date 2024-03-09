import React, { useEffect, useState } from 'react';
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
        useMoviesTrailer(movieId);
        const trailerkey=useSelector(trailer=> trailer?.movies?.nowPlayingTrailer);
        // console.log("suraj");
  return (
    <div className=' w-screen '> 
        <iframe className=' w-screen  aspect-video'   src={"https://www.youtube.com/embed/"+trailerkey?.key+"?autoplay=1&mute=1"} 
         title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground