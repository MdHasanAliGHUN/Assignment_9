import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { heroSliderData } from "../constants/heroSliderData";

const Slider = () => {
  return (
    <div data-aos="fade-up">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        dir="ltr"
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
      >
        {heroSliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="rounded-md overflow-hidden h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text  */}
              <div className=" z-10 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-white text-base md:text-lg max-w-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
