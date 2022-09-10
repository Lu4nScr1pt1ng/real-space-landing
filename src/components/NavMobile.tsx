import React from "react";

function NavMobile() {
  return (
    <ul className="flex flex-col py-5 justify-center items-center text-white gap-y-5">
      <li>
        <a className="hover:text-black" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#benefit">
          Benefit
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#tutorial">
          Tutorial
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#explore">
          Explore
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#testimonial">
          Testimonial
        </a>
      </li>
    </ul>
  );
}

export default NavMobile;
