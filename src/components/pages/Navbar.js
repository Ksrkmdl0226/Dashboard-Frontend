import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow-lg fixed-top"
        style={{ backgroundColor: "#16113C" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-light fw-normal">
            <span className="ms-2 fs-4 fw-medium">
              Support Team Slide Dashboard
            </span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-light"
                  aria-current="page"
                  onClick={() => navigate("/home")}
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm ms-2 btn-outline-light"
                  onClick={() => {
                    if (window.confirm("Are you sure want to logout ?")) {
                      localStorage.removeItem("accessToken");
                      navigate("/");
                    }
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5">{children}</div>
    </div>
  );
};

export default Navbar;
