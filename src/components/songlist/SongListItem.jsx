import { Card } from "react-bootstrap";
const SongListItem = ({name,cover,signer}) => {
    return (
        <div className="songItem mx-3">
        <Card className="songItem_box">
            <Card.Img className="songItem_box-img mx-1 mt-1" src={cover} />
            <Card.Body className="py-0">
                <Card.Title className="mb-0">{name}</Card.Title>
                <Card.Text>{signer}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default SongListItem;