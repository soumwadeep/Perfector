import { useEffect } from "react";
import contactpic from "../images/contact.webp";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Perfector";
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Contact Us</h1>
                <form
                  action="https://formsubmit.co/e827bd8fd2a95d7e7576547bb1aad862"
                  method="POST"
                >
                  {/* Email Preferences */}
                  <div>
                    <input
                      type="hidden"
                      name="_subject"
                      value="An User Has Just Send You A Message From Perfector's Contact Form.Please Have A Look!"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://perfector.soumwadeepguha.com/ThankYou"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="Name" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="Email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      name="Phone"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      type="text"
                      name="Message"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={contactpic} alt="contact" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
