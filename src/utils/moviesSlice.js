import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
         name:"movies",
         initialState:{
            nowPlayingMovies:null,
            popularMovies:null,
            topRatedMovies:null,
            UpcomingMovies:null,
            nowPlayingTrailer:null
         },
         reducers:{
              addNowPlayingMovies:(state, action)=>{
                 state.nowPlayingMovies=action.payload;
              },
              addNowPopularMovies:(state, action)=>{
               state.popularMovies=action.payload;
            } ,
             addTopRatedMovies:(state, action)=>{
                  state.topRatedMovies=action.payload;
             },
             addUpcomingMovies:(state, action)=>{
               state.UpcomingMovies=action.payload;
          },
              addNowPlayingTrailer:(state, action)=>{
                 state.nowPlayingTrailer=action.payload;
              }
         }
}
)

export const {addNowPlayingMovies, addNowPopularMovies, addTopRatedMovies, addUpcomingMovies, addNowPlayingTrailer}=moviesSlice.actions;

export default moviesSlice.reducer;