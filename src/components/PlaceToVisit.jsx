import React from "react";
import { styles } from "../style";
import { placeToVisit } from "../data";
import dots from "../assets/PlaceToVisit/dots.svg";

const PlaceToVisit = () => {
  return (
    <div
      className={`${styles.boxGapX} ${styles.paddingY} section d-flex justify-content-center flex-column  my-5 h-100`}
    >
      <h2 className="text-center text-xl-start">
        Places to visit <br className="hide" /> in autumn
      </h2>
      <div className="d-flex flex-column flex-xl-row justify-content-around align-items-center mt-5 mt-xl-0 ">
        {placeToVisit.map((item) => (
          <div
            key={item.id}
            className="card d-flex align-items-center mx-sm-5 mx-lg-3 py-5 "
          >
            <div className="position-relative">
              <img
                src={item.img}
                className="card-img-top"
                style={{
                  width: "17rem",
                  height: "17rem",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
                alt={item.title}
              />
              <img
                src={dots}
                style={{
                  width: "3rem",
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-2rem",
                }}
                alt=""
              />
            </div>
            <div className="card-body text-left px-5 mt-3 mt-lg-0">
              <h4 className="card-title text-uppercase fw-bold my-4">
                {item.title}
              </h4>
              <h6 className="card-text pb-3">
                Lorem ipsum sit amet consectetur adipisicing...
              </h6>
              <hr
                style={{
                  width: "100%",
                  borderWidth: "0.12rem",
                  borderColor: "#000",
                  borderStyle: "solid",
                }}
              />
              <h5>
                <span className="fw-bold ">Location </span>0.3 miles.
              </h5>
            </div>
          </div>
        ))}
      </div>
        <div className="w-full text-center mt-4 ">
          <button type="button" className="btn btn-outline-primary px-5 ">Submit</button>
        </div>
    </div>
  );
};

export default PlaceToVisit;
