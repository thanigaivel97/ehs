import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo2.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { signup } from "../../helper/apiPath";
import Otp from "./Otp";
import $ from "jquery"
import { setLoginResponse } from "../../redux/actions/index.js";
import { connect } from "react-redux";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Signup = (props) => {
  const [emailid, setEmailId] = React.useState("");
  const [name, setName] = React.useState("");
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

  const otpBox = () => {
    $("#otpNote").removeClass("otpBoxShow");
    $("#otpNote").addClass("otpBoxHide");
    $("#otpNoteSuccess").removeClass("otpBoxHide");
    $("#otpNoteSuccess").addClass("otpBoxShow");
    $(".otpBox").addClass("otpBoxShow");
  }

  return (
    <>
      {isToken ? (
        <div>
          <Otp token={token} />
        </div>
      ) : (
        <div className="loginPage p-1 pt-5 pb-5 p-sm-5 mx-auto mt-5 mb-5 d-block">
        <div className="d-flex justify-content-center align-items-center">
          <AccountBoxIcon id="accountIcon" />
          <img
            className=" d-inline-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>



          <form
            onSubmit={(e) => {
              signupReq(loginBody);
              mySubmitHandle(e);
            }}
          >

            <input
              className="mx-auto d-block mt-3"
              id="loginUserEmail"
              pattern="[a-zA-Z]"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              className="mx-auto d-block mt-3"
              id="loginUserEmail"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              type="text"
              onChange={(e) => {
                setEmailId(e.target.value);
                setLoginBody({
                  emailid: e.target.value,
                  password: password,
                });
                otpBox();
              }}
              placeholder="Email or Phone Number"
            />
            <p id="otpNote" className="note otpBoxShow">We will send you a verification link at your Email address or Mobile Number. Kindly click to verify your account. </p>

            <p id="otpNoteSuccess" className="note otpBoxHide text-success">OTP sent successfully!!! </p>
           {/* <input
              className="mx-auto d-block mt-3 "
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
            />*/}
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
            <p className="note ">The password should be at least 8 characters long. Add numbers and symbols to make it stronger. </p>

                <input
                
              className=" mx-auto otpBox mt-3 otpBoxHide "
              id="loginUserEmail"
              type="text"
              onChange={(e) => {
                setLoginBody({
                  token: props.token,
                  code: e.target.value,
                });
              }}
              placeholder="OTP"
            />
            <span className="resendOTP otpBox otpBoxHide " style={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#40CEFC",
            }}>Resend OTP</span>
          

            <button
              id="loginBtn"
              className="mt-3"
              style={{ marginLeft: "13px" }}
              type="submit"
            >
              Register
            </button>
              <Link className="d-block registerAs mt-2 mx-auto" to="/login" >
              To register as a Distributor or Designer, click here.
              </Link>
              <p className="mt-4" style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                textAlign: "center",
                color: "#000000"
              }}>Already have an account?</p>
            <Link
              className="d-block mt-3 "
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
