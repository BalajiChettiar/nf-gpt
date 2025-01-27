import React from 'react'

const VideoTitle = (props) => {
 const {title,overview} = props
  return (
    <div className="  absolute w- screen aspect-video pt-72 h-fit  bg-opacity-20 bg-gradient-to-r from black text-white ">
      <div className="text-5xl p-2 ml-10  font-bold ">{title}</div>
      <div className=" w-1/4 p-2 ml-10">{overview}</div>
      <button className="bg-red-500 text-white p-4 px-10  ml-10 hover:bg-opacity-60 rounded-md"> Play Now</button>
      <button className="bg-gray-500 text-white p-4  px-10 ml-2 hover:bg-opacity-60 rounded-md">More Info</button>
    </div>
    
  )
}

export default VideoTitle
