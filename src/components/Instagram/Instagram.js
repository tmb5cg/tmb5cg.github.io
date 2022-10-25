import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import { autobid } from "../../portfolio";
import "./Instagram.css";

const Autobidder = () => {
  const { title, description, subhead, socidal } = autobid;

  const [imageProcessing, setImageProcessing] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [processedImages, setProcessedImages] = useState(null);

  return (
    <div>
      <div className="about center">
        <h1> Lifestyle </h1>
        <br></br>

        <h2 className="about__desc">ATV</h2>
        <p>
          <img
            src="https://i.gyazo.com/61b55c10cb92fd7ccac566f72321c549.jpg"
            alt="handsome man on ATV with female"
            width="600"
          />
        </p>
        <br></br>
        <h2 className="about__desc">Greatest feline on the planet</h2>
        <p>
          <img
            src="https://i.gyazo.com/a7893d0ec6f573e5d185dd07d4123aa4.jpg"
            alt="handsome cat"
            width="600"
          />
        </p>
        <br></br>
        <h2 className="about__desc">Ahman</h2>
        <p>
          <img
            src="https://i.gyazo.com/3d3937a5d92ecd9ecb6bec01b8d18097.jpg"
            alt="alex"
            width="600"
          />
        </p>
        <br></br>
        <h2 className="about__desc">Lake</h2>
        <p>
          <img
            src="https://i.gyazo.com/a8373f8e50a2240089622e0c2ffbd4a1.jpg"
            alt="lake"
            width="600"
          />
        </p>

        <br></br>

        <h2 className="about__desc">Funemployment</h2>
        <p>
          <img
            src="https://i.gyazo.com/35db26d9b80fd905b62998e0ef736f88.jpg"
            alt="nantucket"
            width="600"
          />
        </p>

        <br></br>

        <h2 className="about__desc">Cathy</h2>
        <p>
          <img
            src="https://i.gyazo.com/91cf5b2cb22f6140857eb9b2f647b0c7.jpg"
            alt="catherine"
            width="600"
          />
        </p>

        <br></br>

        <h2 className="about__desc">
          Near death experiences mountain biking, Beaver Creek
        </h2>
        <p>
          <img
            src="https://i.gyazo.com/0042513041ff640d3813c1e7ff8e9f42.jpg"
            alt="mcchicken"
            width="600"
          />
        </p>

        <br></br>

        <h2 className="about__desc">Cathy</h2>
        <p>
          <img
            src="https://i.gyazo.com/85366ddc01e99a7e74dbe19417ac5f06.jpg"
            alt="mcchicken"
            width="600"
          />
        </p>

        <br></br>

        <h2 className="about__desc">Start of Summer 2022 / funemployment</h2>
        <p>
          <img
            src="https://i.gyazo.com/66e9b8fc6cd883dbe01bc6289367815d.jpg"
            alt="whaler"
            width="600"
          />
        </p>
      </div>
    </div>
  );
};

export default Autobidder;
