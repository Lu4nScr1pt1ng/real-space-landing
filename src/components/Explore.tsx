import React from "react";

import handsomeMan from "../assets/img/explore/portrait-successful-handsome-executive-businessman-smart-casual-wear-looking-camera-smiling.png";

function Explore() {
  return (
    <section id="explore" className="bg-benefit">
      <div className="container mx-auto">
        <div className="flex flex-col py-20 md:flex-row md:gap-12 md:items-center">
          <div className="flex flex-col gap-6 md:flex-1">
            <h2
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="600"
              className="font-bold text-3xl text-center md:text-start md:text-2xl lg:text-6xl"
            >
              Explore and hire talent from our platform
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="600"
              className="text-center text-xl md:text-start md:text-sm lg:text-xg"
            >
              We've got experts for every industry - all under one roof! You can
              find everything from WordPress developers to Graphic designers to
              copywriters and many more at Wakanda.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
              className="bg-accent mx-auto p-4 md:p-3 lg:p-5 font-semibold text-white rounded-xl mb-6 hover:bg-accent-hover md:ml-0"
              type="button"
            >
              Explore now
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="600"
            className="mx-auto flex-1 max-w-[320px] md:w-auto"
          >
            <img src={handsomeMan} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
