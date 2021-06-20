import { useEffect, useLayoutEffect, useState } from 'react';
import './assets/style/index.scss';
import Header from './components/Header'
import CurrentSong from './components/CurrentSong';
import SongList from './components/songlist/SongList'
import CurrentSongMobile from './components/CurrentSongMobile';
import Context from './context'
function App() {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
    const [width] = useWindowSize();
  return (
    <Context>
    <Header/>
    {(width<=778) ? <CurrentSongMobile/>:<CurrentSong/>}
    {(width<=778) ?null:<SongList/>}
    </Context>
  );
}

export default App;
