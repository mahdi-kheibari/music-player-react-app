import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { MyContext } from '../../context';
import SongListItem from './SongListItem';
const SongList = () => {
    const { songsList, favList } = useContext(MyContext)
    return (

        <div className="row no-gutters">
            <div className="col-7 col-xl-9 offset-5 offset-xl-3">
                <div className="songList mt-2 ml-2 d-flex">
                    <Switch>
                        <Route path="/music-player-react-app" exact>
                            {songsList.map((item) => (
                                <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} id={item.id} />
                            ))}
                        </Route>
                        <Route path="/music-player-react-app/fav">
                            {favList.map((item) => (
                                <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} id={item.id} />
                            ))}
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>

    );
}

export default SongList;