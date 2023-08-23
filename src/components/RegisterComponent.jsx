import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/linkedinlogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

const RegisterComponent = () => {
  const [credentials, setCredentials] = useState({});

  let navigate = useNavigate();

  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created");
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div>
      <img src={LinkedInLogo} alt="" className="linkedinLogo" />
      <div className="login-wrapper">
        <div className="login-wrapper-inner">
          <h1 className="heading">Register</h1>
          <div className="auth-inputs">
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or Phone"
            />
            <input
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              type="password"
              className="common-input"
              placeholder="Password"
            />
          </div>
          <button onClick={login} className="login-btn">
            Agree & Join
          </button>
        </div>

        <div className="google-btn-container">
          <hr className="hr-text" data-content="or" />
          <GoogleButton onClick={googleSignIn} />
          <p className="go-to-signup">
            Already on LinkedIn{" "}
            <span className="join-now" onClick={() => navigate("/")}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
