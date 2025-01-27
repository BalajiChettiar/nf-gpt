import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from '../components/VideoBackground'
import VideoTitle from "../components/VideoTitle"
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
    const movies=useSelector((store)=>
        { return store.movies?.nowPlayingMovies}
    )
    if(!movies) return <div className="text-red-700">Not Rendered</div>;
    const mainMovie=movies[2]
    const {original_title,overview} = mainMovie
    
  return (
    <div className="pt-[30%] bg-black md:pt-0" >
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground movieId={mainMovie.id}></VideoBackground>
      
    </div>
  )
}

export default MainContainer
