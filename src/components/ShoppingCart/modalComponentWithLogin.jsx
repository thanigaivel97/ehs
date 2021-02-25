// import React from "react";
// import EhsLogo from "../../images/EhsLogo.svg";
// import { TextField } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Axios from "axios";
// import { otp, verifyOtp } from "../../helper/apiPath";

// export default function ModalComponentWithLogin(props) {

//   const [ot, setOtp] = React.useState(false);
//   const [otpVerified, setOtpVerified] = React.useState(false);
//   const [but, setbut] = React.useState("Send Otp");
//   const [name, setName] = React.useState("");
//   const [code, setCode] = React.useState("");
//   const [phonenumber, setPhonenumber] = React.useState("");

//   const [door, setDoor] = React.useState("");
//   const [street, setStreet] = React.useState("");
//   const [city, setCity] = React.useState("");
//   const [pin, setPin] = React.useState("");

//   function verify() {
//     if (!ot && but !== "Proceed To Checkout") {
//       Axios.post(otp, { phonenumber: phonenumber }).then((res) => {
//         if (res.data.success) {
//           setOtp(true);
//           setbut("Verify");
//         } else alert(res.data.message);
//       });
//     } else if (door || street || city || pin) {
//       if (!door && !street && !city && !pin) {
//         alert("Please Fill All Details");
//       } else {
//         let addr =
//           "Door:" +
//           door +
//           "  |  Street:" +
//           street +
//           "  |  City:" +
//           city +
//           "  |  Pincode:" +
//           pin;
//         let json = {
//           name: name,
//           addr: addr,
//           phonenumber: phonenumber,
//         };
//         localStorage.setItem("orderUser", JSON.stringify(json));
//         props.proceedWithoutLogin();
//       }
//     } else if (code !== "" && otpVerified === false) {
//       Axios.get(verifyOtp + "/" + phonenumber + "/" + code).then((res) => {
//         if (res.data.success) {
//           alert(res.data.message);
//           setOtpVerified(true);
//           setOtp(false);
//           setCode("");
//           setbut("Proceed To Checkout");
//         } else alert(res.data.message);
//       });
//     } else {
//     }
//   }

//   return (
//     <>
//       <div className="loginPage p-5 mx-auto d-block">
//         <img
//           className="mx-auto d-block"
//           id="ehsLogoImg"
//           src={EhsLogo}
//           alt="Ehs Logo"
//         />

//         <p id="ehsLogoLabel" className="text-center mt-3">
//           Personal Information
//         </p>
        
//             <TextField
//               label="Enter Doornumber"
//               className="ml-4 mt-3"
//               variant="outlined"
//               onChange={(e) => {
//                 setDoor(e.target.value);
//               }}
//             />
//             <TextField
//               label="Enter Street"
//               className="ml-4 mt-3"
//               variant="outlined"
//               onChange={(e) => {
//                 setStreet(e.target.value);
//               }}
//             />
//             <TextField
//               label="Enter City"
//               className="ml-4 mt-3"
//               variant="outlined"
//               onChange={(e) => {
//                 setCity(e.target.value);
//               }}
//             />
//             <TextField
//               label="Enter Pincode"
//               className="ml-4 mt-3"
//               variant="outlined"
//               onChange={(e) => {
//                 setPin(e.target.value);
//               }}
//             />
//         <Button
//           variant="contained"
//           color="primary"
//           className="ml-4 mt-3"
//           style={{ width: "223px", height: "60px", fontSize: "15px" }}
//           onClick={verify}
//         >
//          Proceed To Checkout
//         </Button>
//       </div>
//     </>
//   );
// }
