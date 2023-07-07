/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../AppwriteConfig";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import profile from "../images/profile.webp";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);
        console.log(response);
      } catch (error) {
        console.log(error);
        navigate("/SignIn");
      }
    };

    fetchData();
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

  const formatRegistrationDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div>
      <Sidebar />
      <section className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Your Profile</h1>
                  <h4>Name: {userDetails?.name}</h4>
                  <h4>Mobile No: {userDetails?.$id}</h4>
                  <h4>Email: {userDetails?.email}</h4>
                  <h4>
                    Registered On:{" "}
                    {formatRegistrationDate(userDetails?.registration)}
                  </h4>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={profile} alt="profile" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
