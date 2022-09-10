import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import avatar from "../assets/img/testimonials/Avatar-1.svg";
import avatar2 from "../assets/img/testimonials/Avatar-2.svg";
import avatar3 from "../assets/img/testimonials/Avatar-3.svg";

function Testimonial() {
  return (
    <section id="testimonial" className="bg-testimonial">
      <div className="container mx-auto ">
        <div className="py-12">
          <div>
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
              className="text-center text-sm font-bold mb-6 text-accent tracking-[3px]"
            >
              TESTIMONIAL
            </p>
            <h3
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
              className="font-bold text-center text-4xl mb-12"
            >
              See what they’re saying about us
            </h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
            <Swiper
              spaceBetween={50}
              slidesPerView="auto"
              centeredSlides
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="max-w-[770px] p-3"
            >
              <SwiperSlide className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex flex-row justify-center gap-6 items-center">
                  <img src={avatar} alt="" />
                  <h3 className="font-semibold">Kathryn Murphy</h3>
                </div>
                <p className="text-center py-4">
                  One of the best things about Wakanda is that it really
                  simplifies the process of finding and hiring people. The
                  quality is good as well, every freelancer I've hired has been
                  high-quality and professional. I would recommend this to
                  anyone who needs a freelancer.
                </p>
              </SwiperSlide>
              <SwiperSlide className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex flex-row justify-center gap-6 items-center">
                  <img src={avatar2} alt="" />
                  <h3 className="font-semibold">Robert Fox</h3>
                </div>
                <p className="text-center py-4">
                  I’m so happy because the freelance talent we work with are
                  more productive than we have ever thought. Recommend for
                  people who want to find professional freelancer on this
                  platform.
                </p>
              </SwiperSlide>
              <SwiperSlide className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex flex-row justify-center gap-6 items-center">
                  <img src={avatar3} alt="" />
                  <h3 className="font-semibold">Esther Howard</h3>
                </div>
                <p className="text-center py-4">
                  have used a lot of freelance hiring platforms, but none
                  compare to Wakanda. The quality of freelancers that I can find
                  here is unmatched and the service is top-notch. The customer
                  service is also excellent, which cannot be said for my
                  previous experiences in using other apps. I would highly
                  recommend this product for anyone looking to hire a
                  freelancer.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
