import React from "react";

function Nav() {
  return (
    <ul className="flex font-semibold gap-x-4 items-center lg:gap-x-8">
      <li>
        <a className="hover:text-accent" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-accent" href="#benefit">
          Benefit
        </a>
      </li>
      <li>
        <a className="hover:text-accent" href="#tutorial">
          Tutorial
        </a>
      </li>
      <li>
        <a className="hover:text-accent" href="#explore">
          Explore
        </a>
      </li>
      <li>
        <a className="hover:text-accent" href="#testimonial">
          Testimonial
        </a>
      </li>
      <button
        type="button"
        className="bg-accent rounded-lg py-2 px-6 text-white font-bold hover:bg-accent-hover"
      >
        <span>Get started</span>
      </button>
    </ul>
  );
}

export default Nav;
