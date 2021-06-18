import { Card } from "react-bootstrap";
import Hope_cover from './../../assets/img/Hope_cover.jpg';
const SongListItem = () => {
    return (
        <Card className="songItem">
            <Card.Img className="songItem_img m-auto" src={Hope_cover} />
            <Card.Body className="py-0">
                <Card.Title className="mb-0">Song name</Card.Title>
                <Card.Text>Singer</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SongListItem;