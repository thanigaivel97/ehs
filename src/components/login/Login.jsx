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
  const [password, setPassword] = React.useState("");
  const [loginBody, setLoginBody] = React.useState({
    emailid: "",
    password: "",
  });

  function session(r) {
    localStorage.setItem("userDetails123", JSON.stringify(r));
  }

  function responseFun(d) {
    if (d === "Logged in successfully!!!") {
      alert(d);
      window.location.replace("http://localhost:3000/home");
    } else if (d === "user not found!!!") {
      alert(d);
      window.location.replace("http://localhost:3000/signup");
    } else if (d === "Password doesn't match!!!") {
      alert(d);
    } else {
      alert(d);
    }
  }

  function loginReq(loginBody) {
    console.log(loginBody);
    Axios.post(login, loginBody)
      .then((res) => {
        responseFun(res.data.message);
        console.log(res);
        session(res.data);
        props.setLoginResponse(res.data);
        localStorage.setItem("ehstoken12345678910", res.data?.token);
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
          type="text"
          onChange={(e) => {
            setEmailId(e.target.value);
            setLoginBody({ emailid: e.target.value, password: password });
          }}
          placeholder="Username/Email Address"
        />

        <input
          className="mx-auto d-block mt-3"
          id="loginUserPass"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginBody({ emailid: emailid, password: e.target.value });
          }}
          placeholder="Password"
        />
        <p className="ml-3 mt-1" id="loginForgetPassword">
          Forgot Password?
        </p>

        <div className="mt-5 ml-3">
          <div>
            <input
              id="keepSignIn"
              type="checkbox"
              style={{ background: "#D2D2D2" }}
            />
            <p style={{ display: "inline", marginLeft: "10px" }}>
              Keep me Signed In
            </p>
          </div>
          <button
            id="loginBtn"
            className="mt-2"
            onClick={() => loginReq(loginBody)}
          >
            Log In
          </button>
        </div>

        <p className="text-center mt-2">or</p>
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
