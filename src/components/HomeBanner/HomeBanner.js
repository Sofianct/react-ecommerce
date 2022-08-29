import React from "react";
import "./homeBanner.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const HomeBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      navigation
      height={"100%"}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        "--swiper-navigation-size": "1.5rem",
        "--swiper-pagination-bullet-inactive-color": "#2b2b2b",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="swiper-slide"
    >
      <SwiperSlide>
        <img src="../../img/carousel/if98.png" alt="a slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../img/carousel/vn66.png" alt="a slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../../img/carousel/lavender-rabbits-keycaps.png"
          alt="a slide3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
