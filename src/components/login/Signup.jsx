import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { signup } from "../../helper/apiPath";
import Otp from "./Otp";
import { setLoginResponse } from "../../redux/actions/index.js";
import { connect } from "react-redux";

const Signup = (props) => {
  const [emailid, setEmailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isToken, setIsToken] = React.useState(false);

  const [loginBody, setLoginBody] = React.useState({});

  function mySubmitHandle(event) {
    event.preventDefault();
  }

  function signupReq(loginBody) {
    Axios.post(signup, loginBody)
      .then((res) => {
        if (res.data.token) {
          setIsToken(true);
          setToken(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {isToken ? (
        <div>
          <Otp token={token} />
        </div>
      ) : (
        <div className="loginPage p-5 mx-auto d-block">
          <img
            className="mx-auto d-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />

          <p id="ehsLogoLabel" className="text-center mt-3">
            Create Account
          </p>

          <form
            onSubmit={(e) => {
              signupReq(loginBody);
              mySubmitHandle(e);
            }}
          >
            <input
              className="mx-auto d-block mt-3"
              id="loginUserEmail"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              type="text"
              onChange={(e) => {
                document.getElementById("loginUserPhone").value = "";
                setEmailId(e.target.value);
                setLoginBody({
                  emailid: e.target.value,
                  password: password,
                });
              }}
              placeholder="Email"
            />

            <p className="text-center mt-2`">or</p>

            <input
              className="mx-auto d-block "
              id="loginUserPhone"
              pattern="[0-9]{10}"
              type="text"
              onChange={(e) => {
                document.getElementById("loginUserEmail").value = "";
                setPhonenumber(e.target.value);
                setLoginBody({
                  password: password,
                  phonenumber: e.target.value,
                });
              }}
              placeholder="Phone Number"
            />
            <input
              className="mx-auto d-block mt-3"
              id="loginUserPass"
              type="password"
              minLength="6"
              onChange={(e) => {
                setPassword(e.target.value);
                if (loginBody.emailid) {
                  setLoginBody({
                    emailid: emailid,
                    password: e.target.value,
                  });
                } else if (loginBody.emailid) {
                  setLoginBody({
                    phonenumber: phonenumber,
                    password: e.target.value,
                  });
                } else {
                  setLoginBody({
                    emailid: emailid,
                    phonenumber: phonenumber,
                    password: e.target.value,
                  });
                }
              }}
              placeholder="Password"
            />

            <button
              id="loginBtn"
              className="mt-4"
              style={{ marginLeft: "13px" }}
              type="submit"
            >
              Sign Up
            </button>

            <p className="text-center mt-2">or</p>
            <Link
              className="d-block "
              to="/login"
              style={{ marginLeft: "13px" }}
            >
              <button id="signupBtn">Log In</button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginResponse: (payload) => dispatch(setLoginResponse(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
