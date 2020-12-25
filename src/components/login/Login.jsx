import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo.svg";
import { Checkbox } from "@material-ui/core";

const Login = () => {
  return (
    <>
      <div className="loginPage p-5 mx-auto d-block">
        <img
          className="mx-auto d-block"
          id="ehsLogoImg"
          src={EhsLogo}
          alt="Ehs Logo"
        />

        <p id="ehsLogoLabel" className="text-center mt-3">
          Log Into your account
        </p>

        <input
          className="mx-auto d-block mt-3"
          id="loginUserEmail"
          type="text"
          placeholder="Username/Email Address"
        />

        <input
          className="mx-auto d-block mt-3"
          id="loginUserPass"
          type="text"
          placeholder="Password"
        />
        <p className="ml-3 mt-1" id="loginForgetPassword">
          Forgot Password?
        </p>

        <div className="mt-5">
          <div>
            <input id="keepSignIn" type="checkbox" style={{ background: "#D2D2D2" }} />
            Keep me Signed In
          </div>
          <button id="loginBtn">Log In</button>
        </div>

        <p className="text-center">or</p>
        <div className="mx-auto d-block">
          <button id="signupBtn">Create an account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
