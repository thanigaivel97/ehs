import Rating from "@material-ui/lab/Rating";
import React, { useRef, useState } from "react";
import { Link , useParams} from "react-router-dom";
import restrictedArea from "../../images/restrictedArea.png";
import dimension1 from "../../images/Dimension1.svg"
import "bootstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import $ from "jquery";
import { LinearProgress, CircularProgress, Box, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import BeforeStart from "../../images/BeforeStart.png";
import FloorImg from "../../images/floor1.svg";
import ProductCard from "../signages/ProductCard";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import Material1 from "../../images/Fold.svg";
import Material2 from "../../images/Hand.svg";
import designerProfile from "../../images/designerProfile.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F2994A"
        }
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                borderRadius: 4,
            },
            bar1Determinate: {
                borderRadius: 4
            },
            colorPrimary: {
                backgroundColor: "#D2D2D2"
            }
        },
        MuiCircularProgress: {
            root: {
                borderRadius: 4
            },
            circleDeterminate: {
                borderRadius: 4
            }
        }
    }
});

const ReviewCard = () => {
    return(
        <div className="border p-2  mr-2" style={{
            width: "200px",
            height: "113px",
            position: "relative"
        }}>
            <div className="row ">
                <p className="col-6 " style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    lineHeight: "18px"
                }}>User Name</p>
                <div className="col-2"></div>
                <span className="  mr-0 col-4 float-right " style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "11px",
                    lineHeight: "18px",
                    color: "#757575",
                    
                }}>4.0 <StarIcon style={{width: "13px",color: "#F2C94C"}}  /></span>
            </div>
          
                <p className="" style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "10px",
                    lineHeight: "15px",
                    position: "absolute",
                    bottom: "0",
                
                }}>Non quod quasi. Dolorem illum ipsam omnis perferendis distinctio est. Voluptas</p>
            
        </div>
    );
};

const ncard = (props) => {
    return (
        <ProductCard src={props.src} name={props.title} startPrice={props.startPrice} rating={props.rating} itemBought={props.itemBought} />
    );
};

$(document).ready(()=>{

    $(".carousel").carousel({
      interval: false
    });
  
  
    $('#nextBtn').click(()=>{
      $('#myCarousel').carousel('next');
    });
  
    $('#prevBtn').click(()=>{
      $('#myCarousel').carousel('prev');
    });
});

