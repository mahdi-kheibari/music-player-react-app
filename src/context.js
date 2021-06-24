import { createContext, useState } from "react";
import AllSongsList from './components/AllSongsList'
export const MyContext = createContext({
    currentSong: "", setCurrentSong: "",
    songsList: "", setSongsList: "",
    songHandler: "", setSongHandler: "",
    currentTime: "", setCurrentTime: "",
    fullTime: "", setFullTime: "",
    favList: "", setFavList: "",
    currentSongFav: "", setCurrentSongFav: "",
    songHandlerFav:"", setSongHandlerFav:""

});

const Context = ({ children }) => {
    const [songsList, setSongsList] = useState(AllSongsList());
    const [currentSong, setCurrentSong] = useState([{
        name: songsList[0].name,
        singer: songsList[0].singer,
        id: songsList[0].id,
        cover: songsList[0].cover,
        address: songsList[0].address,
        favorite: songsList[0].favorite
    }]);
    const [songHandler, setSongHandler] = useState(false);
    const [currentTime, setCurrentTime] = useState();
    const [fullTime, setFullTime] = useState();
    const [favList, setFavList] = useState([]);
    const [currentSongFav, setCurrentSongFav] = useState([]);
    const [songHandlerFav, setSongHandlerFav] = useState(false)
    return (
        <MyContext.Provider value={{
            currentSong, setCurrentSong,
            songsList, setSongsList,
            songHandler, setSongHandler,
            currentTime, setCurrentTime,
            fullTime, setFullTime,
            favList, setFavList,
            currentSongFav, setCurrentSongFav,
            songHandlerFav, setSongHandlerFav
        }}>
            {children}
        </MyContext.Provider>
    );

}

export default Context;