import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen  aspect-video  pt-[15%] px-6 md:px-24 absolute text-white  bg-gradient-to-r from-black'> 
        <h1 className=' font-bold text-4xl md:text-6xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-slate-100 text-black py-2 md:py-4 px-4 my-4 md:my-0 md:px-12 rounded-md font-bold text-lg  hover:opacity-70 '> ▶️ Play </button>
            <button className='hidden md:inline-block mx-2 bg-slate-600 text-white p-4 px-12 rounded-md font-bold text-lg  '> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle