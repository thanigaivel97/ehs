/* eslint-disable react-hooks/exhaustive-deps */
/*jshint esversion: 6 */
import { Grid } from "semantic-ui-react";
import React, { useEffect, useRef, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { Button } from "@material-ui/core";
import { Input } from "semantic-ui-react";
import CloseBtn from "../../images/ExitBtn.svg";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import $ from "jquery";
import DisInfect from "../../images/DisInfectant.svg";
import Axios from "axios";
import {API} from "../../backend"
import { Link } from "react-router-dom";
import ProductCard from "../signages/ProductCard";
import Typography from '@material-ui/core/Typography';
import {
  getOrdersById,
  getUserById,
  updateUser,
  findMat,
  findDim,
} from "../../helper/apiPath";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import swal from "sweetalert";
import Carousel, {consts} from "react-elastic-carousel";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { ContactMailSharp, Tune } from "@material-ui/icons";
import Pagination from '@material-ui/lab/Pagination';
import SafeTwo from "../../images/BeSafe.svg";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useForm} from "react-hook-form";


const MySwal = withReactContent(Swal);

const AddressCard = (props) => {
  const { register, handleSubmit } = useForm();
  const updateAddressPopup = (houseDetails,pincode,state,country) => {
    let address = houseDetails.split("|");
    const onSubmitEdit =(data)=>{
        let addressBody = {
        houseDetails: `${data.firstName}|${data.address1}|${data.address2}|${data.city}|${data.phonenumber}|${data.emailid}`,
        pincode: data.pincode,
        state: data.state,
        country: data.country
      }
        Axios.post(`${API}auth/add_user_details`,{
            address: addressBody,
           // add: 1
        },{   
            headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
            params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
        }).then((res)=>{
           console.log(res);
           MySwal.fire({
            html: <div className="d-flex mt-2">
                    <CheckCircleIcon style={{color: "#003459"}} />
                    <p className="ml-2" style={{color: "#003459"}}>Address Sucessfully Updated!</p>
                </div>,
            
            position: "top-end",
            timer: 2000,
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            height: "100px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            scrollbarPadding: false,
            showClass: {
              popup: 'animate__animated animate__zoomIn  animate__faster',
              backdrop: 'swal2-noanimation'
            },
            hideClass: {
              popup: 'animate__animated animate__slideOutRight  animate__faster',
              backdrop: 'animate__animated animate__fadeOut  animate__faster'
            }
            
        });
        }).catch((err)=>{
            console.log(err);
        })
    }
    MySwal.fire({
      html: <div className="">
              <p className="addAddressHead">Add Address</p>
              <hr style={{color: "#D2D2D2",marginBottom: "10px",marginTop: "0"}} />
              <form onSubmit={handleSubmit(onSubmitEdit)}>
              <input type="text" name="firstName" {...register("firstName")} defaultValue={address[0]} className="addAddressInput" required/>
              <input type="text" name="lastName" {...register("lastName")} placeholder="Last Name" className="addAddressInput d-none" />
              <input type="text" name="address1" {...register("address1")} defaultValue={address[1]} placeholder="address line 1" className="addAddressInput" required/>
              <input type="text" name="address2" {...register("address2")} defaultValue={address[2]} placeholder="address line 2" className="addAddressInput" />
              <input type="text" name="city" {...register("city")} defaultValue={address[3]} placeholder="City" className="addAddressInput" required/>
              <input type="text" name="state" {...register("state")} defaultValue={state} placeholder="State" className="addAddressInput" required/>
              <input type="text" name="country" {...register("country")} defaultValue={country} placeholder="Country" className="addAddressInput" required/>
              <input type="number" name="pincode" {...register("pincode")} defaultValue={pincode} placeholder="pincode" className="addAddressInput" required/>
              <input type="number" name="phonenumber" {...register("phonenumber")} defaultValue={address[4]} placeholder="Mobile" className="addAddressInput" />
              <input type="email" name="emailid" {...register("emailid")} defaultValue={address[5]} placeholder="Email" className="addAddressInput" />
              <button type="submit"  className="saveBtn">Save</button>
            </form>
            </div>,
            showConfirmButton: false,
            padding: "10px 0px 5px 0px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            position: "center",
            scrollbarPadding: false,
            showClass: {
              popup: 'animate__animated animate__zoomIn  animate__faster',
              backdrop: 'animate__animated animate__fadeIn  animate__faster'
            },
            hideClass: {
              popup: '',
              backdrop: ''
            }
    })
  };
  const confirmDeleteAddress = () => {
    const onCancel = () => {
      MySwal.clickCancel();
    }
    const onConfirm = () => {
      MySwal.clickConfirm();
    }
    MySwal.fire({
      html: <div className="">
              <div className="confirmationMsg ">
                Are you sure you want to remove this address?
              </div>
              <button className="confirmationBtn yesBtnMargin" onClick={onConfirm} >Yes</button>
              <button className="confirmationBtn" onClick={onCancel} style={{borderColor: "#C51D1D"}}>Cancel</button>
            </div>,
      position: "center",
      showConfirmButton: false,
      width: "700px",
      backdrop: "rgba(0, 0, 0, 0.5)",
      scrollbarPadding: false,
      padding: "23px 10px 22px 12px",
      showClass: {
        popup: 'animate__animated animate__zoomIn animate__faster',
        backdrop: 'animate__animated animate__fadeIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut animate__faster',
        backdrop: 'animate__animated animate__fadeOut animate__faster'
      }
    })
  };

  const {houseDetails,pincode,state,country} = props;
  let address = houseDetails.split("|");

  //console.log(country);
  //console.log(address);

  return(
      <div className="p-3" style={ props.default ? {
        width: "157px",
        height: "205px",
        background: "#FFF",
        border: "2px solid #2D9CDB",
        borderRadius: "4px",
        boxSizing: "border-box",
        padding: "10x 15px"
      } : {
        width: "157px",
        height: "205px",
        background: "#FFF",
        border: "1px solid #D2D2D2",
        borderRadius: "4px",
        boxSizing: "border-box",
        padding: "10x 15px"
      }}>
        <p className="" style={{
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#000000",
          marginBottom: "5px"
        }}>{address[0]}</p>
        <p className="addressLine">{address[1]}</p>
        <p className="addressLine">{address[2]},{address[3]}</p>
        <p className="addressLine">{state}, {country}, {pincode}</p>
        <p className="addressLine">{address[4]}</p>
        <div className="mt-1">
          <span onClick={() => updateAddressPopup(houseDetails,pincode,state,country)} className="passForgot">Edit</span>
          <span onClick={confirmDeleteAddress} className="passForgot float-right">Remove</span>
        </div>
        {  props.default ? (
          <p style={{
            fontSize: "13px",
            lineHeight: "16px",
            color: "#003459",
            fontWeight: "600"
          }}>Default</p>
        ):(
          <p style={{
            fontWeight: "bold",
            fontSize: "13px",
            lineHeight: "16px",
            textDecorationLine: "underline",
            color: "#F2994A",
          }}>Set as Default</p>
        )}
      </div>
  );
};

