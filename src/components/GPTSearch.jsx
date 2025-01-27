import React from 'react'
import Header from './Header'
import GPTSearchBar from './GPTSearchBar'
import {BG_URL} from '../utils/constant'
import GPTSuggestedMovies from './GPTSuggestedMovies'
import { useSelector } from 'react-redux'

const GPTSearch = () => {
  const movies = useSelector((store)=>store.gpt.gptSuggestedMovies)
  
  return (
    <div>
      <div className=" fixed -z-10">
        <img src={BG_URL}></img>
      </div>
        <Header></Header>
        <GPTSearchBar></GPTSearchBar>
        {movies && <GPTSuggestedMovies></GPTSuggestedMovies>}
      
    </div>
  )
}

export default GPTSearch
