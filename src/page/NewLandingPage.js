import React, { useEffect, useState } from "react";
import HeroSection from "../components/herosection/HeroSection";
import { Icon } from "@iconify/react";
import "./landing.scss";
import pageScrollbar from "../assets/images/herosection/PageScroller.png";
import Trekversegateway from "../components/Trekversegateway/Trekversegateway";
import MR from "../components/mixedReality/MR";
import NewFooter from "../components/Footer/NewFooter";
function NewLandingPage() {
  let sections = document.getElementsByClassName("hide-contents");
  // tracks index of current section
  let currentSectionIndex = 0;

  document.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
      // wheel up
      sections[currentSectionIndex].id = "";
      currentSectionIndex--;
      sections[currentSectionIndex].id = "active";
    } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
      // wheel down
      sections[currentSectionIndex].id = "";
      currentSectionIndex++;
      sections[currentSectionIndex].id = "active";
    }
  });

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     setScrollValue(e.target.documentElement.scrollTop);
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollValue]);
  const wheel = (e) => {
    console.log(e);
  };
  return (
    <div className="land" onWheel={(e) => wheel(e)}>
      {/* <div className="progressBar">
        <div className="social-icos ">
          <a href="#">
            <Icon
              icon="entypo-social:linkedin-with-circle"
              color="white"
              width="48"
            />
          </a>

          <a href="#">
            <Icon
              icon="entypo-social:facebook-with-circle"
              color="white"
              width="48"
            />
          </a>

          <a href="#">
            <Icon
              icon="entypo-social:twitter-with-circle"
              color="white"
              width="48"
            />
          </a>
        </div>

        <div className="page-scrollbar">
          <img src={pageScrollbar} alt="pageScrollbar" />
        </div>
      </div> */}
      <div className="hide-contents " id="active" data-section="0">
        <Trekversegateway />
      </div>

      <div className="hide-contents" data-section="1">
        <MR />
      </div>
    </div>
  );
}

export default NewLandingPage;
