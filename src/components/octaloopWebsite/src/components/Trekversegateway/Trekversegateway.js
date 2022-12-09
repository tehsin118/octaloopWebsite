import React, { useState } from "react";
import "./trekversegateway.css";
import { Icon } from "@iconify/react";

import logo from "../../assets/image/trekversegateway/logo trekverse.svg";

const Trekversegateway = () => {
  const [show, setshow] = useState(true);

  const showvideo = () => {
    setshow(false);
  };

  const showtext = () => {
    setshow(true);
  };

  return (
    <section className="trekverse-gateway">
      {show ? (
        <>
          <img className="img-fluid" src={logo} alt="treakverse logo" />
          <Icon
            onClick={showvideo}
            className="youtube-icon"
            icon="mdi:youtube"
            color="#ee2d2d"
          />
          <p className="para">
            <span style={{ color: "#00ffd1" }}>Gateway</span> To The
            <span style={{ color: "#FF12BD" }}> Next World</span>
          </p>
        </>
      ) : (
        <div onClick={showtext}>
          <h1>VIDEO HERE</h1>
        </div>
      )}
    </section>
  );
};

export default Trekversegateway;
