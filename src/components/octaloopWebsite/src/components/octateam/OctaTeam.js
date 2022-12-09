import React from "react";
import "./octateam.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const OctaTeam = () => {
  return (
    <section className="octa-team">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-1.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-2.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-3.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-4.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-5.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-6.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-7.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-8.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-9.jpg)"
          ></div>
          <div
            class="swiper-slide"
            style="background-image:url(./images/nature-10.jpg)"
          ></div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default OctaTeam;
