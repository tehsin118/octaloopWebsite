import React from "react";
import "./herosection.css";

import { Icon } from "@iconify/react";

import hero from "../../assets/images/herosection/OctaloopHero.png";
import pageScrollbar from "../../assets/images/herosection/PageScroller.png";

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
