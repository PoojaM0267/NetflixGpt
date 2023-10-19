import React from 'react';
import  { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt="Movie card" 

        src={IMAGE_CDN + posterPath} 
        />
    </div>
  )
}

export default MovieCard