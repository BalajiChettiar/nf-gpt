import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies=useSelector((store)=>{return store.movies})
   
  return (
    <div className="bg-black ">
         <div className="-mt-48 relative "><MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
         <MovieList title={"Trending"} movies={movies.popularMovies}></MovieList>
         <MovieList title={"Top Picks"} movies={movies.topRatedMovies}></MovieList>
         <MovieList title={"Best of Best"} movies={movies.upcomingMovies}></MovieList></div>
    </div>
  )
}

export default SecondaryContainer
