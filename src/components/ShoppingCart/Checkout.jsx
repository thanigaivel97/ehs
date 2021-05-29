import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom"
import EhsLogo from "../../images/EhsLogo.svg";
import {Link} from "react-router-dom";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AddIcon from '@material-ui/icons/Add';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useForm} from "react-hook-form";
import Axios from "axios";
import {API} from "../../backend"

const MySwal = withReactContent(Swal);

const ProductDetailCardInCheckout = (props) => {
    return(
        <div className="checkoutProductDetails mb-4  d-flex">
                <img src={props.imgUrl} alt="product" className="checkoutProductImg" />
                <div className="ml-2 ">
                  <p className="myOrderProductName mb-0">{props.name}</p>
                  <p className="myOrderProductDetail ">Material: <span style={{fontWeight: "600"}}>{props.material}</span> </p>
                  <p className="myOrderProductDetail">Dimension: <span style={{fontWeight: "600"}}>{props.dimension}</span> </p>
                  <p className="myOrderProductDetail"> Qty: <span style={{fontWeight: "600"}}>{props.quantity}</span><span className="float-right mr-sm-1 mr-4" style={{fontWeight: "600",fontSize: "20px",color: "#000000",textAlign: "right"}}>₹{props.originalPrice}</span>  </p> 
                </div>
        </div>
    );
};

