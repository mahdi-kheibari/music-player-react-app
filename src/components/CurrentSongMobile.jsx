import { Card } from "react-bootstrap";
import { FaPauseCircle, FaStepBackward, FaStepForward } from "react-icons/fa";
import Hope_cover from './../assets/img/Hope_cover.jpg';
const CurrentSongMobile = () => {
    return (
        <div className="currentSongMobile">
            <Card className="currentSongMobile_box">
                <div className="currentSongMobile_box-icon mx-auto">
                    <FaStepBackward size="3rem" className="m-2 currentSong_caption-icon" />
                    <FaPauseCircle size="3.5rem" className="m-2 currentSong_caption-icon" />
                    <FaStepForward size="3rem" className="m-2 currentSong_caption-icon" />
                </div>
                <Card.Img className="currentSong_box-img mx-2" src={Hope_cover} />
                <Card.Body className="">
                    <Card.Title className="font-weight-bold">Current Song name</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text>Singer</Card.Text>
                        <div className="visualizer d-flex align-items-baseline">
                            <div className="visualizer_icon"></div>
                            <div className="visualizer_icon2"></div>
                            <div className="visualizer_icon3"></div>
                        </div>
                    </div>
                    <div className="currentSongMobile_time d-flex justify-content-between font-weight-bold">
                        <span>0:00</span>
                        <span>3:00</span>
                    </div>
                    <input type="range" className="currentSongMobile_slider" />
                </Card.Body>
            </Card>
        </div>
    );
}

export default CurrentSongMobile;