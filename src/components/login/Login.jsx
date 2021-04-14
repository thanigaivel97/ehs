import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo2.png";
import { setLoginResponse } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import Axios from "axios";
import { login } from "../../helper/apiPath";
import { connect } from "react-redux";
import swal from "sweetalert";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
      window.location.replace("http://" + window.location.host + "/");
    } else {
      swal("Oops", d, "error");
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
      <div className="loginPage p-1 pt-5 pb-5  p-sm-5 mx-auto mt-5 mb-5 d-block">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <AccountBoxIcon id="accountIcon" />
          <img
            className=" d-inline-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>


        <input
          className="mx-auto d-block mt-3 mb-3"
          id="loginUserEmail"
          pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
          type="text"
          onChange={(e) => {
            document.getElementById("loginUserPhone").value = "";
            setEmailId(e.target.value);
            setLoginBody({ emailid: e.target.value, password: password });
          }}
          placeholder="Username/Email Address"
        />

        {/*<input
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
        />*/}

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
        <div className="keepSignedIn ml-3 mt-1 d-inline-block">
          <input type="checkbox" />
          <span className="ml-1">Keep me Signed In</span>
        </div>
        <p className="d-inline-block forgotPassword float-right mr-3 mt-1">Forgot Password?</p>


        <div className="mt-2" style={{ marginLeft: "13px" }}>
          <button
            id="loginBtn"
            className="mt-2"
            onClick={() => loginReq(loginBody)}
          >
            Log In
          </button>
        </div>

          <p className="or">or</p>

        <Link
          className="mt-3 d-block"
          style={{ marginLeft: "13px" }}
          to="/signup"
        >
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
