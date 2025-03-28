 import process from "process";
 export const profile_avatar="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
 export const Netflix_LOGO = "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
 export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY
    }
  };
  export  const IMG_URL="https://image.tmdb.org/t/p/w500/"
export const NowPlayingListURL="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
export const PopularListURL='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const TopRatedURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const UpcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const BG_URL ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAUbrefHHNBW2c_yPuK9XDpKBmaZlFpa5axiQoxZWr46MU4dW0f_stlvJOvOYp1GGow0EgfTUnOlMkFx71cgLpHzdbwZQ4HGzQP-vrljLrWtJgFeiX-EN71BliGBscxe6dMciy0HhYB3M8/s2000/neflixtv.jpg"
export const SEARCH_URL="https://api.themoviedb.org/3/search/movie?query="
 const GEMINI_API_KEY=process.env.REACT_APP_GEMINI_API_KEY
 export default GEMINI_API_KEY