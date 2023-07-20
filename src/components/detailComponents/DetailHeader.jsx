import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

const dataImages = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
];
const DetailHeader = () => {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <div className="bg-gradient-black-white ">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect={"coverflow"}
        spaceBetween={10}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="main-swiper"
      >
        {dataImages?.map((item, index) => (
          <SwiperSlide key={index} className="data-swiper-slider">
            <SlideshowLightbox>
              <img src={item} className="swiper-image" />
            </SlideshowLightbox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailHeader;

{
  /* <img
  className="w-full rounded"
  src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
/>
<img
  className="w-full rounded"
  src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
/> */
}
