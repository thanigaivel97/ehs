import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo.svg";
import { setLoginResponse } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import Axios from "axios";
import { login } from "../../helper/apiPath";
import { connect } from "react-redux";

const Login = (props) => {
  const [emailid, setEmailId] = React.useState("");
    const [phonenumber, setPhonenumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginBody, setLoginBody] = React.useState({});

  function session(r) {
    localStorage.setItem("userDetails123", JSON.stringify(r));
  }

  function responseFun(d) {
    if (d === "Logged in successfully!!!") {
      window.location.replace("http://localhost:3000/");
    } else {
      alert(d);
    }
  }

  function loginReq(loginBody) {
    Axios.post(login, loginBody)
      .then((res) => {
        session(res.data.user);
        props.setLoginResponse(res.data.token);
        localStorage.setItem("ehstoken12345678910", res.data?.token);
        responseFun(res.data.message);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

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
          pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
          type="text"
          onChange={(e) => {
            document.getElementById("loginUserPhone").value = "";
            setEmailId(e.target.value);
            setLoginBody({ emailid: e.target.value, password: password });
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

        <div className="mt-2 ml-3">
          <button
            id="loginBtn"
            className="mt-2"
            onClick={() => loginReq(loginBody)}
          >
            Log In
          </button>
        </div>

        <p className="text-center mt-1">or</p>
        <Link className="ml-3 d-block " to="/signup">
          <button id="signupBtn">Create an account</button>
        </Link>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
