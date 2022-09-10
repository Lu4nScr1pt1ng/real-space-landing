import React from "react";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import Logo from "../assets/img/logo/logo.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container mx-auto py-16 text-black">
        <div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="flex gap-6">
              <BsFacebook
                size={24}
                className="cursor-pointer hover:text-accent"
              />
              <BsTwitter
                size={24}
                className="cursor-pointer hover:text-accent"
              />
              <BsInstagram
                size={24}
                className="cursor-pointer hover:text-accent"
              />
            </div>
            <div className="text-center">
              Copyright © 2022 Wakanda. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
