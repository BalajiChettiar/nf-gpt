
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { API_OPTIONS,NowPlayingListURL,PopularListURL,TopRatedURL,UpcomingURL } from '../utils/constant'

import { addPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies } from '../utils/moviesSlice'


const useMovies=()=>{
    const dispatch=useDispatch()
   const getMovies=async(URL,addToStore)=>{ 
     const response=await fetch(URL,API_OPTIONS)
    const movieList=await response.json();
   
    dispatch(addToStore(movieList.results))}
    useEffect(()=>{
        getMovies(NowPlayingListURL,addPlayingMovies)
        getMovies(PopularListURL,addPopularMovies)
        getMovies(TopRatedURL,addTopRatedMovies)
        getMovies(UpcomingURL,addUpcomingMovies)
    },[])
  
  }
  export default useMovies