const Checkout = () => {
    const [address,setAddress] = useState([]);
    const [authUser,setAuthUser] = useState("");
    const [selectedAddress,setSelectedAddress] = useState({});
    const [cartItem,setCartItem] = useState([]);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userDetails123"))){
            setAuthUser(
              JSON.parse(localStorage.getItem("userDetails123")).emailid ||
              JSON.parse(localStorage.getItem("userDetails123")).phonenumber
              );
           // setAddress(JSON.parse(localStorage.getItem("userDetails123")).address);
            Axios.get(`${API}auth/get_user_details_by_id`,{   
                headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")},
                params: {userId: JSON.parse(localStorage.getItem("userDetails123"))._id}
              }).then((res)=>{
                console.log(res);
                setAddress(res.data.data[0].address)
                setCartItem(res.data.data[0].cart);
              }).catch((err)=>{ 
                console.log(err);
              })
          }else{
            if(JSON.parse(localStorage.getItem("ehsCart"))){
                setCartItem(JSON.parse(localStorage.getItem("ehsCart"))); 
              }
          }

         
        
    }, [])

    const { register, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched"
    });

    const onSubmit = (data) => {
        console.log(data)
        let addressBody = {
            houseDetails: `${data.firstName}|${data.lastName}|${data.address1}|${data.address2}|${data.city}|${data.mobile}|${data.emailid}`,
            pincode: data.pincode,
            state: data.state,
            country: data.country
          }
          setSelectedAddress(addressBody)
          if(authUser){
            displayRazorpay();
          }else{
            history.push("/login")
          }
        
    }

    const selectAddress = (e,selectedAddress) => {
       let address = {
           houseDetails: selectedAddress.houseDetails,
           pincode: selectedAddress.pincode,
           state: selectedAddress.state,
           country: selectedAddress.country
       }
       setSelectedAddress(address);
      // console.log(e)
       //console.log(address);
        let add = document.getElementsByClassName("selectAddress");
        for(let i=0;i<add.length;i++){
            add[i].style.border = "2px solid #D2D2D2";
        }
       e.target.style.border = "2px solid #2D9CDB";
       
    }
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
    let price=0
    for(let i=0;cartItem && i<cartItem.length; i++){
        price+=parseInt(cartItem[i].total);
    }

    
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        let cartItemNew = [];
        for(let i=0;i<cartItem.length;i++){
            let cart = {
                poster_obj_id: cartItem[i].poster_details._id,
                material_obj_id: cartItem[i].materialDimension._id,
                quantity: cartItem[i].quantity
            }
            cartItemNew.push(cart);
        }

        const result = await Axios.post(`${API}orders/create_order`,{
            cart_item: cartItemNew,
            delivery_address: selectedAddress,
            user_type: 1
        },{
            headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")}
        })

        if(result.data.success!==1){
            alert(result.data.message);
            return;
        }
        

        

        const { email,phoneNumber,userName,order_id,amount,currency,receipt,address } = result.data.data;

        const options = {
            key: "rzp_test_ci9tXZyyHXxDTT", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: userName,
            description: "Test Transaction",
            image: { EhsLogo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    //orderCreationId: order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                };

                const result = await Axios.post(`${API}orders/on_success_payment`, data,
                {
                    headers: {"x-access-token": localStorage.getItem("ehstoken12345678910")}
                });
                MySwal.fire({
                    html: <div className="d-flex mt-2">
                            <div className="d-flex mb-0">
                            <CheckCircleIcon style={{color: "#0C9B86"}} />
                            <p className="ml-2" style={{color: "#0C9B86"}}>{result.data.message}</p>
                            </div>
                            <p className="" style={{color: "#0C9B86"}}>For more information visit your dashboard</p>
                        </div>,
                    timer: 3000,
                    position: "top-end",
                    showConfirmButton: false,
                    showCloseButton: true,
                    width: "500px",
                    backdrop: "rgba(0, 0, 0, 0.5)",
                    scrollbarPadding: false,
                })
                //alert(result.data.message+result.data.data.info + "For more information visit your dashboard");
            },
            prefill: {
                name: userName,
                email: email,
                contact: phoneNumber,
            },
            notes: {
                address: address.houseDetails,
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    let history = useHistory();

    return(
        <>
            <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
            <div className="pt-2 pb-lg-2">
                <Link to="/" className="text-dark "><ArrowBackIosRoundedIcon  style={{width: "12px",marginBottom: "2px" }} /> Back to Shopping </Link>
            </div>
                <p className="mt-3 catHead text-capitalize text-left" >
                Checkout
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center align-items-sm-start flex-sm-row flex-column-reverse p-sm-5 ">
            {(authUser) ? (
                
                <div className="shippingDetailBox p-4 mr-sm-5  mb-4 mb-sm-0">
                    <p className="perHead">Shipping Details</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <p className="orderHead">Select Shipping Address</p>
                    {address && address.length>0 ? (
                        <>
                        <div className="checkoutAddressBox">
                      
                      { 
                          address.map((val,i)=>{
                              
                             return(
                              <div onClick={(e)=> selectAddress(e,val)} className="p-3  selectAddress" id="selectAddress" style={{
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "18px",
                              border: "2px solid #D2D2D2",
                              boxSizing: "border-box",
                              borderRadius: "5px",
                              width: "147px",
                              cursor: "pointer",
                          }}>
                          <p className=" my-0" style={{fontWeight: "600"}}>{val.houseDetails.split("|")[0]}</p>
                          <p className=" my-0" style={{fontWeight: "600"}}>{val.houseDetails.split("|")[1]}</p>
                          <p className="my-0"  style={{fontWeight: "600"}}>{val.houseDetails.split("|")[2]}</p>
                          <p className="my-0" style={{fontWeight: "600"}}>{val.houseDetails.split("|")[3]}</p>
                          <p className="my-0" style={{fontWeight: "600"}}>{val.pincode}</p>
                          <p className="my-0" style={{fontWeight: "600"}}>{val.state}</p>
                          <p className="my-0" style={{fontWeight: "600"}}>{val.country}</p>
                      </div>
                             )
                          })
                      }
                      <div className="p-3 d-inline-block " style={{
                      fontSize: "14px",
                      lineHeight: "18px",
                      border: "1px solid #D2D2D2",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                      width: "127px",
                      height: "171px",

                      }}>
                          <AddIcon style={{color: "#D2D2D2" , borderRadius: "50%",width: "50px" , height: "50px"}} className="border mx-auto d-flex justify-content-center mt-5"/>
                      </div>
                      
                  </div>
                  <button className="shippingDetailProceedBtn mt-4 " onClick={()=>displayRazorpay()} >Proceed to Payment</button>
                  </>
                    ):(
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            className="shippingDetailInput shippingDetailInput1 mr-sm-2" 
                            placeholder="First Name" 
                            name="firstName"
                            {...register("firstName",{
                                required: "**this field is required"
                            })}
                            />  
                             {errors.firstName && (<span className="text-danger ml-2 d-sm-none d-block  mt-0 errorMsgCheckout">{errors.firstName.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput shippingDetailInput1 ml-sm-1" 
                            placeholder="Last Name" 
                            name="lastName"
                            {...register("lastName")}
                            />
                        {errors.firstName && (<span className="text-danger ml-2 d-sm-block d-none  mt-0 errorMsgCheckout">{errors.firstName.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="Address Line 1"
                            name="address1"
                            {...register("address1",{
                                required: "**this field is required"
                            })}
                             />
                              {errors.address1 && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.address1.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="Address Line 2" 
                            name="address2"
                            {...register("address2")}
                            />
                        <div className="d-flex flex-sm-row flex-column justify-content-between ">
                            <div className="d-flex flex-column shippingDetailInput1">
                                <input 
                                    type="text" 
                                    className="shippingDetailInput   mr-sm-2" 
                                    placeholder="City" 
                                    name="city"
                                    {...register("city",{
                                        required: "**this field is required"
                                    })}
                                    />
                                    {errors.city && (<span className="text-danger ml-2 d-inline-block  mt-0 errorMsgCheckout">{errors.city.message}</span>)}
                            </div>
                            <div className="d-flex flex-column shippingDetailInput1 ">
                                <input 
                                    type="number" 
                                    className="shippingDetailInput  ml-sm-1" 
                                    placeholder="PIN Code"
                                    name="pincode"
                                    {...register("pincode",{
                                        required: "**this field is required",
                                        minLength: {
                                            value: 6,
                                            message: "**enter valid pincode"
                                        },
                                        maxLength: {
                                            value: 6,
                                            message: "**enter valid pincode"
                                        }
                                    })}
                                />
                                {errors.pincode && (<span className="text-danger ml-2 d-inline-block   mt-0 errorMsgCheckout">{errors.pincode.message}</span>)}
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="State" 
                            name="state"
                            {...register("state",{
                                required: "**this field is required"
                            })}
                            />
                             {errors.state && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.state.message}</span>)}
                        <input 
                            type="number" 
                            className="shippingDetailInput" 
                            placeholder="Contact Number" 
                            name="mobile"
                            {...register("mobile",{
                                required: "**this field is required"
                            })}
                            />
                             {errors.mobile && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.mobile.message}</span>)}
                        <input 
                            type="email" 
                            className="shippingDetailInput" 
                            placeholder="Email" 
                            name="email"
                            {...register("email",{
                                required: "**this field is required",
                                pattern: {
                                    value: /^(?:\w+@\w+\.\w{2,3})$/,
                                    message: "**enter valid email"
                                }
                            })}
                            />
                             {errors.email && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.email.message}</span>)}
                        <button type="submit" className="shippingDetailProceedBtn "   >Proceed to Payment</button>
                    </form>
                    )}
                   

                   
                </div>
            ): (
                <div className="shippingDetailBox p-4  mr-sm-5  mb-4 mb-sm-0">
                    <p className="perHead">Shipping Details</p>
                    <hr className=" mb-0" style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            className="shippingDetailInput shippingDetailInput1 mr-sm-2" 
                            placeholder="First Name" 
                            name="firstName"
                            {...register("firstName",{
                                required: "**this field is required"
                            })}
                            />  
                             {errors.firstName && (<span className="text-danger ml-2 d-sm-none d-block  mt-0 errorMsgCheckout">{errors.firstName.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput shippingDetailInput1 ml-sm-1" 
                            placeholder="Last Name" 
                            name="lastName"
                            {...register("lastName")}
                            />
                        {errors.firstName && (<span className="text-danger ml-2 d-sm-block d-none  mt-0 errorMsgCheckout">{errors.firstName.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="Address Line 1"
                            name="address1"
                            {...register("address1",{
                                required: "**this field is required"
                            })}
                             />
                              {errors.address1 && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.address1.message}</span>)}
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="Address Line 2" 
                            name="address2"
                            {...register("address2")}
                            />
                        <div className="d-flex flex-sm-row flex-column justify-content-between ">
                            <div className="d-flex flex-column shippingDetailInput1">
                                <input 
                                    type="text" 
                                    className="shippingDetailInput   mr-sm-2" 
                                    placeholder="City" 
                                    name="city"
                                    {...register("city",{
                                        required: "**this field is required"
                                    })}
                                    />
                                    {errors.city && (<span className="text-danger ml-2 d-inline-block  mt-0 errorMsgCheckout">{errors.city.message}</span>)}
                            </div>
                            <div className="d-flex flex-column shippingDetailInput1 ">
                                <input 
                                    type="number" 
                                    className="shippingDetailInput  ml-sm-1" 
                                    placeholder="PIN Code"
                                    name="pincode"
                                    {...register("pincode",{
                                        required: "**this field is required",
                                        minLength: {
                                            value: 6,
                                            message: "**enter valid pincode"
                                        },
                                        maxLength: {
                                            value: 6,
                                            message: "**enter valid pincode"
                                        }
                                    })}
                                />
                                {errors.pincode && (<span className="text-danger ml-2 d-inline-block   mt-0 errorMsgCheckout">{errors.pincode.message}</span>)}
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="shippingDetailInput" 
                            placeholder="State" 
                            name="state"
                            {...register("state",{
                                required: "**this field is required"
                            })}
                            />
                             {errors.state && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.state.message}</span>)}
                        <input 
                            type="number" 
                            className="shippingDetailInput" 
                            placeholder="Contact Number" 
                            name="mobile"
                            {...register("mobile",{
                                required: "**this field is required"
                            })}
                            />
                             {errors.mobile && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.mobile.message}</span>)}
                        <input 
                            type="email" 
                            className="shippingDetailInput" 
                            placeholder="Email" 
                            name="email"
                            {...register("email",{
                                required: "**this field is required",
                                pattern: {
                                    value: /^(?:\w+@\w+\.\w{2,3})$/,
                                    message: "**enter valid email"
                                }
                            })}
                            />
                             {errors.email && (<span className="text-danger ml-2 d-block  mt-0 errorMsgCheckout">{errors.email.message}</span>)}
                        <button type="submit" className="shippingDetailProceedBtn "  >Proceed to Payment</button>
                    </form>
                </div>
            )}
           
            
            <div className="mb-4 mb-sm-0">
                <div className="summaryBox p-sm-4 p-3 mb-sm-5 mb-4">
                    <p className="summaryHead">Summary</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <p className="orderHead">Order Details</p>
                    <p className=" mt-1 mb-1" style={{
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#000000",
                    }}>Price <span className="float-right">₹ {price}</span></p>
                    <p className="mt-1 mb-1" style={{
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#000000",
                    }}>Shipping <span className="float-right">₹ 0.00</span></p>
                      <p className="  mt-1 mb-1" style={{
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#000000",
                    }}>Discount <span className="float-right">₹ 0.00</span></p>
                    <hr className="mb-2" style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <p className="mt-1 mb-1 " style={{
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "18px",
                        lineHeight: "23px",
                        color: "#13375B",
                    }}>Total Price<span className="float-right" style={{color: "#F2994A"}}>₹ {price}</span></p>
                    <hr className="mt-2 " style={{borderTop: "1px solid #D2D2D2"}}></hr>
                </div>
                <div className="summaryBox p-sm-4 p-3">
                    <p className="summaryHead">In Your Cart({
                        cartItem ? cartItem.length : 0
                    })</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    {
                       cartItem && cartItem.map((val,i)=>{
                            
                           return(
                            <ProductDetailCardInCheckout
                                imgUrl= {val.poster_details.imgUrl ? val.poster_details.imgUrl[0] : "" }
                                name={val.poster_details.name}
                                material={val.materialDimension.material_title}
                                dimension={val.materialDimension.dimension_title}
                                originalPrice={val.total}
                                quantity={val.quantity}
                                key={i}
                                /> 
                           )
                       })
                    }
                   
                        <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                       <Link to="/cart" style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "15px",
                            lineHeight: "18px",
                            textDecorationLine: "underline",
                            color: "#56CCF2",
                            marginBottom: "0"
                        }}>
                       <p style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "15px",
                            lineHeight: "18px",
                            textDecorationLine: "underline",
                            color: "#56CCF2",
                            marginBottom: "0"
                        }} >Edit Cart</p>
                       </Link>
                </div>
            </div>
            </div>
            
        </>
    );
};


export default Checkout;