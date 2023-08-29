import './App.css';
import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { reset, useAppDispatch } from './store';




function App() {
  const dispatch = useAppDispatch();
  const handleResetClick = () => {
    dispatch(reset());
   
  };

  return (
    <>
      <div className='container is-fluid'>
        <button
          onClick={() => handleResetClick()}
          className='button button bg-red-400  rounded p-4 text-white'>
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    </>
  );
}

export default App;
