import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, {
    Scrollbar, Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

const DraggableScroll = ({ children, width }) => {
    return (
        <>
            {(width >= 576) ?
                <Swiper slidesPerView={1.5} spaceBetween={30} freeMode={true} grabCursor={true} navigation={true} 
                scrollbar={{
                    "hide": true
                }} className="mySwiper">
                    {children}
                </Swiper>
                :
                <Swiper slidesPerView={2.5} spaceBetween={10} freeMode={true} navigation={true}
                scrollbar={{
                    "hide": true
                }} className="mySwiper">
                    {children}
                </Swiper>
            }
        </>
    );
}

export default DraggableScroll;