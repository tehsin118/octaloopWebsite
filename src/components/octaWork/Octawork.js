import React from "react";
import "./octawork.scss";
const Octawork = () => {
  return (
    <div>
      <section className="octawork octawork-desktop">
        <div className="row">
          <div className="left col-6">
            <div>
              <h6 className="octa">OCTA</h6>
              <h6 className="work">Works</h6>
            </div>
          </div>
          <div className="right col-6">
            <img
              src="\assets\newLandingPage\octawork.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className=" octawork-mobile">
        <div className="octawork-mobile-content">
          <h6 className="octa">OCTA</h6>
          <h6 className="work">Works</h6>
        </div>
      </section>
    </div>
  );
};

export default Octawork;
