import { Link } from "react-router-dom";
import logo from "../images/icon.webp";
const root = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <img src={logo} alt="logo" className="logo"/> Perfector
          </Link>
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
              <Link className="nav-link" to="/About">
                About Us
              </Link>
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
              <Link className="nav-link" to="/SignUp">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default root;
