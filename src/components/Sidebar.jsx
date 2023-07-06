import { NavLink } from "react-router-dom";
import { account } from "../AppwriteConfig";
const Sidebar = () => {
    const handleLogout = async () => {
        try {
          await account.deleteSession("current");
        } catch (error) {
          alert(error);
          console.log(error);
        }
      };
  return (
    <>
      <button
        className="btn btn-primary"
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
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/" onClick={handleLogout}>Sign Out</NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
