import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})
export const {addPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions
export default moviesSlice.reducer