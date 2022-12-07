import React from "react";
import { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";
import demo from "./demo.png";
import before from "./before.png";
import after from "./after.png";
import "./Autocropper.scss";
import Uploader from "./Uploader";

const Autocropper = () => {
  return (
    <>
      <main>
        <Uploader />
        <div>
          <div className="maincontent">
            <div className="maincontentitem">
              {" "}
              <img src={demo} alt="" className="demoimage" />
            </div>
            <div className="maincontentitem">
              <h3>
                {" "}
                AutoCropper makes it easy to split a scan of photos into
                individual photos. See how.
              </h3>

              <ol className="gradient-list">
                <li>Upload your scans to our portal.</li>
                <li>Python OpenCV will splice your images.</li>
                <li>Download your cropped photos to begin sharing.</li>
              </ol>

              <a href="#upload">
                {" "}
                <button className="button-70">
                  Get Started - Upload Scan Here
                </button>{" "}
              </a>
            </div>
          </div>

          <br></br>
          <br></br>
          <h2> What is AutoCropper? </h2>
          <p>
            AutoCropper is the only web tool that will automatically split your
            scans into cropped images.{" "}
          </p>

          <br />
          <h2> Why should I use it? </h2>
          <p>
            {" "}
            It's free and no download required, unlike the only competitor. I
            made this to put on my resume!{" "}
          </p>
        </div>
      </main>
    </>
  );
};

export default Autocropper;
