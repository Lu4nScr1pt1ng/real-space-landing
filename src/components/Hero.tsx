import React from "react";
import Man from "../assets/img/hero/handsome-businessman-suit-glasses-cross-arms-chest-look.png";

function Hero() {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex-col text-center md:text-start">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-[32px] md:text-[48px] lg:text-[64px] mb-6 font-bold leading-tight"
            >
              Recruit top talented freelancer for your business
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="max-w-[440px] mb-8 mx-auto md:mx-0"
            >
              Connect you to thoudsands of talented freelancer from any
              industry. You can have the best people in just few simple steps.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="800"
              className="bg-accent hover:bg-accent-hover mx-auto py-2 px-4 rounded-lg text-white font-semibold mb-[35px] md:ml-0"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="flex-1 w-[180px]"
          >
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
