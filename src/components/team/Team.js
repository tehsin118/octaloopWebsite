import React from "react";
import "./team.css";
import Slider from "react-slick";

import { Icon } from "@iconify/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const master = [
    {
      masterImg: "/assets/images/octaTeam/master/Aamir.png",
      masterName: "aamir ahmed",
      masterDesig: "Cheif Executive Officer ",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Arslan.png",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Manzoor.png",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Nomaan.png",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Wasaam.png",
    },
  ];

  return (
    <section className="team-section">
      <h1>Peoples behind our success</h1>

      <div className="team-slider-container">
        <div className="slider-inner-container">
          <Slider {...settings}>
            {master.map((item, index) => {
              return (
                <div className="content-container">
                  <img src={item.masterImg} className="img-fluid" />
                  <div className="overlay">
                    <h3>Aamir Ahmed</h3>
                    <span className="desination">
                      <h4>Cheif Executive Officer </h4>
                      <span className="">
                        <a href="#" className="z">
                          <Icon icon="mdi:linkedin" color="white" width="28" />
                        </a>
                      </span>
                    </span>
                  </div>
                  <div className="Shadow"></div>
                </div>
              );
            })}
          </Slider>

          <Slider {...settings}>
            {/* <div className="content-container">
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
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Team;