const PaymentCard = (props) => {
  return(
    <div className="p-2 pl-3" style={props.default ? {
      width: "211px",
      height: "144px",
      background: "#FFF",
      border: "2px solid #2D9CDB",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
    }:{
      width: "211px",
      height: "144px",
      background: "#FFF",
      border: "2px solid #D2D2D2",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
    }}>
      {  props.default ? (
          <p className="float-right " style={{
            fontSize: "13px",
            lineHeight: "16px",
            color: "#003459",
            fontWeight: "600"
          }}>Default</p>
        ):(
          <p className="float-right " style={{
            fontWeight: "bold",
            fontSize: "13px",
            lineHeight: "16px",
            textDecorationLine: "underline",
            color: "#F2994A",
          }}>Set as Default</p>
        )}
        <p className=" mt-4" style={{
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#000000",
          marginBottom: "8px"
        }}>{props.name}</p>
          <p className="addressLine">********7788</p>
          <p className="addressLine">Expiry: 04/2022</p>
          <p className="passForgot float-right">Remove</p>
    </div>
  );
};

const PersonalInfo = () => {
  const [name, setName] = React.useState("");
  const [authUser, setAuthUser] = React.useState("");
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("userDetails123"))){
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
        JSON.parse(localStorage.getItem("userDetails123")).phonenumber
        );
      setName(JSON.parse(localStorage.getItem("userDetails123")).name);
      setEmail(JSON.parse(localStorage.getItem("userDetails123")).emailid);
      setPhone(JSON.parse(localStorage.getItem("userDetails123")).phonenumber);
      setAddress(JSON.parse(localStorage.getItem("userDetails123")).address);
    }

    

  },[]);

  const { register,handleSubmit } = useForm();

  function updatePassword() {
    Axios.post(updateUser, {
      firstname: name,
      oldPassword: oldPassword,
      password: newPassword,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    })
      .then((res) => {
        if (res.data.message === "password Mismatch") {
          swal(res.data.message,"","error")
        }
        else {
          swal(res.data.message, "", "success");
        }
        return;
      })
      .catch((err) => swal(err));
  }
  function updateAddress() {
    Axios.post(updateUser, {
      address: address,
      userObjId: JSON.parse(localStorage.getItem("userDetails123"))._id,
    })
      .then((res) => {
        swal(res.data.message,"","success");
        return;
      })
      .catch((err) => swal(err));
  };
  const profileUpdate = () =>{
    MySwal.fire({
        html: <div className="d-flex mt-2">
                <AccountBoxIcon style={{color: "#003459"}} />
                <p className="ml-2" style={{color: "#003459"}}>Profile Updated!</p>
            </div>,
        
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 2000,
        width: "500px",
        height: "100px",
        backdrop: "rgba(0, 0, 0, 0.5)",
        scrollbarPadding: false,
        showClass: {
          popup: 'animate__animated animate__zoomIn  animate__faster',
          backdrop: 'swal2-noanimation'
        },
        hideClass: {
          popup: 'animate__animated animate__slideOutRight  animate__faster',
          backdrop: 'animate__animated animate__fadeOut  animate__faster'
        }
    })
};
const confirmDeleteAccount = () => {
  const onCancel = () => {
    MySwal.clickCancel();
  }
  const onConfirm = () => {
    MySwal.clickConfirm();
  }
  MySwal.fire({
    html: <div>
            <div className="confirmationMsg ">
              Are you sure you want to delete account from EHS Prints?
            </div>
            <button className="confirmationBtn yesBtnMargin" onClick={onConfirm} >Yes</button>
            <button className="confirmationBtn" onClick={onCancel} style={{borderColor: "#C51D1D"}}>Cancel</button>
          </div>,
    position: "center",
    showConfirmButton: false,
    width: "700px",
    backdrop: "rgba(0, 0, 0, 0.5)",
    scrollbarPadding: false,
    padding: "23px 10px 22px 12px",
    showClass: {
      popup: 'animate__animated animate__zoomIn animate__faster',
      backdrop: 'animate__animated animate__fadeIn animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut animate__faster',
      backdrop: 'animate__animated animate__fadeOut animate__faster'
    }
  })
};
const addAddress = () => {
  const onSubmit = (data) =>{
      let addressBody = {
      houseDetails: `${data.firstName}|${data.address1}|${data.address2}|${data.city}|${data.phonenumber}|${data.emailid}`,
      pincode: data.pincode,
      state: data.state,
      country: data.country
    }
    if(authUser){
      Axios.post(`${API}auth/add_user_details`,{
          address: addressBody,
          add: 1
      },{   
          headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
          params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
      }).then((res)=>{
         // console.log(res);
         MySwal.fire({
          html: <div className="d-flex mt-2">
                  <CheckCircleIcon style={{color: "#003459"}} />
                  <p className="ml-2" style={{color: "#003459"}}>Address Sucessfully Added!</p>
              </div>,
          
          position: "top-end",
          timer: 2000,
          showConfirmButton: false,
          showCloseButton: true,
          width: "500px",
          height: "100px",
          backdrop: "rgba(0, 0, 0, 0.5)",
          scrollbarPadding: false,
          showClass: {
            popup: 'animate__animated animate__zoomIn  animate__faster',
            backdrop: 'swal2-noanimation'
          },
          hideClass: {
            popup: 'animate__animated animate__slideOutRight  animate__faster',
            backdrop: 'animate__animated animate__fadeOut  animate__faster'
          }
          
      });
      }).catch((err)=>{
          console.log(err);
      })
  }else{
     // history.push("/login");
  }
  }

  MySwal.fire({
    html: <div className="">
            <p className="addAddressHead">Add Address</p>
            <hr style={{color: "#D2D2D2",marginBottom: "10px",marginTop: "0"}} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" name="firstName" {...register("firstName")} placeholder="Full Name" className="addAddressInput" required/>
              <input type="text" name="lastName" {...register("lastName")} placeholder="Last Name" className="addAddressInput d-none" />
              <input type="text" name="address1" {...register("address1")} placeholder="Address Line 1" className="addAddressInput" required/>
              <input type="text" name="address2" {...register("address2")} placeholder="Address Line 2" className="addAddressInput" />
              <input type="text" name="city" {...register("city")} placeholder="City" className="addAddressInput" required/>
              <input type="text" name="state" {...register("state")} placeholder="State" className="addAddressInput" required/>
              <input type="text" name="country" {...register("country")} placeholder="Country" className="addAddressInput" required/>
              <input type="number" name="pincode" {...register("pincode")} placeholder="Pin Code" className="addAddressInput" required/>
              <input type="number" name="phonenumber" {...register("phonenumber")} placeholder="Contact Number" className="addAddressInput" />
              <input type="email" name="emailid" {...register("emailid")} placeholder="Email" className="addAddressInput" />
              <button type="submit"  className="saveBtn">Save</button>
            </form>
          </div>,
          showConfirmButton: false,
          padding: "10px 0px 5px 0px",
          backdrop: "rgba(0, 0, 0, 0.5)",
          position: "center",
          scrollbarPadding: false,
          showClass: {
            popup: 'animate__animated animate__zoomIn  animate__faster',
            backdrop: 'animate__animated animate__fadeIn animate__faster'
          },
          hideClass: {
            popup: '',
            backdrop: ''
          }
  })
};
const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 360, itemsToShow: 2}
];
  const addressCarousel =useRef();
  const paymentCarousel =useRef();
  return (
    <>

      <div class="padding-10 d-flex justify-content-center align-items-center align-items-sm-start justify-content-sm-around flex-sm-row flex-column pt-4  pb-4" style={{background: "#F6F6F6",width: "100vw!important"}}>
        <div className="personalInfo ">
            <p className="perHead mb-0 mt-3  ">Personal Information</p>
            <p className="perTag ">Updating email address or phone number would require verification after making changes here.</p>
            <div className="perInput">
              <label htmlFor="NAME " className="perLabel ">NAME</label>
              <input type="text" id="NAME"  placeholder={name}/>
            </div>
            <div className="perInput">
              <label htmlFor="EMAIL"  className="perLabel">EMAIL</label>
              <input type="email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" id="EMAIL" placeholder={email} />
            </div>
            <div className="perInput">
              <label htmlFor="MOBILE" className="perLabel">MOBILE</label>
              <input type="number" id="MOBILE" placeholder={phone} />
            </div>
            <div className="perInput">
              <label htmlFor="NEWPASSWORD" className="perLabel">NEW PASSWORD</label>
              <input type="password" id="NEWPASSWORD"  />
            </div>
            <div className="perInput">
              <label htmlFor="CPASSWORD"  className="perLabel">CONFIRM PASSWORD</label>
              <input type="password" id="CPASSWORD" />
            </div>
            <div className="perInput">
                <Link to="/forgotpassword"><span className="passForgot" >Forgot Password</span></Link>
                <span className="passForgot float-right" onClick={confirmDeleteAccount}>Delete Account</span>
            </div>
            <div className="updateBtn mx-auto mt-5" role="button" onClick={profileUpdate} >UPDATE</div>
            </div>
        <div className=" ">
          <div className=" addressBox mb-4  p-3 ">
            <div className=" perInput mb-3 ">
              <p className="perHead  d-inline-block ml-sm-5 ml-0" style={{ lineHeight: "38px"}}>Addresses</p>
              <span onClick={addAddress} className="passForgot float-right" style={{fontSize: "14px",lineHeight: "38px"}}>Add Address</span>
            </div>
            
           {
             (address && address.length>0)?(
              <div className="d-flex " style={{height: "212px"}} >
              <ArrowBackIosRoundedIcon onClick={() => addressCarousel.current.slidePrev()} role="button" className="border  mt-auto mb-auto  shadow-sm rounded-circle " />
              <Carousel ref={addressCarousel} breakPoints={breakPoints}  showArrows={false} pagination={false}>
                {
                  address.map((val,i)=>{
                    return(
                      <AddressCard houseDetails={val.houseDetails} pincode={val.pincode} state={val.state} country={val.country} default={false} />
                          )
                        })
                }
              </Carousel>
              <ArrowForwardIosRoundedIcon onClick={() => addressCarousel.current.slideNext()} role="button" className="border  mt-auto mb-auto  shadow-sm rounded-circle " />
            </div>
             ):(
              <div>
                No Address Found
              </div>
             )
           }
          </div>
          <div className="d-none addressBox p-3">
              <div className="perInput mb-4 ">
                <p className="perHead  d-inline-block ml-sm-5 ml-0" style={{ lineHeight: "38px"}}>Payment Preferences</p>
                <span className="passForgot float-right" style={{fontSize: "14px",lineHeight: "38px"}}>Add Payment Option</span>
              </div>
              <div className="d-flex mt-0 " style={{height: "148px", marginTop: "0px!important"}} >
                <ArrowBackIosRoundedIcon onClick={() => paymentCarousel.current.slidePrev()} role="button" className="border  mt-auto mb-auto  shadow-sm rounded-circle " />
                <Carousel ref={paymentCarousel} breakPoints={breakPoints}  showArrows={false} pagination={false}>
                  <PaymentCard name="Name on Card"  default={true} />
                  <PaymentCard name="Name on Card"  default={false} />
                  <PaymentCard name="Shubham"  default={false} />
                </Carousel>
                <ArrowForwardIosRoundedIcon onClick={() => paymentCarousel.current.slideNext()} role="button" className="border  mt-auto mb-auto  shadow-sm rounded-circle " />
              </div>
          </div>
        </div>
      </div>




      <Grid className="mt-3 ml-5 d-none">
        {/* <Grid.Row columns="2">
          <Grid.Column>
            {" "}
            <p className="perhead">Personal Information </p>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut text-white">Update</Button> 
            <div style={{ marginTop: "140px" }}>
              <a href="/#" className="forget">
                Forgot Password
              </a>
              <br />
              <a href="/#" className="forget">
                Delete Account
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
         */}
        <Grid.Row>
          <div className="ml-3">
            <Grid className="ml-3">
              <Grid.Row columns="2" className="mt-3">
                <Grid.Column>
                  <Grid.Row>
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="PASSWORD" className="formd">
                              NAME
                            </label>
                          </div>
                          <div className="col-6">
                            <Input
                              id="NAME"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>

                          <div className="col-6 mt-3">
                            <label htmlFor="PASSWORD" className="formd">
                              OLD PASSWORD
                            </label>
                          </div>
                          <div className="col-6 mt-3">
                            <Input
                              id="PASSWORD"
                              type="password"
                              onChange={(e) => setOldPassword(e.target.value)}
                            />
                          </div>

                          <div className="col-6 mt-3">
                            <label htmlFor="PASSWORD" className="formd">
                              NEW PASSWORD
                            </label>
                          </div>
                          <div className="col-6 mt-3">
                            <Input
                              id="PASSWORD"
                              type="password"
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col ml-4">
                        <div className="row"></div>
                      </div>
                    </div>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column
                  floated="right"
                  style={{ position: "absolute", right: "225px" }}
                >
                  <Button
                    className="perbut2 text-white"
                    onClick={updatePassword}
                  >
                    Update
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <div></div>

          <div></div>
        </Grid.Row>

        <hr
          style={{
            marginTop: "50px",
            width: "120%",
            marginLeft: "-18px",
            border: " 1px solid #D2D2D2",
            marginBottom: "50px",
          }}
        />

        <Grid.Row columns="2">
          <Grid.Column>
            <p className="perhead mb-4">Address</p>

            {/* <div className="row">
              <div className="col-6">
                <p className="address">Address line 1</p>
                <p className="address">Address line 2</p>
                <p className="address">Address line 3</p>
                <p className="address">Address line 4</p>
                <div className="row">
                  <div className="col-3">
                    <a className="forget" href="/#">
                      Edit
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="forget ml-1" href="/#">
                      Remove
                    </a>
                  </div>
                </div>
                <a className="def" href="/#">
                  Default
                </a>
              </div>

              <div className="col-6">
                <p className="address">Address line 1</p>
                <p className="address">Address line 2</p>
                <p className="address">Address line 3</p>
                <p className="address">Address line 4</p>
                <div className="row">
                  <div className="col-3">
                    <a className="forget" href="/#">
                      Edit
                    </a>
                  </div>
                  <div className="col-3">
                    <a className="forget ml-1" href="/#">
                      Remove
                    </a>
                  </div>
                </div>
                <a className="def" href="/#">
                  Set as Default
                </a>
              </div>
            </div> */}

            <textarea
              className="mx-auto d-block mt-3"
              id="loginUseraddress2"
              rows="5"
              // onChange={(e) => {
              //   setAddress(e.target.value);
              //   setLoginBody({
              //     emailid: emailid,
              //     password: password,
              //     firstname: firstname,
              //     lastname: lastname,
              //     phonenumber: phonenumber,
              //     address: e.target.value,
              //   });
              // }}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut2 text-white" onClick={updateAddress}>
              Add Address{" "}
            </Button>
          </Grid.Column>
        </Grid.Row>

        <hr
          style={{
            marginTop: "50px",
            width: "120%",
            marginLeft: "-18px",
            border: " 1px solid #D2D2D2",
            marginBottom: "50px",
          }}
        />

        {/*         
        <Grid.Row columns="2">
          <Grid.Column>
            <p className="perhead mb-4">Payment Preferences</p>

            <div className="row">
              <div className="col-6">
                <p className="address">Name on Card</p>
                <p className="address">**********7788</p>
                <p className="address">Expiry: 04/2022</p>
              </div>

              <div className="col-6">
                <p className="address">Name on Card</p>
                <p className="address">**********7788</p>
                <p className="address">Expiry: 04/2022</p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column
            floated="right"
            style={{ position: "absolute", right: "225px" }}
          >
            <Button className="perbut3 text-white">Add Payment Option </Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </>
  );
};

const OrderDetailCard = (props) => {
 return(
    <div className="orderDetailBox mx-auto mt-4">
        <div className="d-flex justify-content-sm-between flex-column flex-sm-row p-3 pl-sm-5 pl-2 pr-5" style={{
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "18px",
          color: "rgba(0, 0, 0, 0.8)",
          borderBottom: "1px solid #D2D2D2"
        }}>
          <span className="mb-1 mb-sm-0">ORDER # {props.orderId}</span>
          <span className="float-sm-right">Ordered on {props.createdAt.split("T")[0]}</span>
        </div>
        <div className="p-sm-3 p-2  pr-sm-5">
            <div className="d-inline-block">
            {
              props.items && props.items.map((product,i)=>{
                return(
                  <div className="productDetails my-3 d-flex">
                    <img src={product.poster_details.imgUrl ? product.poster_details.imgUrl[0] : "" } alt="product" className="myOrderProductImg" />
                    <div className="ml-sm-3 ml-2">
                      <p className="myOrderProductName ">{product.poster_details.name}</p>
                      <p className="myOrderProductDetail ">Material: <span style={{fontWeight: "600"}}>{product.materialDimension.material_title}</span> </p>
                      <p className="myOrderProductDetail">Dimension: <span style={{fontWeight: "600"}}>{product.materialDimension.dimension_title}</span> </p>
                      <pre className="myOrderProductDetail">Price: <span style={{fontWeight: "600"}}>₹{product.materialDimension.price}     </span>  Quantity: <span style={{fontWeight: "600"}}>{product.quantity}</span> </pre>
                      <p className="myOrderProductDetail">Seller: <span style={{fontWeight: "600"}}>Dichroic Lab</span></p>
                    </div>
                  </div>
                )
              })
            }
              <p className="  mt-3 d-block d-sm-none" style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#000000",
                textDecorationLine: "none"
              }}>Order Total: <span>₹{props.totalPrice}</span></p>
              <div className="mt-3 stepper">
                  {props.children}
              </div>
            </div>
            <div className=" d-inline-block float-sm-right float-none text-sm-right text-left " style={{
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "18px",
              textDecorationLine: "underline",
              color: "#F2994A",
              
            }}>
              <p>View Quotation</p>
              <p>Get Invoice</p>
              <p>Request Cancellation</p>
              <p>Request Return or Replace</p>
              <p>Review Product</p>
              <p className="float-right mt-4 d-none d-sm-block" style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#000000",
                textDecorationLine: "none"
              }}>Order Total: <span>₹{props.totalPrice}</span></p>
            </div>
            
        </div>
        
    </div>
  );
};

const Orders = () => {
  const [orderData, setOrderData] = React.useState([]);
  const [authUser,setAuthUser] = React.useState("");
  
  
  /*Dummy Order */
 

  

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails123"))) {
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );

      Axios.get(`${API}orders/getOrderUser`,{
        headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
            params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
      }).then((res)=>{
        //console.log(res);
        setOrderData(res.data.data);
      }).catch((err)=>{
        console.log(err)
      })
      
    }
  }, []);

  const Material = {
    one: "125 Micron (non-tearable)",
    two: "Self-adhesive (premium)",
    three: "Self-adhesive 3mm sunboard (premium)",
  };
  const Dimension = {
    one: "16in by 24in",
    two: "19in by 27in",
    three: "24in by 36in",
  };

  const findMat = (mat) => {
    if (mat.one) return Material.one;
    else if (mat.two) return Material.two;
    else if (mat.three) return Material.three;
  };

  const findDim = (dim) => {
    if (dim.one) return Dimension.one;
    else if (dim.two) return Dimension.two;
    else if (dim.three) return Dimension.three;
  };

  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 10px)",
      right: "calc(50% + 10px)",
    
    },
    active: {
      "& $line": {
        borderColor: "#D0F7FF",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#003459",
      },
    },
    line: {
      borderColor: "#D0F7FF",
      borderTopWidth: 4,
      borderRadius: 1,
      
    },
  })(StepConnector);

  function QontoStepIcon(props) {
    const { completed } = props;

    return (
      <div>
        {completed ? (
          <Check
            style={{
              width: "24px",
              height: "24px",
              border: "5px solid  #003459",
              borderRadius: "50%",
              color: " #003459",
              zIndex: "2",
            }}
          />
        ) : (
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "5px solid #D0F7FF",
              borderRadius: "50%",
            }}
          ></div>
        )}
      </div>
    );
  }

  QontoStepIcon.propTypes = {
    completed: PropTypes.bool,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    }
  }));

  function getSteps() {
    return [
      "Order Confirmed",
      "Order Dispatched",
      "Order Shipped",
      "Order Delivered",
    ];
  }
  const classes = useStyles();
  const steps = getSteps();
  const status = "Order Delivered";
  const [value, setValue] = React.useState(2);
  

  return (
    <>
      <hr style={{borderTop: "4px solid #F6F6F6",marginTop: "0"}}></hr>
      <div className="padding-10">
        <h2 style={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "30px",
          color: "#000000",
        }}>My Orders</h2>
      </div>
      {
        orderData ? orderData.map((order,i)=>{
          //console.log(orderData)
          return(
            <>
            <OrderDetailCard 
              orderId={order.orderId}
              createdAt= {order.created_at}
              items={order.itemDetails}
              totalPrice={order.sumPriceToPay}
              >
                  <div className={classes.root} >
                          <Stepper
                            alternativeLabel
                            activeStep={order.orderStatus}
                            connector={<QontoConnector />}
                            className=" p-0 "
                          >
                            {steps.map((label) => (
                              <Step key={label}  className=" stepperWidth">
                                <StepLabel StepIconComponent={QontoStepIcon} >
                                  <p className="steplabel ">{label}</p>
                                </StepLabel>
                              </Step>
                            ))}
                          </Stepper>

                      </div>
              </OrderDetailCard>
            </>
          )
        }):
        <div>No Orders Found</div>
      }
    </>
  );
};

