import React from 'react'

const MovieCard = ({img_url}) => {
if(img_url==null) return<div></div>
  return (
    
          <img className="w-48 pl-3 md:w-48 pr-4 "src={img_url}></img>
   
  )
}

export default MovieCard
