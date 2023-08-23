import React, { useState } from "react";
import { GoogleSignInAPI, LoginAPI, RegisterAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/linkedinlogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  let navigate = useNavigate();

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed in to Linkedin");
      navigate("/home");
    } catch (err) {
      toast.error("Please Check your credentials");
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
          <h1 className="heading">Sign in</h1>
          <p className="sub-heading">Stay updated on your professional world</p>
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
            Sign in
          </button>
        </div>

        <div className="google-btn-container">
          <hr className="hr-text" data-content="or" />
          <GoogleButton onClick={googleSignIn} />
          <p className="go-to-signup">
            New to LinkedIn?{" "}
            <span className="join-now" onClick={() => navigate("/register")}>
              Join now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