const PosterProductPage = (props) => {

    const {posterCatName, productName} = useParams();
    const [rating,setRating] = useState(3.7);
    const [quantity, setQuantity] = useState(1);
    const [initialAmount, setInitialAmount] = useState(200);
    const [amount, setAmount] = useState(initialAmount);
    const [visible, setVisible] = useState(4);
    const [material,setMaterial] = useState("Self-Adhesive");
    const [dimension,setDimension] = useState([24,36]);
      
    const showMoreCards = () =>{
      setVisible(9);
    }
    const showLessCards = () =>{
      setVisible(4);
    }

    const increaseQty = () => {
        setQuantity(quantity+1);
        setAmount(amount+initialAmount);
    }
    const decreaseQty = () => {
        if(quantity!==1)
            {
                setQuantity(quantity-1);
                if(quantity!==0)
                    setAmount(amount-initialAmount);
            }
    }

    const changeMaterialTo1 = () =>{
            setMaterial("125 Micron")
             $("#m1").addClass("selected");
             $("#m2").removeClass("selected");
             $("#m3").removeClass("selected");
    };
    const changeMaterialTo2 = () =>{
        setMaterial("Self-Adhesive");
        $("#m1").removeClass("selected");
        $("#m2").addClass("selected");
        $("#m3").removeClass("selected");
    };
    const changeMaterialTo3 = () =>{
        setMaterial("Self-Adhesive 3mm sunboard");
        $("#m1").removeClass("selected");
        $("#m2").removeClass("selected");
        $("#m3").addClass("selected");
    };
    const changeDimensionToS = () =>{
        const d = [16,24];
        setDimension(d);
        $("#d1").addClass("selected");
        $("#d2").removeClass("selected");
        $("#d3").removeClass("selected");
    };
    const changeDimensionToM = () =>{
        const d = [19,27];
        setDimension(d);
        $("#d1").removeClass("selected");
        $("#d2").addClass("selected");
        $("#d3").removeClass("selected");
    };
    const changeDimensionToL = () =>{
        const d = [24,36];
        setDimension(d);
        $("#d1").removeClass("selected");
        $("#d2").removeClass("selected");
        $("#d3").addClass("selected");
    };
    const similarProductInfo = [
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
      ];
    const similarProductInfo2 = [
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473 },
        { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: rating, itemBought: 473},
      ];
      const breakPoints = [
        { width: 1, itemsToShow: 2, itemsToScroll: 2 },
        { width: 780, itemsToShow: 4 }
      ];

      const likecarousel = useRef(null);
      const similarCarousel = useRef(null);
      const carousel = useRef(null);
    return(
        <div>
            <div className="container-fluid pt-3 pb-3 padding-10 d-none d-sm-block " style={{ background: "#F6F6F6", color: "#333333" }}>
              <Link to="/" style={{color: "#333333"}}>Home </Link> / <Link style={{color: "#333333"}} to="/posters">Posters</Link> / <Link style={{color: "#333333"}} to="/posters/subcat/PPE">{posterCatName}</Link> / 
              <span className="font-weight-bold" > {productName}</span>
            </div>
            <div className="row  padding-10 mt-4 " >
                <div className="col-lg-5 pl-auto pr-auto ">
                    <div className="d-block d-sm-none mb-4">
                        <h2 style={{
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "22px",
                            lineHeight: "27px",
                            color: "#000000",
                        }}>{productName}</h2>
                        <span className="font-weight-bold">4.6</span>
                        <Rating name="product-rating" defaultValue={rating} precision={0.1} size="small"  readOnly style={{zIndex: "-1" }}/>
                        <span className="font-weight-normal">(20)</span>
                        <span className="text-success float-right">In Stock</span>
                    </div>
                    
                    <Carousel showArrows={false}  renderPagination={({ pages, activePage, onClick }) => {
                                        return (
                                        <div className="d-flex justify-content-around mt-4 " >       
                                        {pages.map(page => {
                                            const isActivePage = activePage === page
                                            return (
                                                <div role="button"  key={page} onClick={() => onClick(page)} active={isActivePage}  className={isActivePage ? "paginationActive productIndicators" : "paginationInactive productIndicators"} >
                                                    <img className="d-none d-sm-block"  src={restrictedArea} alt="preprinted sign" style={{width: "50px", height: "50px"}} />
                                                    <div className="d-sm-none" style={{width: "10px", height: "10px", background: "gray", borderRadius: "50%"}}></div>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        );
                                    }}>
                        <img src={restrictedArea} alt="preprinted sign" className="productCarouselImg" />
                        <div style={{ background: "gray"}}  className="productCarouselImg"></div> 
                        <div style={{ background: "green"}}  className="productCarouselImg"></div> 
                        <div style={{ background: "black"}}  className="productCarouselImg"></div> 
                    </Carousel>
            
                    <hr className="mt-5 mb-4 d-none d-sm-block" style={{borderTop: "1px solid rgba(130, 130, 130, 0.5)"}} />
                    <div className="d-none d-sm-block">
                        <img src={designerProfile} alt="profile" />
                        <span style={{
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#000000",
                            marginLeft: "20px"
                        }}>By Pankaj Jadhav</span>
                        <p className="mt-4" style={{
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#000000",
                        }}>Other Designs by the Designer</p>
                        <div className="d-flex justify-content-between">
                            <div style={{
                                width: "100px",
                                height: "100px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "100px",
                                height: "100px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "100px",
                                height: "100px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "100px",
                                height: "100px",
                                background: "#D2D2D2",
                            }}></div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3  ">
                    <div className="d-none d-sm-block">
                        <h2 style={{
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "28px",
                            lineHeight: "35px",
                            color: "#000000",
                        }}>{productName}</h2>
                        <span className="font-weight-bold">{rating}</span>
                        <Rating name="product-rating" defaultValue={rating} precision={0.1} size="small"  readOnly/>
                        <span className="font-weight-normal">(20)</span>
                        <span className="text-success ml-4">In Stock</span>
                        <p style={{
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#757575"
                        }}>
                        473 bought this
                        </p>
                    </div>
                    
                    <div className="mb-4 mt-5 d-flex flex-sm-column flex-row justify-content-between">
                        <p className="mt-sm-4 mb-2 font-weight-bold  align-self-sm-start align-self-center selectHead">Select Material</p>
                        <div className="d-flex justify-content-between mr-0 ">
                            <div className="posterMaterialDimension selected" id="m1" role="button" onClick={changeMaterialTo1} >
                                <img src={Material2} className="materialImg1Dimension " alt="material" ></img>
                                <p className="text-center materialTextDimension">125 Micron (non-tearable)</p>
                            </div>
                            <div className="posterMaterialDimension " id="m2" role="button" onClick={changeMaterialTo2} >
                                <img src={Material1} className="materialImg2Dimension ml-sm-3 ml-2 mt-sm-2 mt-0" alt="material"></img>
                                <p className="text-center materialTextDimension">Self-adhesive (premium)</p>
                            </div>
                            <div className="posterMaterialDimension" id="m3" role="button" onClick={changeMaterialTo3} >
                                <img src={Material1} className="materialImg2Dimension ml-sm-3 ml-2 mt-sm-2 mt-0" alt="material"></img>
                                <p className="text-center materialTextDimension ">Self-adhesive 3mm sunboard (premium)</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-5 d-flex flex-sm-column flex-row justify-content-between">
                        <p className="font-weight-bold align-self-sm-start align-self-center selectHead">Select Dimensions</p>
                        <div className="d-flex justify-content-between">
                            <div className=" ml-sm-0 posterMaterialDimension selected" id="d1" role="button" onClick={changeDimensionToS} >
                                <img src={dimension1} className="posterDimension1 mt-2" ></img>
                                <p className="text-center posterDimensionText ">16” x 24”</p>
                            </div>
                            <div className=" posterMaterialDimension" role="button" id="d2" onClick={changeDimensionToM} >
                                <img src={dimension1} className="posterDimension2 mt-2 "></img>
                                <p className="text-center posterDimensionText  ">19” x 27”</p>
                            </div>
                            <div className=" posterMaterialDimension" role="button" id="d3" onClick={changeDimensionToL} >
                                <img src={dimension1} className="posterDimension3 mt-2 "></img>
                                <p className="text-center posterDimensionText">24” x 36”</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-sm-column  align-items-sm-start align-items-center">
                    <p className="font-weight-bold mr-5 mt-3 mr-sm-0 d-inline-block d-sm-block " style={{lineHeight: "30px"}}>Quantity</p>
                    <ButtonGroup
                            size="small"
                            className=" "
                            aria-label="small outlined button group"
                            style={{ width: "30px", height: "30px", }}
                          >
                            <Button
                                onClick={decreaseQty}
                              className="shadow-none  qtyBTN"
                            >
                              <RemoveIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                            <Button className="qtyBTN"
                              style={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "16px",
                                lineHeight: "18px",
                                color: "#000000",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                              }}
                            >
                              {quantity}
                            </Button>
                            <Button onClick={increaseQty} className="p-0 qtyBTN"  >
                              <AddIcon style={{ color: "grey", width: "20px" }} />
                            </Button>
                          </ButtonGroup>
                    </div>
                    <div className="mt-2 d-block d-sm-none float-right ">
                        <p className="d-inline-block mt-4" style={{
                        fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "36px",
                            color: "#757575",
                            lineHeight: "45px",  
                            color: "#003459",
                        }}>&#8377;{amount}</p>
                        <span className="ml-2" style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#757575",
                            lineHeight: "14px"                        
                        }}>(Inclusive of All Taxes)</span>
                    </div>
                    <button className="d-block d-sm-none w-100 p-2 mt-4" style={{
                        border: "none",
                        background: "#003459",
                        borderRadius: "6px",
                        color: "white",
                    }}>Add To Cart</button>
                    <div className="mt-4 pl-3 pl-sm-0">
                        <Link className="text-dark " style={{textDecoration: "underline",fontSize: "0.9rem"}}>Add to Wishlist<FavoriteBorderIcon className="ml-1" style={{transform: "scale(0.8)"}} /></Link>
                        <Link className="text-dark ml-5" style={{textDecoration: "underline" , fontSize: "0.9rem"}}>Share<ShareOutlinedIcon className="ml-1" style={{transform: "scale(0.7)"}} /></Link>
                    </div>              
                </div>
                <div className="col-lg-4">
                    <div className="d-none d-sm-block" style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "600",
                        color: "#000000",
                        marginBottom: "5px",
                        marginTop: "165px"
                    }}>
                        <p className="" style={{fontSize: "14px", lineHeight: "16px"}}>Product Details</p>
                        <p style={{fontSize: "12px", lineHeight: "12px"}}>Material: <span style={{fontWeight: "500"}}>{material}</span></p>
                        <p style={{fontSize: "12px", lineHeight: "12px"}}>Dimension: <span style={{fontWeight: "500"}}>{dimension[0]}inches by {dimension[1]}inches</span></p>
                        <p className="mb-0" style={{fontSize: "12px", lineHeight: "10px"}}>Weight: <span style={{fontWeight: "500"}}>100g</span></p>
                    </div>
                    <div className="productInfo mt-4 mt-sm-2">
                        <li>Both Interior and Exterior warranty is of three years.</li>
                        <li>Prices are inclusive of G.S.T</li>
                        <li>Performa Invoice can be generated at checkout.</li>
                    </div>
                    <div className="mt-0 mt-sm-5 pt-4 pt-sm-5  mt-sm-5 catTagSKU">
                        <p><span style={{fontWeight: "600"}}>Category: </span>Chemical Hazards, PPE</p>
                        <p><span style={{fontWeight: "600"}}>Tags: </span>Using Safety Gloves .. is all in Your Hands.</p>
                        <p><span style={{fontWeight: "600"}}>SKU: </span>posters-chemical-hazard-sku-1114021234-prd-ch001g</p>
                    </div>
                    <div className="mt-5 d-none d-sm-block">
                        <p className="d-inline-block mt-4" style={{
                        fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "36px",
                            color: "#757575",
                            lineHeight: "45px",  
                            color: "#003459",
                        }}>&#8377;{amount}</p>
                        <span className="ml-5" style={{
                            fontFamily: "Source Sans Pro",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#757575",
                            lineHeight: "14px"                        
                        }}>(Inclusive of All Taxes)</span>
                    </div>
                    <button className=" d-none d-sm-block w-100 p-2 mt-4" style={{
                        border: "none",
                        background: "#003459",
                        borderRadius: "6px",
                        color: "white",
                    }}>Add To Cart</button>
                    
                    <div className="d-block d-sm-none mt-4">
                        <img src={designerProfile} alt="profile" />
                        <span style={{
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#000000",
                            marginLeft: "20px"
                        }}>By Pankaj Jadhav</span>
                        <p className="mt-4" style={{
                            fontWeight: "normal",
                            fontSize: "11px",
                            lineHeight: "14px",
                            color: "#000000",
                        }}>Other Designs by the Designer</p>
                        <div className="d-flex justify-content-between">
                            <div style={{
                                width: "70px",
                                height: "70px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "70px",
                                height: "70px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "70px",
                                height: "70px",
                                background: "#D2D2D2",
                            }}></div>
                            <div style={{
                                width: "70px",
                                height: "70px",
                                background: "#D2D2D2",
                            }}></div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div style={{
                        borderTop: "6px solid #F6F6F6",
                        margin: "30px 0px"
                    }}></div>
            

            <div className="row padding-10">
                    <div className="col-4  d-none d-sm-block">
                        <h2 style={{
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "30px",
                        }}>Ratings</h2>
                        <div className="row">
                            <div className="col-3 mt-auto mb-0">
                            <Box position="relative" display="inline-flex">
                                <CircularProgress size="50px" variant="determinate" value={87} style={{color: "green"}} />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography variant="caption" component="div" color="black">{rating}</Typography>
                                </Box>
                                </Box>
                                <p className="mb-0" style={{
                                    fontSize: "14px"
                                }}>20 ratings</p>
                            </div>
                            <div className="col-9" style={{fontSize: "14px", fontWeight: "normal"}}>
                                <ThemeProvider theme={theme}>
                                <div  className="d-inline-block ">1 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={40} /></Box>
                                <div  className="d-inline-block ">2 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={20} /></Box>
                                <div  className="d-inline-block ">3 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={60} /></Box>
                                <div  className="d-inline-block ">4 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={40} /></Box>
                                <div  className="d-inline-block ">5 star </div><Box width="80%" display="inline-block" ml={1}><LinearProgress color="primary" variant="determinate" value={50} /></Box>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 d-none d-sm-block ">
                    <h2 className="d-inline-block" style={{
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "30px",
                        }}>Reviews</h2>

                        <p className="d-inline-block float-right" style={{
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "30px",
                            textDecoration: "underline",
                            color: "#40CEFC"
                        }}>View All</p>

                        <div className="d-flex  col-12 pl-0 pr-0">
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                    </div>
                    <div className="d-block d-sm-none padding-10">
                            <h2 className="d-inline-block" style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                }}>Reviews</h2>

                                <p className="d-inline-block float-right" style={{
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    lineHeight: "30px",
                                    textDecoration: "underline",
                                    color: "#40CEFC"
                                }}>View All</p>
                                <div className="row ">
                                <div className="col-4 d-block d-sm-none mt-auto">
                                        <Box position="relative" display="inline-flex">
                                            <CircularProgress size="50px" variant="determinate" value={rating*20} style={{color: "green"}} />
                                            <Box
                                                top={0}
                                                left={0}
                                                bottom={0}
                                                right={0}
                                                position="absolute"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Typography variant="caption" component="div" color="black">{rating}</Typography>
                                            </Box>
                                            </Box>
                                            <p className="mb-0 mt-3 " style={{
                                                fontWeight: "600",
                                                fontSize: "14px",
                                                width: "70px"
                                            }}>20 ratings</p>
                                    </div>
                                <div className="col-7 ml-auto ">
                                    <ReviewCard />
                                </div>
                        </div>
                    </div>
            </div>


            <div style={{
                        borderTop: "6px solid #F6F6F6",
                        margin: "30px 0px"
                    }}></div>

            <div className="padding-10">
                    <h2 className=" d-inline-block" style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000",
                        marginBottom: "30px"
                    }}>Similar items</h2>
                    
                     {visible===4 ? (
             <Link to="/posters/subcat/PPE"> <p role="button" className="seemore d-inline-block float-right" style={{lineHeight: "24px", fontWeight: "600"}} >View All</p></Link>
            ):(
              <p role="button" className="seemore d-inline-block float-right" style={{lineHeight: "24px", fontWeight: "600"}} onClick={showLessCards}>View Less</p>
            ) }
            <span className="float-right d-none d-sm-block mr-3">Page 1-6</span>

                   {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */} 
                <div className=" d-sm-flex d-none" style={{opacity: "1"}}>
                    <ArrowBackIosRoundedIcon onClick={() => similarCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={similarCarousel} style={{opacity: "1!important"}}>
                        {similarProductInfo.map(ncard)}
                    </Carousel>  
                    <ArrowForwardIosRoundedIcon onClick={() => similarCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block"  />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {similarProductInfo.slice(0,4).map(ncard)}
                </div>
            </div>            
            <div className="padding-10 mt-5">
                    <h2 className=" d-inline-block" style={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000",
                        marginBottom: "40px"
                    }}>You may also like</h2>
                    
                     {visible===4 ? (
                        <Link to="/posters/subcat/PPE"> <p role="button" className="seemore d-inline-block float-right" style={{lineHeight: "24px", fontWeight: "600"}} >View All</p></Link>
            ):(
              <p role="button" className="seemore d-inline-block float-right" style={{lineHeight: "24px", fontWeight: "600"}} onClick={showLessCards}>View Less</p>
            ) }
            <span className="float-right d-none d-sm-block mr-3">Page 1-6</span>

                   {/* <ProductCard src={BeforeStart} name="Floor Graphics | Printable Catalog | PRD-FG009" startPrice={219} rating={rating} itemBought={473} /> */} 
                <div className=" d-sm-flex d-none" style={{opacity: "1"}}>
                    <ArrowBackIosRoundedIcon onClick={() => likecarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block" />
                    <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={likecarousel} style={{opacity: "1!important"}}>
                        {similarProductInfo.map(ncard)}
                    </Carousel>  
                    <ArrowForwardIosRoundedIcon onClick={() => likecarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle d-none d-sm-block"  />
                </div>
                <div className="d-sm-none productsOnMobile">
                    {similarProductInfo.slice(0,4).map(ncard)}
                </div>
            
            </div> 


{/*<div className="d-flex justify-content-around">{similarProductInfo.slice(0,visible).map(ncard)}</div>
            <div className="d-flex justify-content-around">{similarProductInfo2.slice(0,visible).map(ncard)}</div>*/}

            
           

    
            <div className="didNotFindBottomBanner mx-auto">
                <p className="text1 d-inline-block ">Did not find what you were looking for?</p>
                <div className="d-inline-block float-none float-sm-right">
                    <p className="text2 ">Contact us and get the perfect print made for you</p>
                    <p className="text3 ">Share your design or slogan with us, and our designers will create one for you!</p>
                </div>
            </div>       
           
        </div>
    );
};

export default PosterProductPage;