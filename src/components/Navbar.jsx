import React from "react";
import Logo from "../assets/nav-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { styles } from "../style";

const Navbar = () => {
  return (
    <nav
      className={`screen-nav ${styles.boxGapX} ${styles.boxGapY} navbar navbar-expand-lg navbar-light position-absolute z-3 `}
    >
      <div className="container d-flex align-items-end">
        <div className="navbar-brand fs-3 d-flex align-items-end">
          <img src={Logo} className="nav-logo me-1 me-xl-3" alt="Logo" />
          Hiking <span className="navbar-brand-span ms-2 me-2">Life</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-medium text-light">
            <li className="nav-item">
              <a className="nav-link mx-4" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#">
                Class
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#">
                Promo
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#">
                Online Class
              </a>
            </li>
            <li className="nav-item ms-4 me-0">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
