import React from "react";

import tutorialBio from "../assets/img/howtouse/tutorial-bio.svg";

function Tutorial() {
  return (
    <section id="tutorial">
      <div className="container mx-auto">
        <div className="flex py-12 flex-col md:flex-row md:gap-x-12 md:items-center">
          <div
            data-aos="zoom-in-right"
            data-aos-delay="400"
            data-aos-duration="600"
            className="w-[160px] mx-auto mb-4 md:w-auto"
          >
            <img src={tutorialBio} alt="" />
          </div>
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
              className="font-semibold text-2xl text-center mb-4 md:text-3xl md:text-start lg:text-4xl"
            >
              Wakanda is an easy platform to find talent
            </h1>
            <ul
              data-aos="zoom-in-left"
              data-aos-delay="400"
              data-aos-duration="600"
              className="flex flex-col ml-4 gap-y-2 md:ml-0 md:gap-y-4"
            >
              <li className="flex items-center gap-x-2">
                <div className="rounded-full flex-shrink-0 font-semibold bg-benefit w-8 h-8 flex items-center justify-center">
                  1
                </div>
                Sign in to our website
              </li>
              <li className="flex items-center gap-x-2">
                <div className="rounded-full flex-shrink-0 font-semibold bg-benefit w-8 h-8 flex items-center justify-center">
                  2
                </div>
                Fill out neccesary information
              </li>
              <li className="flex items-center gap-x-2">
                <div className="rounded-full flex-shrink-0 font-semibold bg-benefit w-8 h-8 flex items-center justify-center">
                  3
                </div>
                Discover thoudsands of freelancers
              </li>
              <li className="flex items-center gap-x-2">
                <div className="rounded-full flex-shrink-0 font-semibold bg-benefit w-8 h-8 flex items-center justify-center">
                  4
                </div>
                View freelancer’s profile and hire
              </li>
              <li className="flex items-center gap-x-2">
                <div className="rounded-full flex-shrink-0 font-semibold bg-benefit w-8 h-8 flex items-center justify-center">
                  5
                </div>
                <p>Complete payment & it’s time to work!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tutorial;
