import { v4 as uuidv4 } from 'uuid';
import Hope_C from './../assets/musics/Hope.jpg';
import Hope from './../assets/musics/Hope.mp3';
import Sunset_C from './../assets/musics/Sunset.jpg';
import Sunset from './../assets/musics/Sunset.mp3';
import Saeng_You_C from './../assets/musics/Saeng_You.jpg';
import Saeng_You from './../assets/musics/Saeng_You.mp3';
import You_C from './../assets/musics/You.jpg';
import You from './../assets/musics/You.mp3';
import Ocean_Blue_C from './../assets/musics/Ocean_Blue.jpg';
import Ocean_Blue from './../assets/musics/Ocean_Blue.mp3';
import Distraction_C from './../assets/musics/Distraction.jpg';
import Distraction from './../assets/musics/Distraction.mp3';
import Secret_to_Happiness_C from './../assets/musics/Secret_to_Happiness.jpg';
import Secret_to_Happiness from './../assets/musics/Secret_to_Happiness.mp3';
import Hey_C from './../assets/musics/Hey.jpg';
import Hey from './../assets/musics/Hey.mp3';
export default function AllMusicList() {
    return [
        {
            name:"Hope",
            singer:"Mark Eliyahu",
            id:uuidv4(),
            cover:Hope_C,
            address:Hope,
            favorite:false
        }
        ,
        {

            name:"Sunset",
            singer:"Waimis",
            id:uuidv4(),
            cover:Sunset_C,
            address:Sunset,
            favorite:false
        }
        ,
        {
            name:"Saeng You",
            singer:"DayFox",
            id:uuidv4(),
            cover:Saeng_You_C,
            address:Saeng_You,
            favorite:false
        }
        ,
        {
            name:"You",
            singer:"Approaching Nirvana",
            id:uuidv4(),
            cover:You_C,
            address:You,
            favorite:false
        }
        ,
        {
            name:"Ocean Blue",
            singer:"InRp",
            id:uuidv4(),
            cover:Ocean_Blue_C,
            address:Ocean_Blue,
            favorite:false
        }
        ,
        {
            name:"Distraction",
            singer:"Hossein Khezri",
            id:uuidv4(),
            cover:Distraction_C,
            address:Distraction,
            favorite:false
        }
        ,
        {
            name:"Secret to Happiness",
            singer:"Jayjen",
            id:uuidv4(),
            cover:Secret_to_Happiness_C,
            address:Secret_to_Happiness,
            favorite:false
        }
        ,
        {
            name:"Hey",
            singer:"Various Artists",
            id:uuidv4(),
            cover:Hey_C,
            address:Hey,
            favorite:false
        }
    ]
};