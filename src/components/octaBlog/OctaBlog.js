import React from "react";
import "./octaBlog.scss";
const OctaBlog = () => {
  return (
    <div>
      <section className="octaBlog">
        <div className="octaBlog-content">
          <div className="row top">
            <div className="col-6 left">
              <h1>
                <span>blockchain</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Magnis eget montes mi
                urna vel ac aliquam viverra facilisis. Nibh ipsum lorem sagittis
                est tristique sc elerisque. Egestas nulla amet gravida bibendum
                elit ullamcorper preti um pharetra. Mauris gravida a tempus
                <br />
                <br />
                rat sit arcu scelerisque in dui. Lacus tristique metus quisque
                elit sit praes ent curabitur. Felis tincidunt laoreet porttitor
                erat porta. Rhoncus nunc lobortis vivamus morbi laoreet mauris
                id imperdiet feugiat. Auctor phar etra est enim ligula in urna.
                Sit senectus
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="col-6 right">
              <div>
                <img
                  src="\assets\newLandingPage\octaBlog1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row bottom">
            <div className="col-6 left">
              <div>
                <img
                  src="\assets\newLandingPage\octaBlog2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-6 right">
              <h1>
                <span>Gamefi</span>
              </h1>
              <div className="detail-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magnis eget montes mi
                  urna vel ac aliquam viverra facilisis. Nibh ipsum lorem
                  sagittis est tristique sc elerisque. Egestas nulla amet
                  gravida bibendum elit ullamcorper preti um pharetra. Mauris
                  gravida a tempus
                  <br />
                  <br />
                  rat sit arcu scelerisque in dui. Lacus tristique metus quisque
                  elit sit praes ent curabitur. Felis tincidunt laoreet
                  porttitor erat porta. Rhoncus nunc lobortis vivamus morbi
                  laoreet mauris id imperdiet feugiat. Auctor phar etra est enim
                  ligula in urna. Sit senectus
                </p>
              </div>
              <div className="learn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="octaBlog-mobile">
        <div className="octaBlog-content">
          <div className=" top">
            <div className=" left">
              <h1>
                <span>blockchain</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Magnis eget montes mi
                urna vel ac aliquam viverra facilisis. Nibh ipsum lorem sagittis
                est tristique sc elerisque. Egestas nulla amet gravida bibendum
                elit ullamcorper preti um pharetra. Mauris gravida a tempus
                <br />
                <br />
                rat sit arcu scelerisque in dui. Lacus tristique metus quisque
                elit sit praes ent curabitur. Felis tincidunt laoreet porttitor
                erat porta. Rhoncus nunc lobortis vivamus morbi laoreet mauris
                id imperdiet feugiat. Auctor phar etra est enim ligula in urna.
                Sit senectus
              </p>
              <a href="#">Read More</a>
            </div>

            <div className=" right">
              <img
                src="\assets\newLandingPage\octaBlog1.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          {/* <div className="row bottom">
            <div className="col-6 left">
              <div>
                <img
                  src="\assets\newLandingPage\octaBlog2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-6 right">
              <h1>
                <span>Gamefi</span>
              </h1>
              <div className="detail-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magnis eget montes mi
                  urna vel ac aliquam viverra facilisis. Nibh ipsum lorem
                  sagittis est tristique sc elerisque. Egestas nulla amet
                  gravida bibendum elit ullamcorper preti um pharetra. Mauris
                  gravida a tempus
                  <br />
                  <br />
                  rat sit arcu scelerisque in dui. Lacus tristique metus quisque
                  elit sit praes ent curabitur. Felis tincidunt laoreet
                  porttitor erat porta. Rhoncus nunc lobortis vivamus morbi
                  laoreet mauris id imperdiet feugiat. Auctor phar etra est enim
                  ligula in urna. Sit senectus
                </p>
              </div>
              <div className="learn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default OctaBlog;
