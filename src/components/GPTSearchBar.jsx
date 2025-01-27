import React from 'react'
import { useRef } from 'react'
import model from '../utils/geminiAPI'
import { useDispatch } from 'react-redux'
import { setGptSuggestedMovies,setGptSuggestedMoviesData } from '../utils/gptSlice'
import { API_OPTIONS,SEARCH_URL } from '../utils/constant'



const GPTSearchBar = () => {


  const fetchMovies = async(movie)=>{
    const response = await fetch(SEARCH_URL+movie,API_OPTIONS)
    const data = await response.json()
    return data
  }
   const searchQuery=useRef(null)
   const dispatch = useDispatch()
   const handleSearch = async()=>{
    console.log("Inside ")
    const prompt = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchQuery.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(prompt);
    const movies = result.response.text().split(',')
    dispatch(setGptSuggestedMovies(movies))
     const moviesData = await Promise.all(movies.map((movie)=>fetchMovies(movie)))
     dispatch(setGptSuggestedMoviesData(moviesData))
    
   }

  return (
    <div className=" pl-64 pr-64 pt-36">
      <form className= "grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchQuery}className="  bg-slate-300 rounded-md p-2 col-span-8 placeholder-red-800 placeholder-opacity-35 border-2 border-red-800 "type="text " placeholder="What are you looking for ?"></input>
        
        <button className="bg-red-800 p-3 ml-2 text-white font-bold col-span-3 px-4 rounded-md " onClick={handleSearch} >Search</button>
      </form>
      </div>
   
  )
}

export default GPTSearchBar
