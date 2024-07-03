import React from "react";
import { styles } from "../style";

const Activities = () => {
  return (
    <div
      className={`section section-hero position-relative activity-bg-image text-light d-flex justify-content-start align-content-center`}
    >
      <div
        className={`${styles.boxGapX} position-absolute z-3 h-100 d-flex flex-column justify-content-center`}
        style={{ paddingBottom: "12rem" }}
      >
        <h2
          className="cursive my-4"
          style={{
            color: "#ff8c00",
          }}
        >
          Walking in nature <br className="hide" /> as a recreational <br className="hide" /> activity
        </h2>
        <h3>.Activities</h3>
        <h5 className=" my-4 lh-lg">
          Lorem ipsum dolor, sit amet <br className="hide" /> consectetur elit.
        </h5>
      </div>
      <div className="hero-bg-divider-7" />
      <div className="hero-bg-divider-8" />

      <div className="hero-bg-divider-4" />
      <div className="hero-bg-divider-9" />
    </div>
  );
};

export default Activities;
