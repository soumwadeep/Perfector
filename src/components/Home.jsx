import { useEffect } from "react";
import homepic from "../images/home.webp";
import { NavLink } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.title = "Home | Perfector";
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Welcome To Perfector</h1>
                <br />
                <p>
                  Feeling Depressed Due To Lack Of Practice? Want To Excel in
                  Your Daily Tasks?
                </p>
                <p>
                  Look No Further! Perfector Is Here To Help You Overcome Your
                  Weaknesses And Succeed In Your Favorite Subjects. With
                  Perfector, You Can Create Personalized To-do Lists Focused On
                  The Areas You Want To Improve. By Breaking Down Your Goals
                  Into Manageable Daily Tasks, You&apos;ll Be Well On Your Way
                  To Achieving Success!
                </p>
                <p>
                  Don&apos;t Let A Lack Of Practice Bring You Down. With
                  Perfector, You&apos;ll Stay Motivated And Make Progress Every
                  Day. Start Using Perfector Today And Unlock Your Full
                  Potential!
                </p>
                <NavLink to="/SignUp">
                <button className="btn btn-success btn-lg btngo">
                  Cick To Register Now! It&apos;s 100% Free!! &rarr;
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={homepic} alt="home" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
