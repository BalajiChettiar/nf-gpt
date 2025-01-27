import React from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import useTrailer from '../hooks/useTrailer'

const VideoBackground = ({movieId}) => {
 const trailer=useSelector((store)=>store.movies.trailer)
 useTrailer(movieId)
  if (!trailer) return <div className=" -z-50 w-screen">Return Nothing </div>
  return (
    <div className=" -z-50 w-screen">
      <iframe className=" w-screen aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       
         src={"https://www.youtube.com/embed/"+trailer.key +"?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&showinfo=0&playsinline=1&mute=1"}
          >
         </iframe>
    </div>
  )
}

export default VideoBackground
