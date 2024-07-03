import React from "react";
import logo from "../assets/footer-logo.svg";
import { styles } from "../style";

const Footer = () => {
  return (
    <>
      <div
        className={`${styles.boxGapX} ${styles.marginY} ${styles.paddingY} d-flex justify-content-center justify-content-xl-between align-items-center align-items-xl-start flex-column flex-xl-row  `}
      >
        <div className={`${styles.boxGapX} w-100`}>
          <div>
            <h4 className="text-uppercase pb-2">About</h4>
            <h6 className="lh-base">
              Lorem ipsum dolor sit amet consect <br className="hide" />{" "}
              adipisicing elit. Cupiditate maiores unde ad! Ducimus quas
              eligendi esse iste aliquam.
            </h6>
          </div>
          <div className="navbar-brand fs-3 d-flex align-items-end mt-5">
            <img src={logo} className="nav-logo me-2" alt="Logo" />
            Hiking <span className="navbar-brand-span ms-2">Life</span>
          </div>
        </div>
        <div
          className={`${styles.boxGapX} w-100 d-flex justify-content-between align-items-center flex-row fw-medium `}
          style={{
            fontSize: "1.14rem",
            lineHeight: "0.7rem",
            marginTop: "3rem",
          }}
        >
          <div>
            <h6 className="fw-bold mb-5 text-uppercase">About</h6>
            <div>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
          <div>
            <h6 className="fw-bold mb-5 text-uppercase">About</h6>
            <div>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
          <div>
            <h6 className="fw-bold mb-5 text-uppercase">About</h6>
            <div>
              <p>Team</p>
              <p>Join us</p>
              <p>Ethic</p>
              <p>Goals</p>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          minWidth: "100%",
          border: "2rem solid #00C7E4",
          position: "absolute",
        }}
      />
    </>
  );
};

export default Footer;
