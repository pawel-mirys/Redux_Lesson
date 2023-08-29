import { createRandomMovie } from '../data';
import { addMovie, removeMovie, useAppDispatch, useAppSelector } from '../store';
import { Movie, MoviesState } from '../types';

function MoviePlaylist() {
  const dispatch = useAppDispatch();
  const moviePlaylist: MoviesState = useAppSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie: Movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: Movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className='button bg-red-400  rounded p-2 text-white'>
          X
        </button>
      </li>
    );
  });

  return (
    <div className='content'>
      <div className='table-header'>
        <h3 className='subtitle is-3'>Movie Playlist</h3>
        <div className='buttons'>
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className='button bg-blue-500  rounded p-2 text-white'>
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
