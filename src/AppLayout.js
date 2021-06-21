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

  const { currentSong, setCurrentSong, songHandler, songsList, setCurrentTime, setFullTime } = useContext(MyContext);
  const audioRef = useRef();
  useEffect(() => {
    if (songHandler) { audioRef.current.play(); }
    else { audioRef.current.pause(); }

    setInterval(() =>{
      setCurrentTime(audioRef.current.currentTime);
      setFullTime(audioRef.current.duration);
    }, 1000);
 
  }, [songHandler, currentSong]);
  function time(t) {
    return Math.floor(t/60) +":"+ ("0"+Math.floor(t%60)).slice(-2);
  }
  const currentIndex = songsList.findIndex((item) => item.id === currentSong[0].id);
  function goNext() {
    if (currentIndex == songsList.length - 1) {
      setCurrentSong([songsList[0]]);
    } else { setCurrentSong([songsList[currentIndex + 1]]); }
  }
  function goBack() {
    if (currentIndex == 0) {
      setCurrentSong([songsList[songsList.length - 1]]);
    } else { setCurrentSong([songsList[currentIndex - 1]]); }
  }
  return (
    <>
      <Header />
      <audio
        src={currentSong[0].address}
        ref={audioRef}
        onEnded={goNext}></audio>
      {(width <= 778) ? <CurrentSongMobile audioRef={audioRef} goNext={goNext} goBack={goBack} time={time} /> : <CurrentSong audioRef={audioRef} goNext={goNext} goBack={goBack} time={time}/>}
      {(width <= 778) ? null : <SongList />}
    </>
  );
}

export default AppLayout;
