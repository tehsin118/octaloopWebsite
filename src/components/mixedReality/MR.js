import React, { useState } from "react";
import "./mr.scss";
const MR = () => {
  const [show, setshow] = useState(true);

  const showvideo = () => {
    setshow(false);
  };

  const showtext = () => {
    setshow(true);
  };
  return (
    <div>
      {show ? (
        <section className="MR">
          <div className="tagline">
            <h1>
              <span>future is</span> <span>mixed reality</span>
            </h1>
            <p>the rise of technology</p>
          </div>

          <div className="mr-detail">
            <p>
              Mixed reality is a blend of physical and digital worlds, unlocking
              natural and intuitive 3D human, computer, and environmental
              interactions. This new reality is based on advancementsin computer
              vision, graphical processing, display technologies, input systems,
              and cloud computing.
            </p>
          </div>
          <h1 className="mr-learn">
            Learn About MR <span>(mixed reality)</span>
          </h1>

          <div className="vid-thumb">
            <div>
              <img
                src="\assets\newLandingPage\mrVid.png"
                alt=""
                className="img-fluid"
                onClick={showvideo}
              />
            </div>
            <div>
              <img
                src="\assets\newLandingPage\mrVid.png"
                alt=""
                className="img-fluid"
                onClick={showvideo}
              />
            </div>
            <div>
              <img
                src="\assets\newLandingPage\mrVid.png"
                alt=""
                className="img-fluid"
                onClick={showvideo}
              />
            </div>
          </div>
        </section>
      ) : (
        <div onClick={showtext}>
          <section className="MR-video">
            <h1>Video Here</h1>
          </section>
        </div>
      )}

      {/* Mobile */}
      {show ? (
        <section className="MR-mobile">
          <div className="tagline">
            <h1>
              <span>future is</span> <span>mixed reality</span>
            </h1>
            <p>the rise of technology</p>
          </div>
        </section>
      ) : (
        <div onClick={showtext}>
          <section className="MR-video">
            <h1>Video Here</h1>
          </section>
        </div>
      )}
      {/* ----- */}
    </div>
  );
};

export default MR;
