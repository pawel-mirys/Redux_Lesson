import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';
import { initialMovieState } from '../../types';



 const MoviesSlice = createSlice({
  name: 'movie',
  initialState: <initialMovieState>[],
  reducers: {
    addMovie(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = MoviesSlice.actions;
export const moviesReducer = MoviesSlice.reducer