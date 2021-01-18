import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo.svg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { signup } from "../../helper/apiPath";

const Signup = () => {
  const [emailid, setEmailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [loginBody, setLoginBody] = React.useState({
    emailid: "",
    password: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
  });

  function responseFun(d) {
    if (d === "User Created Successfully") {
      alert(d);
      window.location.replace("http://localhost:3000/");
    } else if (d === "User Already Exists!!!") {
      alert(d + " Login Please");
      window.location.replace("http://localhost:3000/");
    } else {
      alert(d);
      console.log(d);
    }
  }

  function mySubmitHandle(event) {
    event.preventDefault();
  }

  function loginReq(loginBody) {
    console.log(loginBody);
    Axios.post(signup, loginBody)
      .then((res) => {
        setTimeout(100);
        responseFun(res.data.message);
      })
      .catch((err) => {
        console.log(err);
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
          Create Account
        </p>

        <form
          onSubmit={(e) => {
            loginReq(loginBody);
            mySubmitHandle(e);
          }}
        >
          <input
            required
            className="mx-auto d-block mt-3"
            id="loginUserEmail"
            type="text"
            onChange={(e) => {
              setEmailId(e.target.value);
              setLoginBody({
                emailid: e.target.value,
                password: password,
                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,
                address: address,
              });
            }}
            placeholder="Username/Email Address"
          />

          <input
            required
            className="mx-auto d-block mt-3"
            id="loginUserPass"
            type="password"
            minLength="6"
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginBody({
                emailid: emailid,
                password: e.target.value,
                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,
                address: address,
              });
            }}
            placeholder="Password"
          />

          <input
            required
            className=" mt-3"
            id="loginUserEmail1"
            type="text"
            style={{ marginLeft: "13px" }}
            onChange={(e) => {
              setFirstname(e.target.value);
              setLoginBody({
                emailid: emailid,
                password: password,
                firstname: e.target.value,
                lastname: lastname,
                phonenumber: phonenumber,
                address: address,
              });
            }}
            placeholder="Firstname"
          />

          <input
            required
            className=" mt-3"
            id="loginUserEmail1"
            type="text"
            style={{ marginLeft: "13px" }}
            onChange={(e) => {
              setLastname(e.target.value);
              setLoginBody({
                emailid: emailid,
                password: password,
                firstname: firstname,
                lastname: e.target.value,
                phonenumber: phonenumber,
                address: address,
              });
            }}
            placeholder="Lastname"
          />

          <input
            required
            className="mx-auto d-block mt-3"
            id="loginUserEmail"
            type="text"
            pattern="[0-9]{10}"
            onChange={(e) => {
              setPhonenumber(e.target.value);
              setLoginBody({
                emailid: emailid,
                password: password,
                firstname: firstname,
                lastname: lastname,
                phonenumber: e.target.value,
                address: address,
              });
            }}
            placeholder="Phone Number"
          />
          <textarea
            required
            className="mx-auto d-block mt-3"
            id="loginUseraddress"
            rows="4"
            onChange={(e) => {
              setAddress(e.target.value);
              setLoginBody({
                emailid: emailid,
                password: password,
                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,
                address: e.target.value,
              });
            }}
            placeholder="Address"
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
          <Link className="d-block " to="/" style={{ marginLeft: "13px" }}>
            <button id="signupBtn">Log In</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
