import React from "react";
import "./octaTeam.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
const OctaTeam = () => {
  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const master = [
    {
      masterImg: "/assets/images/octaTeam/master/Aamir.png",
      masterName: "aamir ahmed",
      masterDesig: "Cheif Executive Officer ",
      linkedIn: "https://www.google.com",
    },

    {
      masterImg: "/assets/images/octaTeam/master/Arslan.png",
      masterName: " arslan mumtaz ",
      masterDesig: " founder/cto ",
      linkedIn: "https://www.google.com",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Manzoor.png",
      masterName: "MAnzoor Tareen",
      masterDesig: "CHIEF FINANCIAL OFFICER",
      linkedIn: "https://www.google.com",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Nomaan.png",
      masterName: "muhammad nauman mir",
      masterDesig: "",
      linkedIn: "https://www.google.com",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Aamir.png",
      masterName: "aamir ahmed",
      masterDesig: "Cheif Executive Officer ",
      linkedIn: "https://www.google.com",
    },
    {
      masterImg: "/assets/images/octaTeam/master/Wasaam.png",
      masterName: "wasaam <br/> Qazi",
      masterDesig: "Managing Director",
      linkedIn: "https://www.google.com",
    },
  ];

  return (
    <section className="octa-team">
      <h1 className="section-head">Peoples behind our success</h1>
      <div className="octa-team-content">
        <Tabs
          defaultActiveKey="mastermind"
          id="uncontrolled-tab-example"
          className="tabs-btn"
        >
          <Tab
            eventKey="mastermind"
            title="master mind"
            className="tabs-btn-key"
          >
            <Slider {...settings}>
              {master.map((item, index) => {
                return (
                  <div className="tab-card" key={index}>
                    <div className="imgs">
                      <div className="fc">
                        <img
                          src={item.masterImg}
                          alt=""
                          className="img-fluid"
                        />
                        <div className="shadow"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Tab>
          <Tab eventKey="creators" title="creators">
            <h1 className="section-head">Creator</h1>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default OctaTeam;
