import { v4 as uuidv4 } from 'uuid';
import Hope_C from './../assets/musics/Hope.jpg';
import Hope from './../assets/musics/Hope.mp3';
import Sunset_C from './../assets/musics/Sunset.jpg';
import Sunset from './../assets/musics/Sunset.mp3';
import SaengYou_C from './../assets/musics/Saeng You.jpg';
import SaengYou from './../assets/musics/Saeng You.mp3';
import You_C from './../assets/musics/You.jpg';
import You from './../assets/musics/You.mp3';
import OceanBlue_C from './../assets/musics/Ocean Blue.jpg';
import OceanBlue from './../assets/musics/Ocean Blue.mp3';
import Distraction_C from './../assets/musics/Distraction.jpg';
import Distraction from './../assets/musics/Distraction.mp3';
import SecretToHappiness_C from './../assets/musics/Secret to Happiness.jpg';
import SecretToHappiness from './../assets/musics/Secret to Happiness.mp3';
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
            cover:SaengYou_C,
            address:SaengYou,
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
            cover:OceanBlue_C,
            address:OceanBlue,
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
            cover:SecretToHappiness_C,
            address:SecretToHappiness,
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