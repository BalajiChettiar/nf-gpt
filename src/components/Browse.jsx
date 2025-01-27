import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS,NowPlayingListURL,PopularListURL,TopRatedURL,UpcomingURL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies } from '../utils/moviesSlice'
import useMovies from '../hooks/useMovies'
import MainContainer from "../components/MainContainer"
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import GPTSearch from './GPTSearch'
const Browse = () => {
  const gptSearch=useSelector((store)=>store.gpt.gptSearch)
  useMovies()

  return (gptSearch ? <GPTSearch></GPTSearch>:(<>
    <div className="  w-screen bg-gradient-to-b from-black" >
     <Header></Header>
     <MainContainer></MainContainer>
    </div>
    <SecondaryContainer></SecondaryContainer></>)
  )
}

export default Browse
