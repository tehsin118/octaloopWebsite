import React from "react";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gateway from "../../components/gateway/Gateway";
import Development from "../../components/development/Development";
import Trekversegateway from "../../components/Trekversegateway/Trekversegateway";
import Team from "../../components/team/Team";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <section className="home-container">
      <Slider {...settings}>
        <div className="test">
          <Gateway />
        </div>
        <div className="test">
          <Development />
        </div>
        <div className="test">
          <Trekversegateway />
        </div>
        <div className="test">
          <Team />
        </div>
      </Slider>
    </section>
  );
};

export default Home;
