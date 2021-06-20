import { useContext } from "react";
import { Card } from "react-bootstrap";
import { FaPauseCircle, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import { MyContext } from "../context";
const CurrentSong = () => {
    const { currentSong, songHandler, setSongHandler } = useContext(MyContext);
    return (
        <div className="currentSong" style={{ background: "linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(" + currentSong[0].cover + ")" }}>
            <Card className="currentSong_box">
                <Card.Img className="currentSong_box-img mx-2" src={currentSong[0].cover} />
                {(songHandler) ?
                    <FaPauseCircle onClick={() => setSongHandler(!songHandler)} size="4rem" className="currentSong_box-icon" />
                    :
                    <FaPlay onClick={() => setSongHandler(!songHandler)} size="4rem" className="currentSong_box-icon" />
                }
                <Card.Body>
                    <Card.Title>{currentSong[0].name}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text>{currentSong[0].singer}</Card.Text>
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
                        <h2 className="font-weight-bold">{currentSong[0].name}</h2>
                        <h4>{currentSong[0].singer}</h4>
                    </div>
                    <div className="ml-1">
                        <FaStepBackward size="2rem" className="m-2 currentSong_caption-icon" />
                        {(songHandler) ?
                            <FaPauseCircle onClick={() => setSongHandler(!songHandler)} size="2.5rem" className="m-2 currentSong_caption-icon" />
                            :
                            <FaPlay onClick={() => setSongHandler(!songHandler)} size="2.5rem" className="m-2 currentSong_caption-icon" />
                        }
                        <FaStepForward size="2rem" className="m-2 currentSong_caption-icon" />
                    </div>
                </div>
            </div>
            <div className="currentSong_time d-flex justify-content-between mt-4">
                <span>0:00</span>
                <span>3:00</span>
            </div>
            <input type="range" className="currentSong_slider" />
        </div>
    );
}

export default CurrentSong;