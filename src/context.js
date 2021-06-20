import { createContext, useState } from "react";
import AllSongsList from './components/AllSongsList'
export const MyContext=createContext({
    currentSong:"",setCurrentSong:"",
    songsList:""
});

const Context = ({children}) => {
    const [songsList, setSongsList] = useState(AllSongsList());
    const [currentSong, setCurrentSong] = useState([{
        name:AllSongsList()[0].name,
        singer:AllSongsList()[0].singer,
        id:AllSongsList()[0].id,
        cover:AllSongsList()[0].cover,
        address:AllSongsList()[0].address
    }]);
    return ( 
    <MyContext.Provider value={{
        currentSong,setCurrentSong,
        songsList
        }}>
        {children}
    </MyContext.Provider>
     );

}
 
export default Context;