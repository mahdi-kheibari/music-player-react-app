import { Card } from "react-bootstrap";
import { FaPauseCircle, FaStepBackward, FaStepForward } from "react-icons/fa";
import Hope_cover from './../assets/img/Hope_cover.jpg';
const CurrentSong = () => {
    return (
        <div className="currentSong">
            <Card className="currentSong_box">
                <Card.Img className="currentSong_box-img mx-2" src={Hope_cover} />
                <FaPauseCircle size="4rem" className="currentSong_box-icon" />
                <Card.Body>
                    <Card.Title>Current Song name</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text>Singer</Card.Text>
                        <div className="visualizer d-flex align-items-baseline">
                            <div className="visualizer_icon"></div>
                            <div className="visualizer_icon2"></div>
                            <div className="visualizer_icon3"></div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="currentSong_caption">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="font-weight-bold">Current Song name</h2>
                        <h4>Singer</h4>
                    </div>
                    <div className="ml-1">
                        <FaStepBackward size="2rem" className="m-2 currentSong_caption-icon" />
                        <FaPauseCircle size="2.5rem" className="m-2 currentSong_caption-icon" />
                        <FaStepForward size="2rem" className="m-2 currentSong_caption-icon" />
                    </div>
                </div>
            </div>
            <div className="currentSong_time d-flex justify-content-between mt-4">
                <span>0:00</span>
                <span>3:00</span>
            </div>
            <input type="range" className="currentSong_slider"/>
        </div>
    );
}

export default CurrentSong;