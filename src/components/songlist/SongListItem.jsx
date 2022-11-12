import { MyContext } from "./../../context";
import { useContext } from 'react';
import { Card } from "react-bootstrap";
import { Route, Switch } from "react-router";
const SongListItem = ({ name, cover, singer, id }) => {
    const { setCurrentSong, songsList, setCurrentSongFav, favList } = useContext(MyContext);

    const updateCurrent = () => {
        let currentInfo = songsList.filter((item) => item.id === id);
        setCurrentSong(currentInfo);

    };
    const updateCurrentFav = () => {
        let favCurrentInfo = favList.filter((item) => item.id === id);
        setCurrentSongFav(favCurrentInfo);
    };

    return (
        <Switch>
            <Route path="/music-player-web-app" exact>
                <div className="songItem mx-3 mb-1" onClick={updateCurrent}>
                    <Card className="songItem_box">
                        <Card.Img className="songItem_box-img w-auto m-2" src={cover} />
                        <Card.Body className="p-1 text-center">
                            <Card.Title className="mb-0">{name}</Card.Title>
                            <Card.Text>{singer}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Route>
            <Route path="/music-player-web-app/fav">
                <div className="songItem mx-3 mb-1" onClick={updateCurrentFav}>
                    <Card className="songItem_box">
                        <Card.Img className="songItem_box-img w-auto m-2" src={cover} />
                        <Card.Body className="p-1 text-center">
                            <Card.Title className="mb-0">{name}</Card.Title>
                            <Card.Text>{singer}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Route>
        </Switch>

    );
}

export default SongListItem;