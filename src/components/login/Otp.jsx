import React from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo.svg";
import { activate } from "../../helper/apiPath";
import Axios from "axios";

const Otp = (props) => {

  const [loginBody, setLoginBody] = React.useState({});

    function loginReq(loginBody) {
      
    Axios.get(`${activate}/${loginBody.token}/${loginBody.code}`)
        .then((res) => {
          alert(res.data.message);
          window.location.replace("http://" + window.location.host + "/login");
            props.setModalCarousel({
              one: false,
              two: true,
              three: false,
            });
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
          Verify your account
        </p>

        <input
          className="mx-auto d-block mt-3"
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

        <div className="mt-2 ml-3">
          <button
            id="loginBtn"
            className="mt-2"
            onClick={() => loginReq(loginBody)}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;
