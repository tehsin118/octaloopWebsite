import React from "react";
import "./team.css";
import Slider from "react-slick";

import { Icon } from "@iconify/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/image/staff/director/AamirAhmad.webp";
import img2 from "../../assets/image/staff/director/WasaamQazi.webp";
import img3 from "../../assets/image/staff/director/ArslanAhmad.webp";
import img4 from "../../assets/image/staff/director/NomaanMir.webp";
import img5 from "../../assets/image/staff/director/ManzoorBhai.webp";
import img6 from "../../assets/image/staff/director/UzairBhai.webp";

const Team = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 900,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,

    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,

    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 1350,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section className="team-section">
      <h1>Peoples behind our success</h1>

      <div className="team-slider-container">
        <div className="slider-inner-container">
          <Slider {...settings}>
            <div className="content-container">
              <img src={img1} className="img-fluid" />
              <div className="overlay">
                <h3>Aamir Ahmed</h3>
                <span className="desination">
                  <h4>Cheif Executive Officer </h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
            <div className="content-container">
              <img src={img2} className="img-fluid" />
              <div className="overlay">
                <h3>wasaam Qazi</h3>
                <span className="desination">
                  <h4>MAnaging Director</h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
            <div className="content-container">
              <img src={img3} className="img-fluid" />
              <div className="overlay">
                <h3>arslan mumtaz</h3>
                <span className="desination">
                  <h4>founder/cto</h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
            <div className="content-container">
              <img src={img4} className="img-fluid" />
              <div className="overlay">
                <h3>nauman mir</h3>
                <span className="desination">
                  <h4>Cheif operating Officer</h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
            <div className="content-container">
              <img src={img5} className="img-fluid" />
              <div className="overlay">
                <h3>Manzoor Tareen</h3>
                <span className="desination">
                  <h4>CHIEF FINANCIAL OFFICER</h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
            <div className="content-container">
              <img src={img6} className="img-fluid" />
              <div className="overlay">
                <h3>MUHAMMAD UZAIR</h3>
                <span className="desination">
                  <h4>CO FOUNDER</h4>
                  <span className="linkedin-ico">
                    <Icon icon="mdi:linkedin" color="white" width="28" />
                  </span>
                </span>
              </div>
              <div className="Shadow"></div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Team;
