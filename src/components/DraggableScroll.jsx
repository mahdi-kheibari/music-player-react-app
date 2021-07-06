import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Scrollbar
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Scrollbar]);

const DraggableScroll = ({children}) => {
    return (
        <Swiper slidesPerView={1} centeredSlides={true} spaceBetween={30} grabCursor={true} scrollbar={{
            "hide": true
          }} className="mySwiper">
            {children}
        </Swiper>
    );
}

export default DraggableScroll;