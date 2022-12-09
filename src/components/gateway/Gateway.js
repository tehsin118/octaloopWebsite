import React from "react";
import "./gateway.scss";
// import gatewayBack from "../../assets/image/gateway/gatewayback.webp";
const Gateway = () => {
  return (
    <div>
      <section className="gateway gateway-desktop">
        <div className="gateway-content ">
          <div className=" left">
            <div className="left-content">
              <div className="tag-line">
                <h1>
                  Where <span className="dream">Dreams </span>
                </h1>
                <h1>
                  Come To <span className="reality">Reality.</span>
                </h1>
              </div>
              <div className="detail">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit dolor malesuada
                  hac ac diam fames. A nunc augue scelerisque diam. Hac rhoncus
                  eu lorem tempus porta. Sit dictumst blandit proin interdum
                  urna aliquam in. Eros consectetur ut dolor ut. Risus sapien le
                  ctus condimentum aliquam diam imperdiet turpis.
                </p>

                <p>
                  Massa maecenas odio quam scelerisque phasellus at arcu nibh
                  mattis. Vitae vitae s ed senectus amet. Tincidunt blandit
                  consequat ultrices orci gravida diam mattis. Sed viverra eu
                  eget ac quam urna quam sed pulvinar. Nunc dui pretium.
                </p>
              </div>
              <div className="gateway-btn">
                <a href="#">Gateway</a>
              </div>
            </div>
          </div>
          <div className=" right">
            <img
              src="\assets\newLandingPage\gatewayback.webp"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className=" gateway-mobile">
        <div className="gateway-content ">
          <div className="tag-line">
            <h1>
              Where <span className="dream">Dreams </span>
            </h1>
            <h1>
              Come To <span className="reality">Reality.</span>
            </h1>
          </div>
          <div className="mobile-content">
            <div className=" left">
              <div className="left-content">
                <div className="detail">
                  <p>
                    Lorem ipsum dolor sit amet consect etur. Sit dolor malesuass
                    da hac act diam fames.A nunc augue scelerisq ue diam. Hsac
                    rhoncus eu lorem tet pus porta. Sit dictumstblandit prosnt
                    terdum urna aliquam in. Eros conset etur ut dolor ut. Risus
                    sapien lectus tt ndimentum aliquam diam imperdiet
                  </p>
                  <br />
                  <p>
                    Massa maecenas odio quam sceleris que phasellus at arcusibh
                    mattis. Vita e vitae sed senectus amet. Tincidunt blandits
                    onsequat ultrices orci gravid.
                  </p>
                </div>
                <div className="gateway-btn">
                  <a href="#">Gateway</a>
                </div>
              </div>
            </div>
            <div className=" right">
              <img
                src="\assets\newLandingPage\gatewayback.webp"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gateway;
