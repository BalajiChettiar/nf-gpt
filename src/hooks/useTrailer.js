import React from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addTrailer } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useTrailer = (movieId) => {
    const dispatch=useDispatch()
     const getVideoClip=async()=>{
         const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS)
         const data = await response.json()
         const filter = data.results.filter((video)=>video.type=="Trailer")
         const video = filter.length ? filter[0] : data.results[0]
         dispatch(addTrailer(video))
      }
      useEffect(()=>{getVideoClip()},[])
}

export default useTrailer
