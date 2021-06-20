import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './assets/style/index.scss';
import Header from './components/Header'
import CurrentSong from './components/CurrentSong';
import SongList from './components/songlist/SongList'
import CurrentSongMobile from './components/CurrentSongMobile';
import { MyContext } from './context'
function AppLayout() {
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

  const { currentSong, songHandler } = useContext(MyContext);
  const audioRef = useRef();
    useEffect(() => {
      if(songHandler){audioRef.current.play();}
      else{audioRef.current.pause();}
    }, [songHandler,currentSong])
  return (
    <>
      <Header />
      <audio
        src={currentSong[0].address}
        ref={audioRef}></audio>
      {(width <= 778) ? <CurrentSongMobile /> : <CurrentSong />}
      {(width <= 778) ? null : <SongList />}
    </>
  );
}

export default AppLayout;
