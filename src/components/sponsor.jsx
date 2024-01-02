import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Sponsor1 from "../assets/img/sponsor-1.png";
import Sponsor2 from "../assets/img/sponsor-2.png";
import Sponsor3 from "../assets/img/sponsor-3.png";
import Sponsor4 from "../assets/img/sponsor-4.png";
import Sponsor5 from "../assets/img/sponsor-5.png";
import Sponsor6 from "../assets/img/sponsor-6.png";
import Sponsor7 from "../assets/img/sponsor-7.png";
import Sponsor8 from "../assets/img/sponsor-8.png";

function Sponsor() {
  const slideContent = [
    <img src={Sponsor1} alt="Alpha" />,
    <img src={Sponsor2} alt="GFC" />,
    <img src={Sponsor3} alt="Golden Gate" />,
    <img src={Sponsor4} alt="Insignia" />,
    <img src={Sponsor5} alt="Sequoia" />,
    <img src={Sponsor6} alt="SG Innovate" />,
    <img src={Sponsor7} alt="Wave Maker" />,
    <img src={Sponsor8} alt="500" />,
  ];

  return (
    <div className="bg-sponsor">
      <h1 className="text-sponsor ">DIDUKUNG OLEH</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {slideContent.map((content, index) => (
          <SwiperSlide
            key={index}
            className="py-5 d-flex align-items-center justify-content-center"
          >
            {content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sponsor;