const ncard = (props) => {
  return (
      <ProductCard src={props.src} name={props.title} startPrice={props.startPrice} rating={props.rating} itemBought={props.itemBought} catName={props.cat} subCatName={props.subCat} />
  );
};

const Wishlist = (props) => {
  const [wishlist,setWishlist] = useState([])

  useEffect(()=>{
    Axios.get(`${API}auth/get_user_details_by_id`,{   
      headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
      params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id,onlywish: 1}
    }).then((res)=>{
      //console.log(res);
      setWishlist(res.data.data[0].wishList);
      //console.log(res.data.data[0].wishlist);
    }).catch((err)=>{ 
      console.log(err);
    })
  })
  
  return (
    <>
     <hr style={{borderTop: "4px solid #F6F6F6",marginTop: "0"}}></hr>
    <div className="padding-10">
      <h2 className="mb-3" style={{
        fontSize: "24px",
        lineHeight: "30px",
        color: "#000000",
        fontWeight: "600",
      }}>My Wishlist</h2>
      {(wishlist && wishlist.length>0)?(
        <>
        <div className="wishlistProducts">
        {wishlist.map((ncard,i)=>{
            return(
            <ProductCard 
            product={ncard}
                    src={ncard.imgUrl[0]} 
                    name={ncard.name} 
                    slug={ncard.slug} 
                    startPrice={ncard.originalPrice} 
                    rating={ncard.average_rating} 
                    itemBought={ncard.bought} 

                    catId= {ncard.category[0]._id} 
                    subCatId={ncard.subCategory[0]._id}
                    catSlug = {ncard.category[0].cat_slug}
                    subCatSlug = {ncard.subCategory[0].sub_cat_slug}
                    id={ncard._id} 
                    key={i} 
                />
            )
        })}
      </div>
      <div className="d-flex mt-4  ">
        <Pagination count={2} color="primary"  className="mx-auto"  />
      </div>
        </>
      ):(
        <div>
          No Products in Your Wishlist...
        </div>
      )}
    </div>
    </>
  );
};



