import './assets/style/index.scss';
import Header from './components/Header'
import CurrentSong from './components/CurrentSong';
import SongList from './components/songlist/SongList'
function App() {
  return (
    <>
    <Header/>
    <CurrentSong/>
    <SongList/>
    </>
  );
}

export default App;
