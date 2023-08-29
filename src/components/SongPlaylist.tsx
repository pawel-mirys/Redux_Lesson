import { createRandomSong } from '../data';

import { addSong, removeSong, useAppDispatch, useAppSelector } from '../store';
import { Song } from '../types';

function SongPlaylist() {
  const dispatch = useAppDispatch();

  const songPlaylist: Song[] = useAppSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song: Song) => {
    dispatch(addSong(song));
  };

  const handleSongRemove = (song: Song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className='button bg-red-400  rounded p-2 text-white'>
          X
        </button>
      </li>
    );
  });

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle is-3'>Song Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className='button bg-blue-500  rounded p-2 text-white'>
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
