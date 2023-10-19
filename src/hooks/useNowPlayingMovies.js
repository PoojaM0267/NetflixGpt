import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { NOW_PLAYING_MOVIES_URL } from "../utils/constants";



const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS)
      
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results));
  
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;


