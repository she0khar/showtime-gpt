import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies : null,
        topMovies : null,
        trailerVideo : null,
        upcomingMovies: null,
        
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopMovies : (state, action) => {
            state.topMovies =  action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        }
    }
})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopMovies,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;