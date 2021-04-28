import React from "react";
import "./Login.css";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const MySwal = withReactContent(Swal);

const ForgotPass = () => {
    const resetConfirm = () =>{
        MySwal.fire({
            html: <div className="d-flex mt-2">
                       <CheckCircleIcon style={{color: "#0C9B86"}} />
                        <div className="text-left">
                        <p className="ml-3 " style={{color: "#0C9B86"}}>Password Reset Complete!</p>
                        <p className="ml-3" style={{
                          fontFamily: "Source Sans Pro",
                          fontWeight: "normal",
                          fontStyle: "normal",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#757575",
                          textAlign: "left"
                        }}>Kindly login again to access EHS Prints.</p>
                        </div>
                </div>,
            
            position: "top-end",
            timer: 3000,
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            height: "100px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            
        })
    };
    return(
        <div className="forgotBox mx-auto">
            <p className="forgotHead ">Password Reset</p>
            <div className="forgotNote">
            Forgotten your password? Enter your e-mail address/ mobile number below, and we'll send you an OTP.
            </div>
            <input className="forgotInput" type="text" pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/" placeholder="Email Address / Mobile" required/>
            <input className="forgotInput" type="number" placeholder="OTP" required/>
            <input className="forgotInput" type="password" placeholder="New Password" required/>
            <input className="forgotInput" type="password" placeholder="Confirm Password" />
            <button onClick={resetConfirm} className="resetBtn">Reset Password</button>        
        </div>
    );
};

export default ForgotPass;