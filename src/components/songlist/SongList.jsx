import { useContext } from 'react';
import { MyContext } from '../../context';
import SongListItem from './SongListItem';
const SongList = () => {
    const {songsList} = useContext(MyContext)
    return (
            <div className="songList mt-2 d-flex">
                {songsList.map((item) => (
                    <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} id={item.id}/>
                ))}
            </div>

    );
}

export default SongList;