const QuotesCard = (props) => {
  const quoteConfirmed = () =>{
    MySwal.fire({
        html: <div className="d-flex mt-2">
                   <CheckCircleIcon style={{color: "#0C9B86"}} />
                    <div className="text-left">
                    <p className="ml-3 " style={{color: "#0C9B86"}}>Order Confirmed!</p>
                    <p className="ml-3" style={{
                      fontFamily: "Source Sans Pro",
                      fontWeight: "normal",
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "18px",
                      color: "#757575",
                      textAlign: "left"
                    }}>An email has been sent to you and the supplier on the registered email addresses.</p>
                    </div>
            </div>,
        scrollbarPadding: false,
        position: "top-end",
        timer: 3000,
        showConfirmButton: false,
        showCloseButton: true,
        width: "500px",
        height: "100px",
        backdrop: "rgba(0, 0, 0, 0.5)",
        showClass: {
          popup: 'animate__animated animate__zoomIn  animate__faster',
          backdrop: 'animate__animated animate__fadeIn  animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__slideOutRight  animate__faster',
          backdrop: 'animate__animated animate__fadeOut  animate__faster'
        }
    })
};
  return(
    <div className="quoteBox mx-auto my-5">
        <div className=" py-3 px-4 px-sm-5 quoteTopBox" style={{
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "18px",
          borderBottom: "1px solid #D2D2D2",
          
        }}>
          <span className="order-2 order-sm-1 my-1 my-sm-0 " style={{color: "#000"}}>VALID TILL  Saturday, 17 October 2020</span>
          <span className="order-3 order-sm-2 my-1 my-sm-0 text-left " style={{color: "#757575"}}>Requested on Saturday, 10 October 2020</span>
          <span className="order-1 order-sm-3 my-1 my-sm-0  quoteAlign" style={{color: "#757575",textAlign: "center"}}>QUOTATION #76-2260441</span>
        </div>
        <div className="d-flex flex-sm-row flex-column">
          <div className="px-sm-5 px-2 py-sm-4 py-5   ">
          <div className="d-flex justify-content-between  buyerDetailBox1" style={{}}>
              <div className=" buyerDetailBox   ml-sm-1 " style={{
                  fontFamily: "Source Sans Pro",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#757575"
                }}>
                <p className="" style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "20px",
                  marginBottom: "9px",
                }}>Buyer Details</p>
                <p className="" style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000",
                  marginBottom: "9px",
                }}>ABC Company</p>
                <p className="" style={{
                  marginBottom: "7px",
                }}>
                  Contact person name<br />
                  Contact person phone<br />
                  Contact person email<br />
                </p>
                <p style={{
                  marginBottom: "8px",
                }}>
                  Address in 2 lines <br/>
                  Address in 2 lines
                </p>
                <p>GST no.</p>
              </div>
              <div className=" buyerDetailBox  " style={{
                  fontFamily: "Source Sans Pro",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#757575"
                }} >
                <p style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "20px",
                  marginBottom: "9px",
                }}>Supplier Details</p>
                <p style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000",
                  marginBottom: "9px",
                }}>Dichroic Labs LLP</p>
                <p style={{
                  marginBottom: "7px",
                }}>45,old Agrawal Nagar, Indore, 452001, IN, Madhya Pradesh</p>
                <p>Phone no.<br/>
                Email</p>
              </div>
          </div>
          <div className="buyerDetailBox1 d-flex flex-sm-row flex-column align-items-center justify-content-sm-between">
            <button className="my-4 my-sm-0 d-none" style={{
            background: "#F2994A",
            borderRadius: "4px",
            width: "213px",
            height: "36px",
            fontFamily: "Source Sans Pro",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "34px",
            textAlign: "center",
            color: "#FFF",
            border: "none",
          }} onClick={quoteConfirmed}>Confirm Purchase</button>
            <button className="mr-sm-3" style={{
            background: "#FFF",
            border: "2px solid #F2994A",
            boxSizing: "border-box",
            borderRadius: "4px",
            width: "213px",
            height: "36px",
            fontFamily: "Source Sans Pro",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "32px",
            textAlign: "center",
            color: "#000",
          }}>View Quotation</button>
          </div>
          </div>
          <div className=" w-100 pl-3 pr-5 py-sm-4 py-3 ">
                 <div className="d-flex flex-sm-column flex-row justify-content-between mb-4 mb-sm-0">
                 <p className="" style={{
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#000",
                    marginBottom: "5px"
                  }}>Products: <span style={{fontWeight: "600"}}>4</span></p>
                  <p className="" style={{
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#000",
                    
                  }}>Total Quantity: <span style={{fontWeight: "600"}}>5</span></p>
                 </div>
                  <div className="quotesImg ">
                      <img src={SafeTwo} alt="quotes" width="85px" height="85px"  />
                      <img src={SafeTwo} alt="quotes" width="85px" height="85px"  />
                      <img src={SafeTwo} alt="quotes" width="85px" height="85px"  />
                      <img src={SafeTwo} alt="quotes" width="85px" height="85px"  />
                  </div>
          </div>
        </div>
    </div>
  );
};

