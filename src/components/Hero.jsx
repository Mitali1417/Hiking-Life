import React from "react";
import { styles } from "../style";

const Hero = () => {
  return (
    <div
      className={`section section-hero position-relative hero-bg-image text-light d-flex justify-content-start align-content-center`}
    >
      <div
        className={`${styles.boxGapX} position-absolute z-3 h-100 d-flex flex-column justify-content-center`} style={{paddingBottom: "8rem"}}
      >
        <h1 className="">
          Discover your <br className="hide" /> next Hike
        </h1>
        <h5 className=" text-uppercase my-3 w-md-75">
          Discover your <br className="hide" /> next Hike
        </h5>
        <h5 className="fw-bold ">
          Lorem ipsum dolor, sit amet <br className="hide" /> consectetur <br className="hide" /> adipisicing
          elit, sed do.
        </h5>
      </div>
      <div className="hero-bg-divider" />
      <div className="hero-bg-divider-2" />
      <div className="hero-bg-divider-3" />

      <div className="hero-bg-divider-4" />
      <div className="hero-bg-divider-5" />
      <div className="hero-bg-divider-6" />
    </div>
  );
};

export default Hero;
