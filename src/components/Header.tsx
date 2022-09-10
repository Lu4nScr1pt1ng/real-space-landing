/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";

import Logo from "../assets/img/logo/logo.svg";
import NavMobile from "./NavMobile";
import Nav from "./Nav";

function Header() {
  const [bg, setBg] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white shadow-lg py-4" : "py-6"
      } fixed left-0 right-0 z-50 transition-all duration-200 `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="home" className="cursor-pointer">
            <img src={Logo} alt="" />
          </Link>
          <div className="hidden md:flex">
            <Nav />
          </div>
          <div
            className={` ${
              navMobile ? "max-h-64" : "max-h-0"
            } md:hidden absolute top-[3.9rem] w-[95%] mx-auto left-0 right-0 bg-accent font-bold transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="md:hidden text-2x1 text-black cursor-pointer items-center justify-center"
          >
            {navMobile ? (
              <RiCloseFill size={28} />
            ) : (
              <RiBarChartHorizontalLine size={28} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