const Quotes = () => {
  const [s, sets] = useState(false);

  return (
    <>

      <hr style={{borderTop: "4px solid #F6F6F6",marginTop: "0"}}></hr>
      <div className="padding-10">
        <h2 style={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "30px",
          color: "#000000",
        }}>Quotes Requested</h2>
      </div>
        <QuotesCard  />
        <QuotesCard  />




      {/*<Grid className="ml-5">
        <Grid.Row
          className="orderDet mt-2 mb-3"
          style={{ marginLeft: "-50px" }}
        >
          Quotes Requested
        </Grid.Row>
        <Grid.Row
          style={{
            border: "1px solid #D2D2D2",
            borderRadius: "10px",
            width: "80%",
            padding: "40px",
          }}
        >
          <div>
            <div className="row">
              <div className="col-6">
                <p
                  className=" perside ml-3"
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                >
                  Requested on Saturday, 10 October 2020
                </p>
              </div>
              <div className="col-6">
                <p
                  className="perside "
                  style={{
                    fontSize: "14px",
                    lineHeight: "17px",
                    marginLeft: "220px",
                    width: "200px",
                  }}
                >
                  QUOTATION #76-2260441
                </p>
              </div>
              <div className="row">
                <p
                  className=" perhead ml-5"
                  style={{ fontSize: "14px", lineHeight: "17px" }}
                >
                  VALID TILL Saturday, 17 October 2020
                </p>
              </div>
              <div className="row mt-5 ml-3" style={{ width: "100%" }}>
                <div className="col-4">
                  <p className="perside">Buyer Details</p>
                  <p className="perhead">ABC Company</p>
                  <p className="perside">
                    Contact person name
                    <br />
                    Contact person phone
                    <br />
                    Contact person email
                  </p>
                  <p className="perside">Address line 2</p>
                  <p className="perside">GST no</p>
                  <Button
                    className="perbut2 text-white"
                    onClick={() => sets(true)}
                  >
                    Confirm Purchase
                  </Button>
                </div>

                <div className="col-4">
                  <p className="perside">Supplier Details</p>
                  <p className="perhead">Dichroic Labs LLP</p>
                  <p className="perside">
                    45,old Agrawal Nagar,
                    <br /> Indore,
                    <br /> 452001, IN, Madhya Pradesh
                  </p>
                  <p className="perside">Phone no</p>
                  <p className="perside">Email</p>
                  <div className="carddiv" style={{ cursor: "pointer" }}>
                    <p className="pee">View Quotation</p>
                  </div>
                </div>

                <div className="col-4">
                  <p className="perhead">Products:4</p>
                  <p className="perhead">Total Quantity:5</p>
                  <div className="row">
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                    <img
                      className="col-4"
                      src={DisInfect}
                      alt=""
                      height="70px"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            className="perside ml-3 mt-2"
            style={!s ? { display: "none" } : { display: "block" }}
          >
            An email has been sent to you and the supplier on the registered
            email addresses.
          </p>
        </Grid.Row>
      </Grid>*/}
    </>
  );
};

