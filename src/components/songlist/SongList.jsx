import { useContext } from 'react';
import { MyContext } from '../../context';
import SongListItem from './SongListItem';
const SongList = () => {
    const { songsList } = useContext(MyContext)
    return (

        <div className="row no-gutters">
            <div className="col-7 col-xl-9 offset-5 offset-xl-3">
                <div className="songList mt-2 ml-2 d-flex">
                    {songsList.map((item) => (
                        <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} id={item.id} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default SongList;