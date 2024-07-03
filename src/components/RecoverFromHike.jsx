import React from "react";
import { RecoverHike } from "../data";
import Img1 from "../assets/RecoverFromHike/Img1.jpg";
import cross from "../assets/cross-blue.svg";
import { styles } from "../style";

const RecoverFromHike = () => {
  return (
    <div
      className={` position-relative ${styles.boxGapX} ${styles.paddingY} ${styles.marginY} section d-flex flex-column`}
    >
      <div className="d-flex flex-column flex-xl-row align-items-center align-items-xl-start text-center text-xl-start ">
        <div className="recover-cross d-flex align-items-center align-items-xl-start flex-column me-4 h-100">
          <img src={cross} className="mb-2" style={{ width: "2rem" }} alt="" />
          <img src={cross} className="mt-2" style={{ width: "2rem" }} alt="" />
        </div>
        <h3 className=" text-center text-xl-start mt-xl-0 mt-4 ">
          How to recover from <br className="hide" />a hike
          <hr
            style={{
              width: "6rem",
              borderWidth: "0.3rem",
              borderColor: "#00C9E1",
              borderStyle: "solid",
            }}
          />
        </h3>
      </div>

      <div className="d-flex flex-xl-row flex-column justify-content-center justify-content-xl-between align-items-center align-items-xl-center">
        <div className="w-100 me-xl-5">
          {RecoverHike.map((item) => (
            <div
              key={item.id}
              className="card d-flex flex-sm-row flex-column justify-content-center justify-content-xl-start align-items-center align-items-xl-start my-5 py-5  px-5 w-100 "
            >
              <img
                src={item.img}
                style={{ width: "9rem" }}
                className="drop-shadow-1"
                alt=""
              />
              <ul class="list-group fs-4 fw-medium fst-italic mt-4 mt-xl-0 ms-sm-5 ps-xl-5">
                <li class="list-group-item">{item.li1}</li>
                <li class="list-group-item">{item.li2}</li>
                <li class="list-group-item">{item.li3}</li>
                <li class="list-group-item">{item.li4}</li>
                <li class="list-group-item">{item.li5}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className=" d-flex justify-content-center justify-content-xl-end align-items-center align-items-xl-end text-start flex-column h-100 ">
          <img
            src={Img1}
            style={{
              width: "30rem",
              height: "30rem",
              objectFit: "cover",
              borderRadius: "100%",
            }}
            alt=""
          />
          <p
            className="cursive text-uppercase text-center text-xl-start fw-bold lh-base fst-italic mt-5 ps-xl-5 ms-xl-5 w-75"
            style={{ fontSize: "2.3rem", color: "#ff8c00" }}
          >
            Make Sure Your <br className="hide" /> Gear Fits
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverFromHike;