export default function Dashboard(props) {
  const [authUser, setAuthUser] = React.useState("");
  useEffect(() => {
    document.title = "Ehs prints | Dashboard";
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, []);

  const [redirect, setRedirect] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  const setRedirectFun = (e) => {
    if (e.target.id === "one") {
      setRedirect({ one: true, two: false, three: false, four: false });
    } else if (e.target.id === "two") {
      setRedirect({ one: false, two: true, three: false, four: false });
    } else if (e.target.id === "three") {
      setRedirect({ one: false, two: false, three: true, four: false });
    } else if (e.target.id === "four") {
      setRedirect({ one: false, two: false, three: false, four: true });
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 5 }
  ];
  const dashboardCarousel = useRef();
  return (
    <div>
      <div className="padding-10 d-flex pt-4 pb-4">
          <ArrowBackIosRoundedIcon onClick={() => dashboardCarousel.current.slidePrev()} role="button" className="border d-inline-block d-sm-none  mt-auto mb-auto  shadow-sm rounded-circle " />
          <Carousel breakPoints={breakPoints} showArrows={false} ref={dashboardCarousel} pagination={false}>
              <div
                onClick={setRedirectFun}
                id="one"
                className="listanchor "
                style={redirect.one ? { background: "rgba(86, 204, 242, 0.2)",
                                        border: "2px solid #2D9CDB",
                                        boxSizing: "border-box",
                                        borderRadius: "32px",
                                        color: "#2D9CDB" } : null}
              >
                PERSONAL INFORMATION
              </div>
              <div
                onClick={setRedirectFun}
                id="two"
                className="listanchor"
                style={redirect.two ? { background: "rgba(86, 204, 242, 0.2)",
                                        border: "2px solid #2D9CDB",
                                        boxSizing: "border-box",
                                        borderRadius: "32px",
                                        color: "#2D9CDB"} : null}
              >
                MY ORDERS
              </div>
              <div
                onClick={setRedirectFun}
                id="three"
                className="listanchor"
                style={redirect.three ? { background: "rgba(86, 204, 242, 0.2)",
                                        border: "2px solid #2D9CDB",
                                        boxSizing: "border-box",
                                        borderRadius: "32px",
                                        color: "#2D9CDB" } : null}
              >
                MY WISHLIST
              </div>
              <div
                onClick={setRedirectFun}
                id="four"
                className="listanchor"
                style={redirect.four ? { background: "rgba(86, 204, 242, 0.2)",
                                        border: "2px solid #2D9CDB",
                                        boxSizing: "border-box",
                                        borderRadius: "32px",
                                        color: "#2D9CDB"} : null}
              >
                QUOTES REQUESTED
              </div>
              <div
                className="listanchor text-danger"
                style={redirect.five ? { background: "rgba(86, 204, 242, 0.2)",
                                        border: "2px solid #2D9CDB",
                                        boxSizing: "border-box",
                                        borderRadius: "32px",
                                        color: "#2D9CDB" } : null}
                onClick={() => {
                            const onCancel = () => {
                              MySwal.clickCancel();
                            }
                            const onConfirm = () => {
                              MySwal.clickConfirm();
                            }
                            MySwal.fire({
                              html: <div className="">
                                      <div className="confirmationMsg ">
                                      Are you sure you want to logout from EHS Prints?
                                      </div>
                                      <button className="confirmationBtn yesBtnMargin" onClick={onConfirm} >Yes</button>
                                      <button className="confirmationBtn" onClick={onCancel} style={{borderColor: "#C51D1D"}}>Cancel</button>
                                    </div>,
                              position: "center",
                              showConfirmButton: false,
                              width: "700px",
                              backdrop: "rgba(0, 0, 0, 0.5)",
                              scrollbarPadding: false,
                              padding: "23px 10px 22px 12px",
                              showClass: {
                                popup: 'animate__animated animate__zoomIn animate__faster',
                                backdrop: 'animate__animated animate__fadeIn animate__faster'
                              },
                              hideClass: {
                                popup: 'animate__animated animate__zoomOut animate__faster',
                                backdrop: 'animate__animated animate__fadeOut animate__faster'
                              }
                            }).then((result)=>{
                              if(result.isConfirmed){
                                localStorage.removeItem("userDetails123");
                                localStorage.removeItem("ehstoken12345678910");
                                window.location.replace(
                                  "http://" + window.location.host + "/"
                                );
                              }
                            })
                 
                }}
              >
                LOG OUT
              </div>
          </Carousel>
          <ArrowForwardIosRoundedIcon onClick={() => dashboardCarousel.current.slideNext()} role="button" className="border d-inline-block d-sm-none mt-auto mb-auto shadow-sm rounded-circle "  />
      </div>  
            {redirect.one ? <PersonalInfo /> : null}
            {redirect.two ? <Orders /> : null}
            {redirect.three ? (
              <Wishlist setCartCountFun={props.setCartCountFun} />
            ) : null}
            {redirect.four ? <Quotes /> : null}

    
    </div>
  );
};
