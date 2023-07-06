import signuppic from "../images/signup.webp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account, databases } from "../AppwriteConfig";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | Perfector";
  }, []);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //   Register
  const registerUser = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (const key in user) {
      if (user[key] === "") {
        alert("Please Fill In All Fields!");
        return;
      }
    }

    const userId = user.phone;
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await account.create(
        userId,
        user.email,
        user.password,
        user.name
      );
      //   console.log(response);
      alert(
        "Welcome To Perfector! You Are Now Registered! Please Sign In To Our Platform To Continue..."
      );
      navigate("/SignIn");

      const docId = Date.now().toString();
      const documentData = {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
      };

      const promise = databases.createDocument(
        "64a655223c7d1fc593e5",
        "64a65532da54fa6f88dd",
        docId,
        documentData
      );

      //   console.log("Data", documentData);

      promise.then(
        // eslint-disable-next-line no-unused-vars
        function (response) {
          // console.log(response);
          // alert("Registered!"); // Success
          //   window.location.replace("/SignIn");
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={signuppic} alt="signup" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Sign Up Now</h1>
                <br />
                <form method="post">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      required
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
                      required
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
                    className="btn btn-warning"
                    onClick={registerUser}
                  >
                    Sign Up
                  </button>
                  <p className="mt-3">
                    Already Registered?
                    <NavLink
                      to="/SignIn"
                      style={{ color: "orangered", fontWeight: "900px" }}
                    >
                      {" "}
                      Login Now
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

export default SignUp;
