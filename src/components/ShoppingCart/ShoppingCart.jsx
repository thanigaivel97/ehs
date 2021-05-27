/* eslint-disable react-hooks/exhaustive-deps */
/*jshint esversion: 9 */
import React, { useRef,useState,  useEffect } from "react";
import { Link ,useHistory} from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Pay from "../../images/payment.svg";
import Axios from "axios";
import { createOrder, updateUser } from "../../helper/apiPath";
import { findMat, findDim } from "../../helper/apiPath";
import $ from "jquery";
import swal from "sweetalert";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import FloorImg from "../../images/floor1.svg";
import ProductCard from "../signages/ProductCard";
import razorpayLogo from "../../images/razorparLogo.png"
import {API} from "../../backend";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}



const __DEV__ = document.domain === "localhost";

const Tables = (props) => {
  const [rating,setRating] = useState(3.7);
  const [name, setName] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [userJson, setUserJson] = React.useState({});
  const [modalCarousel, setModalCarousel] = useState({
    one: true,
    two: false,
  });
  const [address, setAddress] = React.useState("");
  const [state, setState] = React.useState("");
  const [pincode, setPincode] = React.useState("");

  //Neww
  const [cartItem,setCartItem] = useState([])
  const [wishlist,setWishlist] = useState([]);
  const [totalPay,setTotalPay] = useState(0);
 

  function session(r) {
    localStorage.setItem("userDetails123", JSON.stringify(r));
  }

  const cartDet = JSON.parse(localStorage.getItem("listCart12345678910")) || {
    cartList: [],
  };

  const [numCart, setNumCart] = useState(cartDet.cartList);

  const [num, setNum] = useState(props.navCount || 2);

  const [shipping, setShipping] = React.useState(0);

  function calculate(e) {
    let temp = 0;
    e.map((v) => (temp += v.quantity * v.originalPrice));
    setTotalPay(temp);
    temp > 1999 ? setShipping(0) : setShipping(220);
    return temp;
  }

  function orderPlaced(res) {
    const orderDet = JSON.parse(localStorage.getItem("orderUser"));
    Axios.post(createOrder, {
      userId: userJson._id,
      name: orderDet.name || "",
      itemDetails: cartDet.cartList,
      total: totalPay + shipping,
      paymentId: res.razorpay_payment_id,
      orderId: res.razorpay_order_id,
      status: "Order Confirmed",
      address: addrWithLogin || orderDet.addr,
      emailid: userJson?.emailid,
      phonenumber: userJson?.phonenumber || orderDet.phonenumber,
    })
      .then((res) => {
        localStorage.removeItem("listCart12345678910");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let addrWithLogin;

  function proceed() {
    if ($("#oldAdd").is(":checked")) {
      addrWithLogin = userJson.address;
    } else if ($("#newAdd").is(":checked")) {
      if (name && address && state && pincode) {
        addrWithLogin =
          "Door:" +
          name +
          "  |  Street:" +
          address +
          "  |  City:" +
          state +
          "  |  Pincode:" +
          pincode;
      } else {
        swal("Oops", "Please provide complete address", "warning");
      }
    } else {
      addrWithLogin = userJson.emailid || userJson.phonenumber;
    }

    Axios.post(updateUser, {
      emailid: userJson?.emailid,
      phonenumber: userJson?.phonenumber,
      address: addrWithLogin,
    })
      .then((res) => {
        userJson["address"] = addr;
        session(userJson);
        $("#modalCls").trigger("click");
        displayRazorpay();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function proceed1() {
    if (name && address && state && pincode) {
      addrWithLogin =
        "Door:" +
        name +
        "  |  Street:" +
        address +
        "  |  City:" +
        state +
        "  |  Pincode:" +
        pincode;
      Axios.post(updateUser, {
        emailid: userJson?.emailid,
        phonenumber: userJson?.phonenumber,
        address: addr,
      })
        .then((res) => {
          userJson["address"] = addr;
          session(userJson);
          $("#modalCls").trigger("click");
          displayRazorpay();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Oops", "Please provide complete address", "warning");
    }
  }

  function proceedWithoutLogin() {
    $("#modalCls").trigger("click");
    displayRazorpay();
  }

  function getCartItem(){
   if(authUser){
    Axios.get(`${API}auth/get_user_details_by_id`,{   
      headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
      params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
    }).then((res)=>{
     /// console.log(res);
      setCartItem(res.data.data[0].cart);
      setWishlist(res.data.data[0].wishList);
     // console.log(res.data.data[0].wishlist);
     // console.log(res.data.data[0].cart)
    }).catch((err)=>{ 
      console.log(err);
    })
   }else{
     if(!JSON.parse(localStorage.getItem("userDetails123")) && JSON.parse(localStorage.getItem("ehsCart"))){
       setCartItem(JSON.parse(localStorage.getItem("ehsCart"))); 
     }
   }
  }

  const [authUser, setAuthUser] = React.useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
      setUserJson(
        JSON.parse(localStorage.getItem("userDetails123")) || {
          user: {},
        }
      );
      if (JSON.parse(localStorage.getItem("userDetails123"))){
        setAuthUser(
          JSON.parse(localStorage.getItem("userDetails123")).emailid ||
            JSON.parse(localStorage.getItem("userDetails123")).phonenumber
        );
       
        }
        getCartItem();
        
        
     
  }, [totalPay,authUser]);

  useEffect(() => {
    setTotalPay(calculate(numCart));
    totalPay > 1999 ? setShipping(0) : setShipping(220);
  }, []);

  function paymentFun() {
    $("#modalBut").trigger("click");
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      swal("Oops", "Razorpay SDK failed to load. Are you online?", "error");
      return;
    }

    const data = await fetch("http://35.238.118.121:8080/razorpay", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPay + shipping }),
    }).then((t) => t.json());

    const options = {
      key: __DEV__ ? "rzp_test_FvIgaLsvcCd3vG" : "rzp_test_FvIgaLsvcCd3vG",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Payment",
      description: "Thank you for Shopping with us. Please visit again",
      image:
        "https://ehsprints.com/wp-content/uploads/2018/12/cropped-EHS_-NEW_LOGO-1-300x93.jpg",
      handler: function (response) {
        swal({
          title: "Payment Success",
          icon: "success",
        }).then((value) => {
          orderPlaced(response);
        });
      },
      prefill: {
        name: userJson?.firstname + userJson?.lastname,
        email: userJson?.emailid,
        phone_number: userJson?.phonenumber,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const updateCart = (index, type) => {
    let temp = [...numCart];
    let indexedCart = { ...temp[index] };

    if (type) indexedCart.quantity += 1;
    else if (indexedCart.quantity > 1) indexedCart.quantity -= 1;

    temp[index] = indexedCart;
    setNumCart(temp);

    let temp2 = [...cartDet.cartList];
    let indexedCart2 = { ...temp2[index] };

    if (type) indexedCart2.quantity += 1;
    else if (indexedCart2.quantity > 1) indexedCart2.quantity -= 1;

    temp2[index] = indexedCart2;

    let cartLocal = { cartList: [...temp2] };
    localStorage.setItem("listCart12345678910", JSON.stringify(cartLocal));

    calculate(cartLocal.cartList);
  };

  const remove = (index) => {
    let result = numCart.filter((v, i) => i !== index);
    setNumCart(result);

    let cartLocal = { cartList: [...result] };
    localStorage.setItem("listCart12345678910", JSON.stringify(cartLocal));
    setNum(num - 1);
    props.setCartCount(props.navCount - 1);
    setTotalPay(calculate(cartLocal.cartList));
  };


  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 780, itemsToShow: 4 }
  ];
  let history= useHistory();

  const LoginMsg = ()=>{
  
    return(
      <>
        <div className="">
          <div className="confirmationMsg text-center ">
            For adding products in wishlist you need to login...
          </div>
          <button className="confirmationBtn yesBtnMargin" onClick={()=>{
            history.push("/login");
            MySwal.clickConfirm();
          }}  >Login</button>
          <button className="confirmationBtn" onClick={()=>{
            history.push("/signup");
            MySwal.clickConfirm();
          }} >Register</button>
        </div>
      </>
    )
  }

  const addToWishlist = (productId,imgUrl,name,quantity) => {
    if(authUser){
        Axios.post(`${API}auth/add_user_details`,{
            poster_obj_id: productId,
            add: 1
        },{   
            headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
            params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
        }).then((res)=>{
            //console.log(res);
            MySwal.fire(
                {
                    html: <div className="d-flex">
                            <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                            position: "absolute",
                            top: "2px",
                            right: "2px",
                            color: "#000"
                            }} />
                            <CheckCircleIcon style={{
                                color: "#F2994A",
                                position: "absolute",
                                top: "18px",
                                left: "23px",
                                background: "#FFF",
                                borderRadius: "50%",
                                border: "none",
                            }} />
                            <img src={imgUrl} alt="productImage" className="toastImg " />
                            <div className="ml-2 ">
                            <p className="toastAddedText">Added to Wishlist</p>
                            <p className="qtyPopupText text-left font-weight-normal mb-1" >{name}</p>
                            <p className="qtyPopupText text-left mb-0" style={{fontWeight: "600"}}>Quantity: {quantity}</p>
                            <a href="/dashboard"><p className="mb-0" style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                lineHeight: "20px",
                                textDecorationLine: "underline",
                                color: "#F2994A",
                                textAlign: "right"
                            }}>View Wishlist</p></a>
                            </div>
                    </div>,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    scrollbarPadding: false,
                    timer: 3000,
                    showClass: {
                    popup: 'animate__animated animate__fadeIn  animate__faster',
                    backdrop: 'swal2-noanimation'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__slideOutRight  animate__faster',
                    backdrop: 'swal2-noanimation'
                    },
                    customClass: "toastStructure"
                })

                window.location.reload(false);
        }).catch((err)=>{
            console.log(err);
        })
    }else{
      MySwal.fire({
        html: <LoginMsg />,
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
    }
  };

  const removeFromCart = (productId) => {
    if(authUser){
      Axios.post(`${API}auth/update_user_cart`,{
          poster_obj_id: productId,
          removeCart: 1
      },
      {   
          headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
          params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
      })
      .then((res)=>{
          //console.log(res);
            window.location.reload(false);
      }).catch((err)=>{
          console.log(err);
      })
  }else{
    let ehsCart=[];
    if(localStorage.getItem("ehsCart")){
      ehsCart = JSON.parse(localStorage.getItem("ehsCart"));
      ehsCart && ehsCart.map((val,i) => {
        if(val.productId === productId){
          ehsCart.splice(i,1);
        }
      })
      localStorage.setItem("ehsCart",JSON.stringify(ehsCart));
      window.location.reload(false);
    }
  }
  };

  const updateQuantity = (productId,matId,presentQty,qtyUpdater) =>{
    let qty=presentQty;
    if(qtyUpdater===0 && presentQty>1){
      qty= qty-1;
    }else{
      qty=qty+1;
    }
    if(authUser && qty!==presentQty){
      Axios.post(`${API}auth/update_user_cart`,{
          poster_obj_id: productId,
          material_obj_id: matId,
          quantity: qty,
      },
      {   
          headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
          params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
      }).then((res)=>{
        console.log(res)
       // window.location.reload(false);
        getCartItem();
      }).catch((err)=>{
        console.log();
      })}else{
        let ehsCart;
        if(localStorage.getItem("ehsCart") && qty!==presentQty){
               ehsCart=JSON.parse(localStorage.getItem("ehsCart"));
              const i = ehsCart.findIndex(product=> product.productId===productId) 
              if(i>=0){
                  ehsCart[i].quantity=qty;
                  ehsCart[i].total= ehsCart[i].materialDimension.price * qty;
                  
                      
               
              }
          }
          localStorage.setItem("ehsCart",JSON.stringify(ehsCart));
          getCartItem();
      }
  }

  const wishlistCarousel = useRef();

  let totalAmount = 0;
  
  return (
    <div>
        <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
          <div className="pt-2 pb-lg-2">
              <Link to="/" className="text-dark "><ArrowBackIosRoundedIcon  style={{width: "12px",marginBottom: "2px" }} /> Back to Shopping </Link>
          </div>
          <div className="d-flex justify-content-between mt-lg-2">
            <h1 className="mt-2 catHead text-capitalize" >
            Shopping Cart
            </h1>
            {
              (authUser)?(
                ""
              ):(
                <Link to="/login" className="d-none d-sm-block" style={{
              width: "235px",
              height: "85px",
              background: "#FFFFFF",
              border: "1px solid #003459",
              borderRadius: "5px",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              color: "#003459",
              paddingTop: "21px"
            }}>Login or Sign up to save your Shopping Cart</Link>
              )
            }
          </div>
        </div>

        { (cartItem.length > 0) ? (
          
          <div>
            <div className="row padding-10 mt-5">
              <div className="col-sm-8 col">
              <table className="table ">
                  <thead className="">
                    <tr>
                      <th className="tablehead d-none d-sm-table-cell" scope="col">
                        Item
                      </th>
                      <th className="tablehead d-none d-sm-table-cell " scope="col">
                        Quantity
                      </th>
                      <th className="tablehead d-none d-sm-table-cell " scope="col">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((v, i) => {
                      //console.log(v);
                     // setTotalPay(totalPay => totalPay + v.total);
                    // cartItem.reduce((totalPay, { v.total }) => totalPay + v.total, 0)
                      totalAmount=totalAmount+ parseInt(v.total);
                    
                     return(
                      <tr key={i} >
                       <td className="mr-0 " style={{ width: "460px" }}>
                          <Grid>
                            <Grid.Row columns="2">
                              <Grid.Column>
                                <img
                                  src={v.poster_details.imgUrl[0]}
                                  className="productImgInCart"
                                  alt={v.poster_details.slug}
                                />
                              </Grid.Column>
                              <Grid.Column className="ml-2 ml-sm-4 mt-0 mt-sm-2 mr-0">
                                <p
                                  className="tabletitle p-0 mb-0 mb-sm-2 "
                                >
                                  {v.poster_details.name}
                                </p>
                                <p
                                  className="tabledata p-0 m-0"
                                >
                                  Material : <span style={{fontWeight: "600"}}>{v.materialDimension.material_title}</span>
                                </p>
                                <p
                                  className="tabledata p-0 m-0"
                                >
                                  Dimension :{" "}
                                  <span style={{fontWeight: "600"}}>{v.materialDimension.dimension_title}</span>
                                </p>
                                <div className="d-sm-none d-inline-block mt-1 ml-1 mb-0">
                                <ButtonGroup
                            size="small"
                            className="justify-content-center ml-4   "
                            aria-label="small outlined button group"
                            style={{ width: "20px", height: "25px" }}
                          >
                            <Button
                              onClick={()=>updateQuantity(v.poster_details._id,v.materialDimension._id,v.quantity,0)}
                              className="shadow-none "
                              style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}}
                            >
                              <RemoveIcon  style={{ color: "grey", width: "20px" }} />
                            </Button>
                            <Button
                              style={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                lineHeight: "18px",
                                color: "#000000",
                                paddingLeft: "14px",
                                paddingRight: "14px",maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'
                              }}
                            >
                              {v.quantity}
                            </Button>
                            <Button 
                             onClick={()=>updateQuantity(v.poster_details._id,v.materialDimension._id,v.quantity,1)}
                            className="p-0" 
                            style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}} >
                              <AddIcon  style={{ color: "grey", width: "20px" }} />
                            </Button>
                          </ButtonGroup>
                                </div>
                                <p className="font-weight-bold d-inline-block d-sm-none p-0 m-0 float-right" style={{color: "#003459"}}>
                                  ₹ {v.total}
                                </p>
                                <p className="tabledata p-0 m-0 d-none d-sm-block">
                                  Price : <span style={{fontWeight: "600"}}>₹ {v.materialDimension.price}</span>
                                </p>
                                <div className="mt-sm-1 mt-0 p-0  " style={{marginTop: "0", padding: "0", lineHeight: "12px"}}>
                                <p
                                    className="tabledata p-0 m-0 d-inline-block mr-4"
                                    style={{ cursor: "pointer", textDecoration: "underline" }}
                                    onClick={() => addToWishlist(v.poster_details._id,v.poster_details.imgUrl[0],v.poster_details.name,v.quantity)}
                                  >
                                    Add to Wishlist
                                  </p>
                                  <p
                                    className="tabledata  p-0 m-0 d-inline-block"
                                    style={{ cursor: "pointer", textDecoration: "underline" }}
                                    onClick={()=> removeFromCart(v.poster_details._id)}
                                  >
                                    Remove
                                  </p>
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </td>
                        <td className="ml-0 d-none d-sm-table-cell" style={{ width: "170px" }}>
                          <ButtonGroup
                            size="small"
                            className="justify-content-center ml-5 mt-5 "
                            aria-label="small outlined button group"
                            style={{ width: "20px", height: "30px" }}
                          >
                            <Button
                            onClick={()=>updateQuantity(v.poster_details._id,v.materialDimension._id,v.quantity,0)}
                              className="shadow-none"
                            >
                              <RemoveIcon style={{ color: "grey" }} />
                            </Button>
                            <Button
                              style={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "18px",
                                lineHeight: "22px",
                                color: "#000000",
                                paddingLeft: "18px",
                                paddingRight: "18px",
                              }}
                            >
                              {v.quantity}
                            </Button>
                            <Button onClick={()=>updateQuantity(v.poster_details._id,v.materialDimension._id,v.quantity,1)} >
                              <AddIcon style={{ color: "grey" }} />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td>
                          <p className="mt-5  font-weight-bold  d-none d-sm-block">
                            ₹ {v.total}
                          </p>
                        </td>
                      </tr>)
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col-sm-4 col mb-4">
              <div className="paymentBox mx-auto p-4 pt-sm-5  pb-sm-5 " >
                <Button
                  className="text-white"
                  style={{
                    width: "100%",
                    height: "7%",
                    backgroundColor: "#F2994A",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "17px",
                    lineHeight: "18px",
                    borderRadius: "5px",
                    textTransform: "none"
                  }}
                  onClick={() => window.location.replace("/quotation")}
                >
                  Request a Quote{" "}
                </Button>
                <div
                  className="mt-2 mx-auto pay"
                  style={{
                    width: "100%",
                    borderBottom: "1px solid #D2D2D2",
                  }}
                >
                  <p className="mx-auto paymentQuote">
                    Get a quote for the items in cart with their prices at your
                    email address
                  </p>
                </div>

                <p className="orderDet">Order Details</p>

                <table width="100%" className="mx-auto">
                  <tbody>
                    <tr height="30px">
                      <td className="pri left">Price</td>
                      <td className="pri right">₹ {totalAmount}</td>
                    </tr>
                    <tr height="30px">
                      <td className="shi left">Shipping</td>
                      <td className="shi right">₹ 0.00</td>
                    </tr>
                    <tr height="30px">
                      <td className="shi left">Discount</td>
                      <td className="shi right">₹ 0.00</td>
                    </tr>

                    <tr
                      height="50px"
                      style={{
                        borderTop: "1px solid #D2D2D2",
                        borderBottom: "1px solid #D2D2D2",
                      }}
                    >
                      <td className="pri left" style={{fontSize: "18px", lineHeight: "23px"}}>Total Price</td>
                      <td className="pri right" style={{fontSize: "18px", lineHeight: "23px"}}>₹ {totalAmount}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-left promocode mt-3">Use a Promo Code</p>
                <input type="text" width="100%" className="position-relative" style={{width: "100%",height: "40px",border: "2px solid #757575",borderRadius: "5px"}} />
                <a
                  href="/#"
                  className="apply "
                  
                >
                  Apply
                </a>
                <Link to={authUser? "/checkout": "/login"}  style={{textDecorationLine: "none"}}>
                <Button
                  className="text-white"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "8%",
                    backgroundColor: "#003459",
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "19px",
                    borderRadius: "5px",
                    textTransform: "none",
                  }}
                
                  target="_blank"
                  
                >
                  Proceed to Payment{" "}
                </Button>
                </Link>
                
                  <div className="razorpayBox">
                    <span className="poweredBy mr-2">Powered by</span>
                    <img src={razorpayLogo} alt="razorpay" className="razorpayLogo " />
                  </div>
                <table className="d-none"
                  width="100%"
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <tbody>
                    <tr>
                      <td className="pri left">
                        <a href="/#" className="bnk">
                          Bank Transfer
                        </a>
                      </td>
                      <td rowSpan="3">
                        <img src={Pay} alt="" width="130px"></img>
                      </td>
                    </tr>
                    <tr>
                      <td className="shi left">
                        {" "}
                        <a href="/#" className="bnk">
                          Cheque Payment
                        </a>
                      </td>
                    </tr>
                    <tr height="30px">
                      <td className=" left">
                        <p
                          className="bnk mt-1"
                          style={{ color: "#003459", width: "120px" }}
                        >
                          Pay Offline by <br /> generating Performa
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
             
              </div>
            </div>

          </div>
        ): (
          <div className="cartEmpty mx-auto my-5">
            <p className="cartEmptyText mt-4 mx-auto">Your cart is currently empty. Add Items to your cart!</p>
            <button  className="backToShopBtn mx-auto">Back to Shopping</button>
          </div>
        )
        }
        {(authUser)?(
          <>
          <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "50px 0 50px 0"
        }}></div>


              <div className="padding-10 wishlistCarouselMargin">
                    <h2 className=" d-inline-block otherCarouselHead" >My Wishlist</h2>
                    
                     
                    <Link role="button" to="/dashboard" className=" d-inline-block float-right viewAll" >View All</Link>
       

                   {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */} 
                <div className=" d-sm-flex d-none" style={{opacity: "1"}}>
                    <ArrowBackIosRoundedIcon onClick={() => wishlistCarousel.current.slidePrev()} role="button" id="prevBtn1" className="border my-auto d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={wishlistCarousel} style={{opacity: "1!important"}}>
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
                        
                    </Carousel>  
                    <ArrowForwardIosRoundedIcon onClick={() => wishlistCarousel.current.slideNext()} role="button" id="prevBtn1" className="border my-auto  d-none d-sm-block"  />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {wishlist.slice(0,4).map((ncard,i)=>{
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
            </div>            

          </>
        ):(
          ""
        )}
        
    </div>
   
  );
};

export default Tables;
