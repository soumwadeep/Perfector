import { useEffect } from "react";
import aboutpic from "../images/about.webp";
const About = () => {
  useEffect(() => {
    document.title = "About Us | Perfector";
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={aboutpic} alt="about" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>About Perfector</h1>
                <br />
                <p>
                  Perfector Is A Dynamic Platform Meticulously Developed By
                  <a
                    href="https://www.linkedin.com/in/soumwadeepguha/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Soumwadeep Guha
                  </a>
                  , Utilizing The Power Of React.js And Appwrite. As The Driving
                  Force Behind Perfector, Our Team Is Committed To Providing
                  Users With A Seamless Experience In Their Journey Towards
                  Personal Growth And Excellence. Our Passion For Empowering
                  Individuals Led Us To Create A User-friendly Interface Where
                  Users Can Add Their Favorite Topics, Set Daily Tasks, And
                  Overcome Weaknesses Through Consistent Practice. With
                  Perfector, We Aim To Inspire And Motivate Users, Helping Them
                  Unlock Their True Potential In All Aspects Of Life. Join Us On
                  This Transformative Journey And Let Perfector Be Your Trusted
                  Companion On The Path To Success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
