import React,{useState} from "react";
import "./Login.css";
import EhsLogo from "../../images/EhsLogo2.png";
import { setLoginResponse } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
import Axios from "axios";
import {API} from "../../backend"
import { login, verifyOtp } from "../../helper/apiPath";
import { connect } from "react-redux";
import swal from "sweetalert";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useForm } from "react-hook-form";

const Login = (props) => {

  const [name, setName] = useState("Shubh");

  function session(r) {
    localStorage.setItem("userDetails123", JSON.stringify(r));
  }

  function responseFun(d) {
    if (d === "Successful") {
      window.location.replace("http://" + window.location.host + "/");
    } else {
      document.getElementById("loginErrorMsg").innerHTML ="**"+d;
     // $("#loginErrorMsg").text(d);
    }
  }

  function loginReq(loginbody) {
    Axios.post(`${API}auth/login`, loginbody)
      .then((res) => {
        session(res.data.data.user_details);
        props.setLoginResponse(res.data.data.session_token);
        localStorage.setItem("ehstoken12345678910", res.data.data.session_token);
        responseFun(res.data.message);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }
  
  const { register, formState: {errors}, handleSubmit } = useForm({
    mode: "onTouched"
  })

  const onSubmit= (data) => {
    let phonenumber= "";
    if(!(data.emailid.match(/^(?:\w+@\w+\.\w{2,3})$/))){
      phonenumber = data.emailid;
      data.emailid= "";
    }
    const loginbody = {
      email: data.emailid,
      phone: phonenumber,
      password: data.password
    }
    loginReq(loginbody);
    //console.log(loginbody);
  }

  return (
    <>
      <div className="loginPage p-1 pt-5 pb-5  p-sm-3 mx-auto mt-5 mt-sm-4 mb-5 mb-sm-4 d-block">
        <div className="d-flex justify-content-center align-items-center mb-4 mb-sm-3">
          <AccountBoxIcon id="accountIcon" />
          <img
            className=" d-inline-block"
            id="ehsLogoImg"
            src={EhsLogo}
            alt="Ehs Logo"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            className="mx-auto d-block mt-3 " 
            id="loginUserEmail"  
            placeholder="Email Address / Mobile Number" 
            name="emailid"
            {...register("emailid",{
              required: "**this field is required",
              pattern: {
                    value: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                    message: "please enter valid email / phone"
                  }
            })}
            />
            {errors.emailid && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.emailid.message}</span>)}
          <input
            className="mx-auto d-block mt-2 "
            id="loginUserPass"
            type="password"
            placeholder="Password"
            name="password"
            {...register("password",{
              required: "**this field is required",
              minLength: {
                value: 8,
                message: "Password must be atleast 8 characters long..."
              }
            })}
          />
          {errors.password && (<span className="text-danger ml-4 d-block mt-0 errorMsg">{errors.password.message}</span>)}
          
          <div className="keepSignedIn ml-3 mt-1 d-inline-block">
            <input 
            type="checkbox"
            name="SignedIn"
            {...register("SignedIn")}
              />
            <span className="ml-1">Keep me Signed In</span>
          </div>

          
        
        
        <Link to="/forgotpassword">
        <p className="d-inline-block forgotPassword float-right mr-3 mt-1">Forgot Password?</p>
        </Link>
        <span className="text-danger d-block mb-2 ml-4 mt-0 errorMsg" id="loginErrorMsg"></span>

        <div className="pt-0  " style={{ marginLeft: "13px", }}>
          <button
            id="loginBtn"
            className="mt-0"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
          <p className="or  m-0 p-0">or</p>

        <Link
          className="mt-1 d-block"
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
