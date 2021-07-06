import { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaPauseCircle, FaPlay, FaRegHeart, FaStepBackward, FaStepForward } from "react-icons/fa";
import { MyContext } from "../context";
import SongListItem from "./songlist/SongListItem";
import { withRouter } from "react-router";
import { SwiperSlide } from "swiper/react";
import DraggableScroll from "./DraggableScroll";

const CurrentSong = ({ time, setToFav, width, audioRef, goNext }) => {
    const { currentSong, setCurrentSong, songHandler, setSongHandler, currentTime, setCurrentTime, fullTime, setFullTime, songsList } = useContext(MyContext);

    useEffect(() => {
        if (songHandler) { audioRef.current.play(); }
        else { audioRef.current.pause(); }
        var time = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime);
            setFullTime(audioRef.current.duration);
        }, 1000)
        return function cleanup() {
            clearInterval(time);
        }
    }, [songHandler, currentSong]);// eslint-disable-line react-hooks/exhaustive-deps

    const currentIndex = songsList.findIndex((item) => item.id === currentSong[0].id);
    function goBack() {
        if (currentIndex === 0) {
            setCurrentSong([songsList[songsList.length - 1]]);
        } else { setCurrentSong([songsList[currentIndex - 1]]); }
    }
    return (
        <>
            {(width > 778) ?
                <div className="currentSong" style={{ background: "linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(" + currentSong[0].cover + ")" }}>
                    <div className="row no-gutters">
                        <div className="col-5 col-xl-3 p-0 d-flex justify-content-end">
                            <Card className="currentSong_box">
                                <Card.Img className="currentSong_box-img mx-auto" src={currentSong[0].cover} />
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
                        </div>
                        <div className="col-7 col-xl-9">
                            <div className="row no-gutters">
                                <div className="col-12">
                                    <div className="currentSong_caption">
                                        <div className="row justify-content-between w-100 align-items-center">
                                            <div className="col-6 ml-3">
                                                <h2 className="font-weight-bold">{currentSong[0].name}</h2>
                                                <h4>{currentSong[0].singer}</h4>
                                            </div>
                                            <div className="col-5 d-flex flex-column align-items-end mr-xl-auto">
                                                <div>
                                                    <FaStepBackward onClick={goBack} size="2rem" className="m-2 currentSong_caption-icon" />
                                                    {(songHandler) ?
                                                        <FaPauseCircle onClick={() => setSongHandler(!songHandler)} size="2.5rem" className="m-2 currentSong_caption-icon" />
                                                        :
                                                        <FaPlay onClick={() => setSongHandler(!songHandler)} size="2.5rem" className="m-2 currentSong_caption-icon" />
                                                    }
                                                    <FaStepForward onClick={goNext} size="2rem" className="ml-2 currentSong_caption-icon" />

                                                </div>
                                                {(currentSong[0].favorite) ?
                                                    <FaHeart onClick={setToFav} size="2rem" className="currentSong_caption-icon" />
                                                    :
                                                    <FaRegHeart onClick={setToFav} size="2rem" className="currentSong_caption-icon" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="currentSong_time d-flex justify-content-between">
                                        <span className="ml-2">{time(currentTime)}</span>
                                        <span className="mr-2">{time(fullTime)}</span>
                                    </div>
                                    <div className="currentSong_range">
                                        <div className="currentSong_range-slider">
                                            <div className="progress" style={{ width: (currentTime / fullTime) * 100 + "%" }}></div>
                                            <input type="range" onChange={(e) => audioRef.current.currentTime = e.target.value} min="0" max={fullTime} value={currentTime} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                :
                // Start Mobile current song
                <div>
                    <div className="currentSongMobile" style={{ background: `linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(${currentSong[0].cover})` }}>
                        <div className="row no-gutters">
                            <div className="col-6 p-0 d-flex justify-content-end">
                                <Card className="currentSongMobile_box">
                                    <div className="currentSongMobile_box-icon mx-auto">
                                        <FaStepBackward onClick={goBack} size={(width <= 580) ? "2rem" : "3rem"} className="m-2 currentSong_caption-icon" />
                                        {(songHandler) ?
                                            <FaPauseCircle onClick={() => setSongHandler(!songHandler)} size={(width <= 600) ? "2.5rem" : "3.5rem"} className="m-2 currentSong_caption-icon" />
                                            :
                                            <FaPlay onClick={() => setSongHandler(!songHandler)} size={(width <= 580) ? "2.5rem" : "3.5rem"} className="m-2 currentSong_caption-icon" />
                                        }
                                        <FaStepForward onClick={goNext} size={(width <= 580) ? "2rem" : "3rem"} className="m-2 currentSong_caption-icon" />
                                    </div>
                                    <Card.Img className="currentSong_box-img mx-auto" src={currentSong[0].cover} />
                                    <Card.Body className="">
                                        <div className="d-flex justify-content-between">
                                            <Card.Title className="font-weight-bold">{currentSong[0].name}</Card.Title>
                                            {(currentSong[0].favorite) ?
                                                <FaHeart onClick={setToFav} size="2rem" className="currentSong_caption-icon" />
                                                :
                                                <FaRegHeart onClick={setToFav} size="2rem" className="currentSong_caption-icon" />
                                            }
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Card.Text>{currentSong[0].singer}</Card.Text>
                                            <div className="visualizer d-flex align-items-baseline">
                                                <div className="visualizer_icon"></div>
                                                <div className="visualizer_icon2"></div>
                                                <div className="visualizer_icon3"></div>
                                            </div>
                                        </div>
                                        <div className="currentSongMobile_time d-flex justify-content-between font-weight-bold">
                                            <span>{time(currentTime)}</span>
                                            <span>{time(fullTime)}</span>
                                        </div>
                                        <div className="currentSongMobile_range">
                                            <div className="currentSongMobile_range-slider">
                                                <div className="progress" style={{ width: (currentTime / fullTime) * 100 + 1 + "%" }}></div>
                                                <input type="range" onChange={(e) => audioRef.current.currentTime = e.target.value} min="0" max={fullTime} value={currentTime} />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="songListMobile col-5 ml-3">
                                <DraggableScroll className="songList mt-2 d-flex">
                                    {songsList.map((item) => (
                                        <SwiperSlide>
                                            <SongListItem key={item.id} name={item.name} singer={item.singer} cover={item.cover} id={item.id} />
                                        </SwiperSlide>
                                    ))}
                                </DraggableScroll>
                            </div>
                        </div>
                    </div>
                </div>
                // End Mobile current song 
            }
        </>
    );
}

export default withRouter(CurrentSong);