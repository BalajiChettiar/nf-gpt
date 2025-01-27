import {SEARCH_URL,API_OPTIONS} from "../utils/constant"
import { useDispatch } from "react-redux"
import { setGptSuggestedMoviesData } from "../utils/gptSlice"


async function  fetchData(movie){
const response = await fetch(SEARCH_URL+movie,API_OPTIONS)
const data = await response.json()
return data.results[0]
}

export const useGPTSuggestedMovies=async(movies)=>{

 const array =[]
await movies.map(async (movie)=>{
     const data = await fetchData(movie)
     console.log(data)
     array.push(data)
 })
 return array
}