import React from "react";

import airbnb from "../assets/img/brands/Airbnb Logo.svg";
import amazon from "../assets/img/brands/Amazon Logo.svg";
import google from "../assets/img/brands/Google Logo.svg";
import netflix from "../assets/img/brands/Netflix  Logo.svg";
import slack from "../assets/img/brands/Slack Logo.svg";

function SocialProof() {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="container mx-auto"
      >
        <div className="flex flex-col gap-y-4 items-center mt-4 md:flex-row md:gap-x-4 md:justify-between">
          <div className="w-[100px] md:h-[110px]">
            <img src={airbnb} alt="" />
          </div>
          <div className="w-[100px]  md:h-[100px]">
            <img src={amazon} alt="" />
          </div>
          <div className="w-[100px]  md:h-[110px]">
            <img src={google} alt="" />
          </div>
          <div className="w-[100px]  md:h-[110px]">
            <img src={netflix} alt="" />
          </div>
          <div className="w-[100px]  md:h-[110px]">
            <img src={slack} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
