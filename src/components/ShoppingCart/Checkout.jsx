import React from "react";
import {Link} from "react-router-dom";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import SafeTwo from "../../images/BeSafe.svg";
import AddIcon from '@material-ui/icons/Add';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
    const login=0;

    const orderConfirm= () =>{
        MySwal.fire({
            html: <div className="d-flex mt-2">
                    <CheckCircleIcon style={{color: "#0C9B86"}} />
                    <p className="ml-2" style={{color: "#0C9B86"}}>Order Confirmed!</p>
                </div>,
            
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            width: "500px",
            height: "100px",
            backdrop: "rgba(0, 0, 0, 0.5)",
            scrollbarPadding: false,
        })
    }

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
            {login ? (
                <div className="shippingDetailBox p-4 mr-sm-5  mb-4 mb-sm-0">
                    <p className="perHead">Shipping Details</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <p className="orderHead">Select Shipping Address</p>
                    <div className="checkoutAddressBox">
                        <div className="p-3  " style={{
                            fontSize: "14px",
                            lineHeight: "18px",
                            border: "2px solid #2D9CDB",
                            boxSizing: "border-box",
                            borderRadius: "5px",
                            width: "127px",
                        height: "171px",
                        }}>
                            <p style={{fontWeight: "600"}}>Name</p>
                            <p style={{fontWeight: "400"}}>Address Line 1</p>
                            <p style={{fontWeight: "400"}}>Address Line 2</p>
                            <p style={{fontWeight: "400"}}>Address Line 3</p>
                        </div>
                        <div className="p-3 " style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        border: "1px solid #D2D2D2",
                        boxSizing: "border-box",
                        borderRadius: "5px",
                        width: "127px",
                        height: "171px",
                        }}>
                        <p style={{fontWeight: "600"}}>Name</p>
                        <p style={{fontWeight: "400"}}>Address Line 1</p>
                        <p style={{fontWeight: "400"}}>Address Line 2</p>
                        <p style={{fontWeight: "400"}}>Address Line 3</p>
                        </div>
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

                    <button className="shippingDetailProceedBtn mt-4 " onClick={orderConfirm}>Proceed to Payment</button>
                </div>
            ): (
                <div className="shippingDetailBox p-4  mr-sm-5  mb-4 mb-sm-0">
                    <p className="perHead">Shipping Details</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <input type="text" className="shippingDetailInput" placeholder="First Name" />
                    <input type="text" className="shippingDetailInput" placeholder="Last Name" />
                    <input type="text" className="shippingDetailInput" placeholder="Address Line 1" />
                    <input type="text" className="shippingDetailInput" placeholder="Address Line 2" />
                    <input type="text" className="shippingDetailInput" placeholder="City" />
                    <input type="text" className="shippingDetailInput" placeholder="State" />
                    <input type="number" className="shippingDetailInput" placeholder="PIN Code" />
                    <input type="number" className="shippingDetailInput" placeholder="Contact Number" />
                    <input type="email" className="shippingDetailInput" placeholder="Email" />
                    <button className="shippingDetailProceedBtn " onClick={orderConfirm} >Proceed to Payment</button>
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
                    }}>Price <span className="float-right">₹ 800.00</span></p>
                    <p className="mt-1 mb-1" style={{
                        fontFamily: "Source Sans Pro",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#000000",
                    }}>Shipping <span className="float-right">₹ 200.00</span></p>
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
                    }}>Total Price<span className="float-right" style={{color: "#F2994A"}}>₹ 1020.00</span></p>
                    <hr className="mt-2 " style={{borderTop: "1px solid #D2D2D2"}}></hr>
                </div>
                <div className="summaryBox p-sm-4 p-3">
                    <p className="summaryHead">In Your Cart(2)</p>
                    <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
                    <ProductDetailCardInCheckout
                        imgUrl= {SafeTwo}
                        name="Posters | Material Handling | PRD – MH0013A"
                        material="PREMIUM SELF ADHESIVE"
                        dimension="19 INCH X 27 INCH X .2 INCH"
                        originalPrice={200}
                        quantity={2}
                        />
                        <ProductDetailCardInCheckout
                        imgUrl= {SafeTwo}
                        name="Posters | Material Handling | PRD – MH0013A"
                        material="PREMIUM SELF ADHESIVE"
                        dimension="19 INCH X 27 INCH X .2 INCH"
                        originalPrice={200}
                        quantity={2}
                        />
                        <hr style={{borderTop: "1px solid #D2D2D2"}}></hr>
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
                </div>
            </div>
            </div>
            
        </>
    );
};


export default Checkout;