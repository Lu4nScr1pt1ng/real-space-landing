import React from "react";

import { FiAward, FiHeadphones } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

function Feature() {
  return (
    <section id="benefit" className="bg-accent mt-6 md:mt-0 py-12">
      <div className="container mx-auto text-white">
        <div className="flex flex-col items-center pb-12">
          <p
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="600"
            className="font-semibold tracking-[3px] text-xs"
          >
            FEATURE
          </p>
          <h3
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="600"
            className="text-3xl font-bold text-center"
          >
            The benefit of using our platform
          </h3>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between ">
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
            className="flex flex-1 flex-col items-center md:items-start"
          >
            <div className="bg-benefit p-6 rounded-full text-black md:mb-6">
              <FiAward size={42} />
            </div>
            <div>
              <h4 className="text-2xl text-center font-semibold md:text-start md:mb-2">
                Professional & Fast
              </h4>
              <p className="text-center text-sm md:text-start">
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
            className="flex flex-1 flex-col items-center md:items-start"
          >
            <div className="bg-benefit p-6 rounded-full text-black md:mb-6">
              <FiHeadphones size={42} />
            </div>
            <div>
              <h4 className="text-2xl text-center font-semibold md:text-start md:mb-2">
                24/7 support
              </h4>
              <p className="text-center text-sm md:text-start">
                You have any concerns or questions? Don’t worry, we have our
                support team to help you at anytime and anywhere.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
            className="flex flex-1 flex-col items-center md:items-start"
          >
            <div className="bg-benefit p-6 rounded-full text-black md:mb-6">
              <BsShieldCheck size={42} />
            </div>
            <div>
              <h4 className="text-2xl text-center font-semibold md:text-start md:mb-2">
                Safe & Secure
              </h4>
              <p className="text-center text-sm md:text-start">
                We know that safety is the most important thing for our
                customer, so all of our payments are processed instantly and
                securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
