import SongListItem from './SongListItem';
import AllMusicList from './../AllSongsList';
const SongList = () => {
    return (
        // (width <= 778) ?
        //     <ScrollContainer className="songList mt-2 d-flex">
        //         {AllMusicList().map((item) => (
        //             <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} />
        //         ))}
        //     </ScrollContainer>
        //     :
            <div className="songList mt-2 d-flex">
                {AllMusicList().map((item) => (
                    <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} />
                ))}
            </div>

    );
}

export default SongList;