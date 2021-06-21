import { MyContext } from "./../../context";
import { useContext } from 'react';
import { Card } from "react-bootstrap";
const SongListItem = ({ name, cover, singer, id }) => {
    const {setCurrentSong,songsList} = useContext(MyContext);
    
    const updateCurrent = () => {
        const currentInfo=songsList.filter((item) => item.id == id);
        setCurrentSong(currentInfo);
    };
    
    return (
            <div className="songItem mx-3 mb-1" onClick={updateCurrent}>
                <Card className="songItem_box">
                    <Card.Img className="songItem_box-img mx-auto mt-1" src={cover} />
                    <Card.Body className="p-1 text-center">
                        <Card.Title className="mb-0">{name}</Card.Title>
                        <Card.Text>{singer}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
    );
}

export default SongListItem;