import React from 'react'
import Header from './Header';
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();


  return (
    <div>
      <Header />
     

      {/* 
      Main Container
        - Video BG
        - Video Title

      Secondary Container
        - Movie List * n
        - Card * n      
      */}


      {
        showGptSearch ? (<GptSearch />) : 
        (<React.Fragment>
          <MainContainer />
          <SecondaryContainer />
        </React.Fragment>)

      }

      


     

    </div>
  )
}

export default Browse