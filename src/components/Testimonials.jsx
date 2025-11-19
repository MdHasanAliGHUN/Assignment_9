import React from "react";
import { testimonials } from "../constants/testimonials";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  return (
    <div data-aos="slide-down" className="bg-gray-100 py-16">
      <SectionTitle title="What Our Customers Say" />

      <div className="container-custom">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          dir="ltr"
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition m-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.role}</p>
                <p className="text-gray-600">{item.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
