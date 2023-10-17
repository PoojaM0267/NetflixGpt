import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%]  px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold text-white'>
            {title}
        </h1>
        <p className='py-6 text-lg w-1/4 text-white' >
            {overview}
        </p>

        <div className=''>
            <button className='bg-white rounded-lg text-black p-4  px-16 text-xl hover: bg-opacity-80'>
                ▶️ Play
            </button>

            <button className='mx-2 bg-gray-500 bg-opacity-50 rounded-lg text-white p-4  px-16 text-xl'>
                More Info
            </button>
        </div>



    </div>
  )
}

export default VideoTitle