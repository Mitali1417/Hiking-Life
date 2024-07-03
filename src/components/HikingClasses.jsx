import React from "react";
import { campClasses } from "../data.jsx";
import cross from "../assets/cross-green.svg";
import { styles } from "../style.jsx";

const HikingClasses = () => {
  return (
    <div
      className={`${styles.boxGapX} section d-flex justify-content-center flex-column  my-5 h-100`}
    >
      <h2 className=" d-flex flex-row">
        <div className="d-flex flex-column me-4 h-100">
          <img src={cross} className="mb-2" style={{ width: "2rem" }} alt="" />
          <img src={cross} className="mt-2" style={{ width: "2rem" }} alt="" />
        </div>
        <div>
          Hiking And Camping <br className="hide" />
          <span className="break-text">Classes</span>
          <hr
            style={{
              width: "6rem",
              borderWidth: "0.3rem",
              borderColor: "#00C9E1",
              borderStyle: "solid",
            }}
          />
        </div>
      </h2>
      <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
        {campClasses.map((item) => (
          <div
            key={item.id}
            className="card p-2 d-flex align-items-center mx-lg-5 py-5"
          >
            <img
              src={item.img}
              className="card-img-top"
              style={{ width: "10rem" }}
              alt={item.title}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase fw-bold my-4">
                {item.title}
              </h5>
              <p className="card-text fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HikingClasses;
