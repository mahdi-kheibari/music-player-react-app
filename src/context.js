import { createContext, useState } from "react";
import AllSongsList from './components/AllSongsList'
export const MyContext=createContext({
    currentSong:"",setCurrentSong:"",
    songsList:"",setSongsList:"",
    songHandler:"",setSongHandler:"",
    currentTime:"",setCurrentTime:"",
    fullTime:"",setFullTime:"",
    favList:"", setFavList:""
});

const Context = ({children}) => {
    const [songsList, setSongsList] = useState(AllSongsList());
    const [currentSong, setCurrentSong] = useState([{
        name:songsList[0].name,
        singer:songsList[0].singer,
        id:songsList[0].id,
        cover:songsList[0].cover,
        address:"https://dl.songsara.net/FRE/2021/2/Mark%20Eliyahu%20-%20Hope%20(2021)%20SONGSARA.NET.mp3",
        favorite:songsList[0].favorite
    }]);
    const [songHandler, setSongHandler] = useState(false);
    const [currentTime, setCurrentTime] = useState();
    const [fullTime, setFullTime] = useState();
    const [favList, setFavList] = useState();
    return ( 
    <MyContext.Provider value={{
        currentSong,setCurrentSong,
        songsList,setSongsList,
        songHandler,setSongHandler,
        currentTime,setCurrentTime,
        fullTime,setFullTime,
        favList, setFavList
        }}>
        {children}
    </MyContext.Provider>
     );

}
 
export default Context;