import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './assets/style/index.scss';
import Header from './components/Header'
import CurrentSong from './components/CurrentSong';
import SongList from './components/songlist/SongList'
import { MyContext } from './context'
import { Route, Switch, withRouter } from 'react-router';
import CurrentSongFav from './components/CurrentSongFav';
import { FaSadTear } from 'react-icons/fa';
function AppLayout() {
  function useWindowSize() {
    const [size, setSize] = useState([0]);
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

  const { currentSong,setCurrentSong, currentSongFav, songsList, setSongsList, favList, setFavList, setCurrentSongFav } = useContext(MyContext);

  // start set to fav
  function setToFav() {
    let newList = songsList.map((item) => {
      if (item.id === currentSong[0].id) {
        return {
          ...item,
          favorite: !item.favorite
        }
      } else {
        return {
          ...item
        }
      }
    });
    setSongsList(newList);
    currentSong[0].favorite = !currentSong[0].favorite;
  }
  // end set to fav
  useEffect(() => {
    const favorite = songsList.filter((item) => item.favorite === true);
    setFavList(favorite);
  }, [songsList])// eslint-disable-line react-hooks/exhaustive-deps

  function time(t) {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  }
  useEffect(() => {
    if (favList[0] !== undefined) {
      setCurrentSongFav([{
        name: favList[0].name,
        singer: favList[0].singer,
        id: favList[0].id,
        cover: favList[0].cover,
        address: favList[0].address,
        favorite: favList[0].favorite
      }])
    } else {
      setCurrentSongFav([]);
    }
  }, [favList])// eslint-disable-line react-hooks/exhaustive-deps

  const audioRef = useRef();
  function goNext() {
    const currentIndex = songsList.findIndex((item) => item.id === currentSong[0].id); 
    if (currentIndex === songsList.length - 1) {
      setCurrentSong([songsList[0]]);
    } else { setCurrentSong([songsList[currentIndex + 1]]); }
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <audio
            src={currentSong[0].address}
            ref={audioRef}
            onEnded={goNext}
          >
          </audio>
          <CurrentSong time={time} setToFav={setToFav}
            width={width} audioRef={audioRef} goNext={goNext}
          />
        </Route>
        <Route path="/fav" exact>

          {(currentSongFav[0] !== undefined) ?
            <CurrentSongFav time={time} setToFav={setToFav}
              width={width} audioRef={audioRef}
            />
            :
            <h1 className="fav_message text-center mt-3">
              There is no favorite song
              <FaSadTear size="2rem" className="emoji" />
            </h1>
          }
        </Route>
      </Switch>
      {(width <= 778) ? null : <SongList />}
    </>
  );
}

export default withRouter(AppLayout);
