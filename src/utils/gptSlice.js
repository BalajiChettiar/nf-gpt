import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearch:false,
        gptSuggestedMovies:null,
        gptSuggestedMoviesData:[]
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearch=!state.gptSearch
        },
        setGptSuggestedMovies:(state,action)=>{
            state.gptSuggestedMovies=action.payload
        },
        setGptSuggestedMoviesData:(state,action)=>{
            state.gptSuggestedMoviesData = action.payload
        }
    }
})
export const  {toggleGptSearch,setGptSuggestedMovies, setGptSuggestedMoviesData} = gptSlice.actions
export default gptSlice.reducer