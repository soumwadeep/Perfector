import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/icon.webp";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen((state) => !state);
  }

  // Add toggleNav() in each navlink to close the navbar after clicking on a link.
  // add data-bs-dismiss={navOpen ? "offcanvas" : "none"} to the offcanvas div or mobile nav div

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg text-center">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={icon} alt="Logo" className="logo" /> <b>Perfector</b>
          </NavLink>
          <button
            onClick={toggleNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="navbarOffcanvasNavbarLabel"
            data-bs-dismiss={navOpen ? "offcanvas" : "none"}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Perfector
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="main-bar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "nav-link-active" : "nav-link"
                    }
                    to="/About"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      toggleNav();
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "nav-link-active" : "nav-link"
                    }
                    to="/Contact"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      toggleNav();
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "nav-link-active" : "nav-link"
                    }
                    to="/SignUp"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      toggleNav();
                    }}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "nav-link-active" : "nav-link"
                    }
                    to="/SignIn"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      toggleNav();
                    }}
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
