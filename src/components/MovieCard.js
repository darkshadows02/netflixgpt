import React from 'react'
import { IMD_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
        if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 px-2 hover:scale-110 hover:transition duration-300 ease-in-out'> 
       <img alt="movies card" src={IMD_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard