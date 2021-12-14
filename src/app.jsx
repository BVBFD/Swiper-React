import React from "react";
import styles from "./app.module.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

const App = (props) => {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <section className={styles.swiperApp}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.imgBox}>
          <img src="./images/gallery-img-9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default App;
