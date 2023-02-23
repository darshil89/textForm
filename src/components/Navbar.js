import React from "react";
import PropTypes from "prop-types";
import { NavLink,Outlet } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
    <nav
    className={`navbar navbar-expand-lg navbar-${props.currState =="light_dark"?(props.mode):(props.mode2)} bg-${props.currState =="light_dark"?(props.mode):(props.mode2)}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {props.aboutText}
              </NavLink>
            </li>
          </ul>

          <div
            className={`form-check form-switch mx-2 text-${
              props.currState =="light_dark"?(props.mode === "light" ? "dark" : "light"):(props.mode2 === "light" ? "dark" : "light")
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Dark Mode" : "Light Mode"}
            </label>
          </div>

          {/* Green Button */}
          <div
            className={`form-check form-switch mx-2 text-${
              props.currState =="light_dark"?(props.mode === "light" ? "dark" : "light"):(props.mode2 === "light" ? "dark" : "light")
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode2}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode2 === "light" ? "Green Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
    
    <Outlet></Outlet>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text Here",
};
