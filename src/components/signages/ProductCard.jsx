import React,{ useState, useEffect} from "react";
import StarIcon from '@material-ui/icons/Star';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Material1 from "../../images/Fold.svg";
import Material2 from "../../images/Hand.svg";
import dimension1 from "../../images/Dimension1.svg"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Axios from "axios";
import {API} from "../../backend";
const MySwal = withReactContent(Swal);




const ProductCard = (props) =>{

    const [material, setMaterial] = useState("");
    const [dimension, setDimension] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [render,setRender] = useState(false);
    
   
    const addToCartPopUp = () => {
        
        
        
        const MaterialSelect =  (e) => {           
            e.target.classList.add('popupSelect');
           // console.log(e.target.id);
            if(e.target.id === "m1")
            {
                setMaterial("125 Micron (non-tearable)");
            }else if(e.target.id === "m2"){
                setMaterial("Self-adhesive (premium)");
            }else{
                setMaterial("Self-adhesive 3mm sunboard (premium)");
            }
            setTimeout(()=>{
                MySwal.clickConfirm();
            },500);
        }
        const dimensionSelect = (e) => {
            e.target.classList.add('popupSelect');
            if(e.target.id === "m1")
            {
                setDimension("16in by 24in");
            }else if(e.target.id === "m2"){
                setDimension("19in by 27in");
            }else{
                setDimension("24in by 36in");
            }
            setTimeout(()=>{
                MySwal.clickConfirm();
            },500);
            
//const forceUpdate = React.useCallback(() => updateState({}), []);
            setRender(true);
        }
        const qtySelect = () => {
            MySwal.clickConfirm();
            console.log(dimension);
            console.log(material);
        }
        MySwal.mixin(
            {
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,    
            }
        ).queue([
            {  
                html: <div className="mt-3">
                <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                    position: "absolute",
                    top: "2px",
                    right: "2px",
                    color: "#000"
                }} />
                <img src={props.src} alt="productImage" className="popupImg" />
                <p className=" mt-2 popupTitle">{props.name}</p>
                <div className=" mt-2  ">
                    <p className="popupHead  mb-3">Select Material</p>
                    <div className="d-flex justify-content-between ">
                        <div className="popupMaterialDimension selected z-index-2" id="m1" role="button"   onClick={MaterialSelect} >
                            <img src={Material2} className="popupMaterialImg1 " alt="material" ></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">125 Micron (non-tearable)</p>
                        </div>
                        <div className="popupMaterialDimension " id="m2" role="button"   onClick={MaterialSelect} >
                            <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive (premium)</p>
                        </div>
                        <div className="popupMaterialDimension" id="m3" role="button"  onClick={MaterialSelect}  >
                            <img src={Material1} className="popupMaterialImg2 mt-2" alt="material"></img>
                            <p className="text-center popupMaterialText mt-sm-3 mt-2">Self-adhesive 3mm sunboard (premium)</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                </div>
            </div>,
            padding: "10px",
            backdrop: "rgba(0, 0, 0, 0.6)",
            showConfirmButton: false,
            scrollbarPadding: false,
            showClass: {
            popup: 'animate__animated animate__zoomIn  animate__faster',
            backdrop: 'animate__animated animate__fadeIn  animate__faster'
            },
            hideClass: {
            popup: 'swal2-noanimation',
            backdrop: ''
            },
            

            },
            {
                html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}</p>
                    <div className=" mt-2 ">
                        <p className="popupHead  mb-3">Select Dimension</p>
                        <div className="d-flex justify-content-between ">
                            <div className="popupMaterialDimension selected" id="m1" role="button" onClick={dimensionSelect}  >
                                <img src={dimension1} className="popupDimensionImg1 mt-3 mb-sm-3 " alt="material" ></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-4">16in by 24in</p>
                            </div>
                            <div className="popupMaterialDimension " id="m2" role="button"  onClick={dimensionSelect}  >
                                <img src={dimension1} className="popupDimensionImg2 mt-3 mb-1 mb-sm-0" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-4 mt-2">19in by 27in</p>
                            </div>
                            <div className="popupMaterialDimension" id="m3" role="button"  onClick={dimensionSelect} >
                                <img src={dimension1} className="popupDimensionImg3 mt-2" alt="material"></img>
                                <p className="text-center popupMaterialText mt-sm-3 mt-1">24in by 36in</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>
                        
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'swal2-noanimation'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: ''
                }
            },
            {
                html: <div className="mt-3">
                    <HighlightOffIcon onClick={MySwal.close} role="button" style={{
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        color: "#000"
                    }} />
                    <img src={props.src} alt="productImage" className="popupImg" />
                    <p className=" mt-2 popupTitle">{props.name}</p>
                    <div className=" mt-2 ">
                        <p className="popupHead   mb-3">Select Quantity</p>
                        <ButtonGroup
                            size="small"
                            className="justify-content-center "
                            aria-label="small outlined button group"
                            style={{ width: "20px", height: "30px" }}
                          >
                            <Button
                                onClick={()=> setQuantity(quantity => quantity-1)}
                              className="shadow-none "
                              style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                            >
                              <RemoveIcon style={{ color: "grey", width: "20px" }} />
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
                                paddingRight: "14px",maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
                              }}
                            >
                              {quantity}
                            </Button>
                            <Button onClick={()=> setQuantity(quantity => quantity+1)} className="p-0" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} >
                              <AddIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                          </ButtonGroup>
                          <p className="qtyPopupText  mb-1 mt-2">Material: <span style={{fontWeight: "600"}}>{material}</span></p>
                          <p className="qtyPopupText mb-2">Dimension: <span style={{fontWeight: "600"}}>{dimension}</span></p>
                          <p className="qtyPopupText" style={{fontWeight: "normal"}}>Price: <span className="popupPrice ml-1"> ₹219.00</span><span className="ml-2 ml-sm-3 popupPriceTag">(Inclusive of all Taxes)</span></p>
                          <div className="mx-auto popupBtn" role="button" onClick={qtySelect}>Add to Cart</div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#757575",borderRadius: "50%"}}></div>
                        <div className="m-1" style={{width: "10px", height: "10px", background: "#003459", borderRadius: "50%"}}></div>                  
                    </div>
                </div>,
                padding: "10px",
                backdrop: "rgba(0, 0, 0, 0.6)",
                showConfirmButton: false,
                scrollbarPadding: false,
                showClass: {
                popup: 'animate__animated animate__zoomIn  animate__faster',
                backdrop: 'swal2-noanimation'
                },
                hideClass: {
                popup: 'swal2-noanimation',
                backdrop: 'animate__animated animate__fadeOut  animate__faster'
                }
            }
        ]).then((result)=>{
            const answers = JSON.stringify(result.value)
            if(answers){
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
                                <img src={props.src} alt="productImage" className="toastImg " />
                                <div className="ml-2 ">
                                <p className="toastAddedText">Added to Cart</p>
                                <p className="qtyPopupText text-left font-weight-normal mb-1" >{props.name}</p>
                                <p className="qtyPopupText text-left mb-0" style={{fontWeight: "600"}}>Quantity: {quantity}</p>
                                <a href="/cart"><p className="mb-0" style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    lineHeight: "20px",
                                    textDecorationLine: "underline",
                                    color: "#F2994A",
                                    textAlign: "right"
                                }}>View Cart</p></a>
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
                    }
                )
            }
        })
    };

    return(
    <div className="productCardBox">
        <Link  to={`/${props.catSlug}/${props.subCatSlug}/${props.slug}/id=${props.id}`}  >
            <img src={props.src} className="" alt="productImage" className="productCardImg"/>
        </Link>
        <div className=" p-0">
            <div className=" productCardTitle"><Link className=" productCardTitle " to={`/${props.catSlug}/${props.subCatSlug}/${props.slug}/id=${props.id}`} >{props.name}</Link></div>
            <p className="mb-0 mb-sm-2 mt-1 productCardDetail  ">Starts from Rs. {props.startPrice}<span className="float-right d-flex" style={{color: "#757575" , height: "12px"}}>{props.rating}<StarIcon className="d-none d-sm-inline-block " style={{width: "16px",height: "18px", color: "#F2C94C"}}  /><StarIcon className="d-inline-block d-sm-none mt-0 " style={{width: "12px",height: "12px", color: "#F2C94C"}}  /></span></p>
            <div className="d-inline-block productCardAddToCart  " role="button" onClick={addToCartPopUp}>Add to Cart</div>
            <span className="productCardDetail2  d-inline-block  mt-2 mt-sm-0">{props.itemBought} bought this</span>
        </div>
    </div>
    );
};

export default ProductCard;