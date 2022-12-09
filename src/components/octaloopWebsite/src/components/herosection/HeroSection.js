import React from "react";
import "./herosection.css";

import { Icon } from "@iconify/react";

import hero from "../../assets/image/herosection/Octaloop Hero.png";
import pageScrollbar from "../../assets/image/herosection/Page Scroller.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="bg-video">
        <img className="img-fluid" src={hero} alt="bg-video" />
      </div>
      <div className="social-ico">
        <div>
          <a href="#">
            <Icon
              icon="entypo-social:linkedin-with-circle"
              color="white"
              width="48"
            />
          </a>
        </div>

        <div>
          <a href="#">
            <Icon
              icon="entypo-social:facebook-with-circle"
              color="white"
              width="48"
            />
          </a>
        </div>

        <div>
          <a href="#">
            <Icon
              icon="entypo-social:twitter-with-circle"
              color="white"
              width="48"
            />
          </a>
        </div>
      </div>

      <div className="page-scrollbar">
        <img src={pageScrollbar} alt="pageScrollbar" />
      </div>
    </section>
  );
};

export default HeroSection;
