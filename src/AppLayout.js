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
  const { currentSong, setCurrentSong, songHandler, songsList,setSongsList, setCurrentTime, setFullTime, favList, setFavList, } = useContext(MyContext);
  
  // start set to fav
  function setToFav() {
    let newList=songsList.map((item)=>{
      if(item.id == currentSong[0].id){
        return {
          ...item,
          favorite:!item.favorite
        }
      }else{
          return{
            ...item
          }
      }
    });
    setSongsList(newList);
    currentSong[0].favorite = !currentSong[0].favorite;
  }
  // end set to fav
  useEffect(() => {
    const favorite=songsList.filter((item)=>item.favorite===true);
    setFavList(favorite);
    console.log(favList);
    console.log(favorite);
  }, [songsList])

  const audioRef = useRef();

  useEffect(() => {
    if (songHandler) { audioRef.current.play(); }
    else { audioRef.current.pause(); }

    setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
      setFullTime(audioRef.current.duration);
    }, 1000);
  }, [songHandler, currentSong]);

  function time(t) {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
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
      {(width <= 778) ? 
      <CurrentSongMobile audioRef={audioRef} goNext={goNext} goBack={goBack} time={time} 
      width={width} setToFav={setToFav}/> 
      : 
      <CurrentSong audioRef={audioRef} goNext={goNext} goBack={goBack}
      time={time} setToFav={setToFav}/>
      }
      {(width <= 778) ? null : <SongList />}
    </>
  );
}

export default AppLayout;
