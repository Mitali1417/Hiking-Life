import React from "react";
import Img1 from "../assets/hero-bg.jpg";
import { styles } from "../style";

const RockClimbing = () => {
  return (
    <div>
      <div className={`${styles.boxGapX} ${styles.boxGapY} ${styles.paddingY} section mx-xl-5 d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center h-100`}>
        <div className="lh-xl w-100">
          <h2 className="fw-bold text-center text-xl-start w-full ">
            Rock <br className="hide" /> Climbing
          </h2>
          <h3 className="text-uppercase fw-bold mt-5 mb-3">
            1. Classes & Events
          </h3>
          <p className="fs-4 w-75 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatem atque, accusantium non illo voluptatum tenetur dolore
            mollitia aliquam veniam quam, veritatis alias porro recusandae
            reprehenderit error doloribus qui ratione.
          </p>{" "}
          <hr
            style={{
              width: "35rem",
              borderWidth: "0.1rem",
              borderColor: "#00C8DC",
              borderStyle: "solid",
            }}
          />
          <p className="fs-4 lh-base my-5 ">
            10 Modules <br /> divided into 7 weekends{" "}
          </p>
          <div className="d-flex flex-row fs-4 fw-bold lh-base">
            <div className="d-flex flex-column me-5 ">
              <p>
                Start <br />
                April 15 <br /> 20.00 hs
              </p>
            </div>
            <div className="d-flex flex-column ">
              <p>
                Price <br /> $900
              </p>
            </div>
          </div>
        </div>
        <div className="my-5 w-100 d-flex justify-content-center justify-content-xl-end  align-items-center flex-column position-relative h-100 pe-xl-5">
          <img
            src={Img1}
            style={{
              width: "30rem",
              height: "30rem",
              borderRadius: "100%",
              objectFit: "cover",
            }}
            alt=""
          />
          <p
            className="cursive text-uppercase fw-bold lh-base fst-italic mt-5 "
            style={{ fontSize: "2.3rem", color: "#ff8c00" }}
          >
            Walking in nature <br /> as a recreational activity
          </p>
        </div>
      </div>
      <div className="bg-dark">
        <div className="rock-climb-bg text-light ">
          <div className={`${styles.boxGapX}  rock-climb-text d-flex flex-column justify-content-center align-items-start h-100`}>
            <h2 className=" my-3" style={{ fontSize: "3.5rem" }}>
              Big Bend National Park <br /> Hiding Guide
            </h2>
            <h4 className="text-uppercase my-3 lh-base">
              This Hike is the Next Best <br /> Option.
            </h4>
            <h4 className="text-uppercase my-3">Lorem Ipsum</h4>
            <button
              type="button"
              className="my-3 btn btn-outline-primary text-light "
            >
              see more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockClimbing;
