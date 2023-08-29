import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';
import { initialSongState } from '../../types';



 const SongsSlice = createSlice({
  name: 'song',
  initialState: <initialSongState>[],
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<string>) {
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

export const { addSong, removeSong } = SongsSlice.actions;
export const songsReducer = SongsSlice.reducer;
