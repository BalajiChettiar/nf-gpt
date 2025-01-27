import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import { IMG_URL } from '../utils/constant'
import { useGPTSuggestedMovies } from '../hooks/useGPTSuggestedMovies'
import { setGptSuggestedMoviesData } from '../utils/gptSlice'
import { useDispatch } from 'react-redux'
import MovieList from './MovieList'

const GPTSuggestedMovies = ({movies}) => {
  
    const moviesData=useSelector((store)=>store.gpt.gptSuggestedMoviesData)
    
   if(!moviesData)return
   console.log(moviesData)
  return (
    <div className="bg-black m-5 mb-2 bg-opacity-80">
     {moviesData.map((movie,index)=><MovieList key={index} movies={movie.results} title={movie.results[0].original_title} ></MovieList>)}
    </div>
  )
}

export default GPTSuggestedMovies
