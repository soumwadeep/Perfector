import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { account } from "../AppwriteConfig";
const Sidebar = () => {
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="btn btn-warning sticky-top mb-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i> &nbsp;Menu
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Perfector
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link-active" : isPending ? "nav-link" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <br />
          <NavLink
            className="btn btn-danger text-center"
            onClick={handleLogout}
          >
            Sign Out
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
