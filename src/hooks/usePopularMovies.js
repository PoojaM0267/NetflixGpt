import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { POPULAR_MOVIES_URL } from "../utils/constants";



const usePopularMovies = async () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS)
      
      const json = await data.json();
      console.log(json);
      dispatch(addPopularMovies(json.results));
  
    }
  
    useEffect(() => {
        getPopularMovies();
    },[])
}

export default usePopularMovies;


