import React from "react";
import Img1 from "../assets/IceClimbing/Img1.jpg";
import { styles } from "../style";

const IceClimbing = () => {
  return (
    <>
      <div
        className={` ${styles.paddingX}  ${styles.paddingY} section text-light d-flex flex-column flex-xl-row justify-content-between align-items-center h-100`}
        style={{ background: "#16212C" }}
      >
        <div className={`${styles.boxGapX} m-xl-5 py-5 w-100 d-flex justify-content-center justify-content-xl-end align-items-center flex-column position-relative h-100`}>
          <img
            src={Img1}
            className="img1"
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
            style={{ fontSize: "2.3rem", color: "#00C8DC" }}
          >
            Walking in nature <br className="hide" /> as a recreational activity
          </p>
        </div>
        <div className={`${styles.boxGapX}  d-flex justify-content-center justify-content-xl-end w-100 pe-xl-5 me-xl-5 my-5 my-xl-0 py-5 py-xl-0`}>
          <div className="lh-xl w-100">
            <h2 className="fw-bold">
              Mountaineering <br className="hide" /> Ice Climbing
            </h2>
            <h3 className="text-uppercase fw-bold mt-5 mb-3">2. Activities</h3>
            <p className="fs-4">
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
              17 Modules <br className="hide" /> divided into 5 weekends{" "}
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
        </div>
      </div>
      <div className="bg-dark">
        <div className="rock-climb-bg text-light ">
          <div
            className={`${styles.boxGapX} text-center rock-climb-text d-flex flex-column justify-content-center align-items-center h-100 `}
          >
            <h3 className="fst-italic lh-base ">
              The Asanas Purify our body and <br className="hide" /> keep it healthy, making it a
              suitable <br className="hide" /> vehicle for the soul.
            </h3>
            <button
              type="button"
              className="my-3 px-5 btn btn-outline-primary text-light "
            >
              see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IceClimbing;
