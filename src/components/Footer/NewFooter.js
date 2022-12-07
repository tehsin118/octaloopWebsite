import React from "react";
import "./footer.scss";
import { Icon } from "@iconify/react";
const NewFooter = () => {
  return (
    <div>
      <section className="octa-footer-wrapper">
        <div className="octa-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.583740571599!2d73.07245616557573!3d33.66794609533022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaad3ce4c22b9eccd%3A0x305a3d6f45049dc7!2sOctaLoop%20Technologies!5e0!3m2!1sen!2s!4v1670391608431!5m2!1sen!2s"
            // width="600"
            // height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="octa-map-wrapper"
          ></iframe>
          <a href="https://goo.gl/maps/YrLvNM7wSQ38tKi38" target="_blank">
            <img
              src="\assets\newLandingPage\mapMarker.png"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>
        <div className="octa-footer">
          <div className="octa-footer-content">
            <div className="row">
              <div className="col-4 left">
                <div className="header">
                  <img
                    src="\assets\newLandingPage\octaLogo.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>
                  Address Office#1,2nd floor,Pak Land City centre Near D.Watson,
                  I8 Markaz.
                </p>
                <div className="social-icons">
                  <a href="">
                    <Icon
                      icon="ant-design:twitter-circle-filled"
                      color="white"
                      width="36"
                      height="36"
                      className="social-icos"
                    />
                  </a>
                  <a href="">
                    <Icon
                      icon="ic:round-facebook"
                      color="white"
                      width="36"
                      height="36"
                      className="social-icos"
                    />
                  </a>
                  <a href="">
                    <Icon
                      icon="uil:linkedin"
                      color="white"
                      width="36"
                      height="36"
                      className="social-icos"
                    />
                  </a>
                </div>
              </div>
              <div className="col-4 center">
                <div>
                  <h1 className="footer-head">Quick Links</h1>
                  <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">IT Support</a>
                  </div>
                </div>
              </div>
              <div className="col-4 right">
                <div>
                  <h1 className="footer-head">Newsletter</h1>
                </div>
                <div className="subsribe-btn">
                  <p>Subscribe to our newsletter to get daily updates.</p>
                  <div className="input-wrapper">
                    <input type="text" placeholder="Email Address " />
                    <button>
                      <Icon
                        icon="system-uicons:paper-plane-alt"
                        color="white"
                        width="42"
                        height="42"
                        className="sub-btn"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>

          <div className="octa-copyright">
            <p>Copyright 2022 © by Octaloop.All Right Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFooter;
