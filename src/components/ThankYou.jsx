import { useEffect } from "react";
import thankyou from "../images/thankyou.webp";
const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You | Perfector";
  }, []);
  return (
    <>
      <section id="thankyou">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <h1>Thank You</h1>
                  <h5>
                    We Have Received Your Message!We Will Soon Contact You.Till
                    Then Have A Look At Our Awesome Features That Might Help
                    You!
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner" id="mobviewtextfix">
                  <img
                    src={thankyou}
                    className="imgfix"
                    id="animateimg"
                    alt="thank you"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
