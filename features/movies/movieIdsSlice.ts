import { createSlice } from "@reduxjs/toolkit";

const movieIdsSlice = createSlice({
  name: 'movieIds',
  initialState: [],
  reducers: {
    addMovieIds: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMovieIds } = movieIdsSlice.actions;

export default movieIdsSlice.reducer;
