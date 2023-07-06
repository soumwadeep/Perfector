import { NavLink } from "react-router-dom";
import logo from "../images/icon.webp";
const root = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-center">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo" /> Perfector
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link-active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
                to="/About"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link-active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
                to="/Contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link-active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
                to="/SignUp"
              >
                Sign Up
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "nav-link-active"
                    : isPending
                    ? "nav-link"
                    : "nav-link"
                }
                to="/SignIn"
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default root;
