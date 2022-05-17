import { createSlice } from "@reduxjs/toolkit";

import { IMovie } from "../../utils/types";

const initialState: IMovie[] = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      return action.payload;
    },
    addMovie: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export const { addMovies, addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
