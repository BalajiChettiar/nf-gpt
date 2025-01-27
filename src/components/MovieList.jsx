import React from 'react'
import MovieCard from './MovieCard'
import{IMG_URL} from '../utils/constant'

const MovieList = ({movies,title}) => {
    if(!movies) return 
  return (
    <div className="p-2 pl-10 z-50" >
        <div className="font-bold text-3xl pt-4 p-3 text-white ">{title}</div>
      
      <div className='flex overflow-x-scroll scrollbar-hide '>{movies.map((movie)=>{if(movie.poster_path) return <MovieCard key={movie.id} img_url={IMG_URL+movie.poster_path}></MovieCard>})}</div>
    </div>
  )
}

export default MovieList
