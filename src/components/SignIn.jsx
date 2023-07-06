import { useState } from "react";
import { useNavigate , NavLink} from "react-router-dom";
import { account, databases } from "../AppwriteConfig";
import signinpic from "../images/login.webp";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);

    try {
      // Fetch User Details From The Database
      const dataPromise = databases.listDocuments(
        "64a655223c7d1fc593e5",
        "64a65532da54fa6f88dd"
      );
      const dataResponse = await dataPromise;
      const userExists = dataResponse.documents.find(
        (doc) => doc.email === user.email && doc.password === user.password
      );

      if (userExists) {
        // eslint-disable-next-line no-unused-vars
        const response = await account.createEmailSession(
          user.email,
          user.password
        );
        // console.log(response);
        navigate("/Dashboard");
      } else {
        alert("Invalid Credentials");
        setIsSigningIn(false);
        return;
      }
    } catch (error) {
      console.error(error);
    }

    setIsSigningIn(false);
  };

  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={signinpic} alt="signin" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Sign In</h1>
                <br />
                <form method="post">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        setUser({
                          ...user,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={loginUser}
                    disabled={isSigningIn}
                  >
                    {isSigningIn ? "Signing In..." : "Sign In"}
                  </button>
                  <p className="mt-3">
                    New User?
                    <NavLink
                      to="/SignUp"
                      style={{ color: "orangered", fontWeight: "900px" }}
                    >
                      {" "}
                      Register Now
                    </NavLink>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
