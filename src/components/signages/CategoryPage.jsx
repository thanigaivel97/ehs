/*jshint esversion: 6 */
import React, { useEffect, useRef, useState } from "react";
import Cols from "./Cols";
import { Grid, Image, Segment } from "semantic-ui-react";
import PPE from "../../images/Pre-printed_Signages.svg";
import SignalTemplate from "../../images/Signal-Template_Signages.svg";
import DIY from "../../images/DIY_Signages.svg";
import Pictograms from "../../images/Pictogram_Signages.svg";
import Hindi from "../../images/posterCategory/HINDI.png";
import English from "../../images/posterCategory/ENGLISH.png";
import Bilingual from "../../images/posterCategory/BILINGUAL.png";
import GetBPoster from "../../images/GetBiPoster.svg";
import PosterNow from "../../images/PosterNow.svg";
import Upto50 from "../../images/Upto50Offer.svg";
import Card2 from "./Card2";
import { connect } from "react-redux";
import { getBestSeller, config } from "../../helper/apiPath";
import Axios from "axios";
import $ from "jquery";
import { BottomAddedCart } from "../product_list2/right/Right";
import { findMat, findDim } from "../../helper/apiPath";
import CloseBtn from "../../images/ExitBtn.svg";
import { ModalCard } from "./Card2";
import ModelCard3 from "../product_list2/right/ModelCard3";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Back from "../../images/Signages_banner.png";
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel,  { consts } from "react-elastic-carousel";
import Card from "./Card";
import SafeTwo from "../../images/BeSafe.svg";
import Mind from "../../images/Mind.svg";
import BeforeStart from "../../images/BeforeStart.svg";
import FloorImg from "../../images/floor1.svg";


const ncard = (val) => {
  return (
      <Card src={val.src} title={val.title} />
  );
};

const mcard = (val) => {
  return (
      <ImgBox src={val.src} title={val.title} />
  );
};

const ImgBox = (props) => {
  return (
    <div className="text-center bestsellerBox">
      <img className="bestsellerBoxImg" src={props.src} alt="poster" />
      <p
        className="bestsellerBoxTitle"
      >
        {props.title}
      </p>
    </div>
  );
};

function Design() {
  return (
    <div className="design row m-0">
      <div className="ml-5">
        <p id="rightText" className="ml-5" style={{ marginTop: "10px" }}>
          SIGNAGES
        </p>
        <p id="rightbelow" className="ml-5" style={{ marginTop: "-10px" }}>
          Signal that Matters.
        </p>
        <p id="rightdes" className="ml-5" style={{ marginTop: "-35px" }}>
          Floor Graphics are used at Places of High Foot Traffic and to create a
          sense of Cautious and safety in the Surroundings.
        </p>
      </div>
      <div className="col row ml-5 pl-5" style={{ marginTop: "0px" }}>
        <img src={Back} alt="signage background" height="200px" />
      </div>
    </div>
  );
}

const CategoryPage = (props) => {
  const [posterData, setPosterData] = React.useState([]);
  const [authUser, setAuthUser] = React.useState("");


  useEffect(() => {
    Axios.get(
      getBestSeller + "/signages",
      config(
        props.loginResponse.token || localStorage.getItem("ehstoken12345678910")
      )
    )
      .then((res) => {
        setPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
    
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, [props.loginResponse.token]);

  const cardDet = [
    { src: PPE, title: "Pre-Printed" },
    { src: Pictograms, title: "Pictograms" },
    { src: SignalTemplate, title: "Signal-Template-Sheets" },
    { src: DIY, title: "DO-IT-YOURSELF" },
  ];

  const twoPosters = [GetBPoster, PosterNow];

  const [bottomDet, setBottomDet] = useState({});

  const addToCart = (bottomDet) => {
    setBottomDet(bottomDet);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(bottomDet);
  };

  const [selectedModal, setSelectedModal] = React.useState({});

  const selectedModalCard = (data) => {
    setSelectedModal(data);
    $("#modalOpen").trigger("click");
  };

  const [selectMatDim, setMatDim] = useState({
    Material: { one: false, two: false, three: false },
    Dimension: { one: false, two: false, three: false },
  });

  let card1Det, card2Det;
  try {
    card1Det = {
      select: "Material",
      box: [
        {
          src: selectedModal.material[0].imgUrl,
          title: selectedModal.material[0].title,
          name: "one",
          select: "Material",
        },
        {
          src: selectedModal.material[1].imgUrl,
          title: selectedModal.material[1].title,
          name: "two",
          select: "Material",
        },
        {
          src: selectedModal.material[2].imgUrl,
          title: selectedModal.material[2].title,
          name: "three",
          select: "Material",
        },
      ],
    };
    card2Det = {
      select: "Dimension",
      box: [
        {
          src: selectedModal.dimension[0].imgUrl,
          title: selectedModal.dimension[0].title,
          cus: true,
          cusWidth: "90",
          cusHeight: "50",
          name: "one",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[1].imgUrl,
          title: selectedModal.dimension[1].title,
          cus: true,
          cusWidth: "100",
          cusHeight: "60",
          name: "two",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[2].imgUrl,
          title: selectedModal.dimension[2].title,
          cus: true,
          cusWidth: "120",
          cusHeight: "80",
          name: "three",
          select: "Dimension",
        },
      ],
    };
  } catch (e) {}

  const card3Det = {
    select: "Quantity",
    quantity: 1,
    material: "Material: " + findMat(selectMatDim.Material),
    dimension: "Dimensions:" + findDim(selectMatDim.Dimension),
    price: selectedModal.originalPrice,
  };

  const ModalDet = {
    src: selectedModal.imgUrl,
    title: selectedModal.name,
    select: "Select Material",
    selectedMatDim: selectMatDim,
    card1: card1Det,
    card2: card2Det,
    card3: card3Det,
  };

  const [modalCarousel, setModalCar] = useState({
    one: true,
    two: false,
    three: false,
  });

  const setModalCarousel = (e) => {
    if (e.target.id === "one") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "two") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "three") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const setModalCarouselb = (e) => {
    if (e.target.id === "oneb") {
      setModalCar({ one: true, two: false, three: false });
    } else if (e.target.id === "twob") {
      setModalCar({ one: false, two: true, three: false });
    } else if (e.target.id === "threeb") {
      setModalCar({ one: false, two: false, three: true });
    }
  };

  const shopByCategoryCards = [
    {src: PPE, title: "Pre-Printed" },
    { src: SignalTemplate, title: "Signal Template Sheets" },
    { src: Pictograms, title: "Pictograms" },
    { src: DIY, title: "Do-It-Yourself" },
  ];
  const shopByLanguageCards = [
    {src: Hindi, title: "Hindi" },
    {src: English, title: "English"},
    { src: Bilingual, title: "BiLingual-Hindi-and-English" },
  ];

  const FloorGraphicsImgTitle = [
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
    { src: FloorImg, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009" },
    { src: BeforeStart, title: "Floor Graphics | Printable Catalog | PRD-FG009"},
  ];


  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 5 }
  ];

  const signageCatCarousel = useRef();
  const signageCat2Carousel = useRef();

  return (
    <>

      <div>
        <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
            <div className="pt-2 pb-lg-2">
                <Link to="/" className="text-dark">Home </Link>/<span className="font-weight-bold" > Signages</span>
            </div>
            <div className="d-flex mt-lg-2">
              <h1 className="mt-2 catHead" >
              Signages
              </h1>
              <img src={Upto50} className="ml-auto d-none d-sm-block" style={{width: "640px"}} />
            </div>
          </div>

          <div  className="padding-10  ">
          <h2 className="shopByHead d-inline-block" >Shop by Category</h2>
          <div className="d-flex float-right mt-4 align-items-center d-block d-sm-none">
          <ArrowBackIosRoundedIcon onClick={() => signageCatCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto mr-4 shadow-sm rounded-circle " />
          <ArrowForwardIosRoundedIcon onClick={() => signageCatCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle "  />
         
          </div>
           <div className="" style={{opacity: "1"}}>       
            <Carousel className="d-flex justify-content-start" itemPosition={consts.START} breakPoints={breakPoints}  pagination={false} showArrows={false} ref={signageCatCarousel} style={{opacity: "1!important"}} showEmptySlots>
                {shopByCategoryCards.map(ncard)}
            </Carousel>                
          </div>
        </div>

        <div style={{
        borderTop: "6px solid #F6F6F6",
        margin: "50px 0 20px 0"
      }}></div>
       <div  className="padding-10">
          <h2 className="shopByHead d-inline-block mb-3" >Shop by Language</h2>
          <div className="d-flex float-right mt-4 align-items-center d-block d-sm-none">
          <ArrowBackIosRoundedIcon onClick={() => signageCat2Carousel.current.slidePrev()} role="button" className="border mt-auto mb-auto mr-4 shadow-sm rounded-circle " />
          <ArrowForwardIosRoundedIcon onClick={() => signageCat2Carousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle "  />
         
          </div>
           <div className="" style={{opacity: "1"}}>       
            <Carousel className="d-flex " itemPosition={consts.START} breakPoints={breakPoints}  pagination={false} showArrows={false} ref={signageCat2Carousel} style={{opacity: "1!important"}} showEmptySlots>
                {shopByLanguageCards.map(ncard)}
            </Carousel>                
          </div>
        </div>

        <div id="myCarousel" class="carousel slide padding-10 mt-5" data-ride="carousel" data-interval="false" style={{backgroundColor: "#F6F6F6"}}>
                  <h2 className="shopByHead d-inline-block mt-4 ">Bestsellers</h2>
                  <div className="d-inline-block float-right mt-4  align-middle">
                    <ArrowBackIosRoundedIcon id="prevBtn"  role="button" data-slide="prev" className="border shadow-sm m-3 rounded-circle pointer" />
                    <ArrowForwardIosRoundedIcon id="nextBtn" role="button" data-slide="next" className="border shadow-sm m-3 rounded-circle pointer "  />
                  </div>
              <div className="carousel-inner " >
                <div className="carousel-item active ">
                  {FloorGraphicsImgTitle.slice(0,4).map(mcard)}
                </div>
                <div className="carousel-item ">
                  {FloorGraphicsImgTitle.slice(4,9).map(mcard)}
                </div>
              </div>
        </div>
        
        

        <div className="p-lg-5 mt-4 mb-0">
            <img src={Upto50} className="ml-auto mr-auto d-block w-75 "  /> 
        </div>


      </div>





{/*
      <div>
        <Design />

        <div className="posters mt-3 mb-3">
          <Grid>
            <p
              className="ml-5"
              style={{
                fontFamily: "Source Sans Pro",
                fontWeight: "600",
                fontSize: "25px",
                lineHeight: "10px",
                color: "#000000",
              }}
            >
              Signages
            </p>

            <p
              className="ml-5"
              style={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                color: "#000000",
              }}
            >
              Popular Categories
            </p>

            <Cols data={cardDet} cols="4" />

              <Link to="/signages/PRE-PRINTED/Preprinted-Sign-1">SignageProductPage</Link>


            <Grid.Row className="mt-4 justify-content-center" columns="equal">
              {twoPosters.map((v, i) => (
                <Segment key={i}>
                  <Image
                    className={i !== 0 ? "ml-4" : null}
                    style={{ height: "180px" }}
                    src={v}
                  />
                </Segment>
              ))}
            </Grid.Row>

            <Grid.Column className="mt-4">
              <Image src={Upto50} className="mx-auto d-block" />
            </Grid.Column>

            <p
              className="ml-5"
              style={{
                fontFamily: "Source Sans Pro",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              Best Sellers
            </p>

            <Grid.Row
              columns={5}
              className="mt-4 ml-5 mr-5 justify-content-start"
            >
              {posterData.map((v, i) => (
                <Grid.Column key={i} className={i !== 0 ? "ml-3" : null}>
                  <Card2
                    data={v}
                    addToCart={addToCart}
                    selectedModalCard={selectedModalCard}
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </div>

        <div
          id="bottomCart"
          className="pt-3 pl-4"
          style={{
            width: "320px",
            height: "150px",
            backgroundColor: "white",
            zIndex: "22",
            position: "fixed",
            bottom: "30px",
            right: "30px",
            boxShadow: "0px 2px 20px 4px rgba(0, 0, 0, 0.25)",
            display: "none",
          }}
        >
          <BottomAddedCart det={bottomDet} />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        id="modalOpen"
        style={{ display: "none" }}
      >
        {""}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {""}
              </h5>
              <button
                type="button"
                id="modalClose"
                className="btn shadow-none mr-2 p-0 m-0"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  width: "25px",
                  height: "25px",
                  background: "white",
                }}
              >
                <img src={CloseBtn} alt="close" />
              </button>
            </div>
            <div className="modal-body border-0">
              <img
                width="320px"
                height="250px"
                className="d-block mx-auto"
                style={{ marginTop: "-30px" }}
                src={ModalDet.src}
                alt={ModalDet.title}
              />
              <p
                className="text-center mt-1"
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "19px",

                  color: "#000000",
                }}
              >
                {ModalDet.title}
              </p>
              {modalCarousel.one ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card1?.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto" columns="3">
                    {ModalDet.card1?.box.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-4" : "ml-3"}
                      >
                        <ModalCard
                          setMatDim={setMatDim}
                          selected={selectMatDim.Material}
                          addToCart={addToCart}
                          boxDet={v}
                          oriDet={selectedModal}
                          name="material"
                        />
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              ) : null}

              {modalCarousel.two ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card2.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto" columns="3">
                    {ModalDet.card2.box.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-4" : "ml-3"}
                      >
                        <ModalCard
                          setMatDim={setMatDim}
                          selected={selectMatDim.Dimension}
                          addToCart={addToCart}
                          boxDet={v}
                          oriDet={selectedModal}
                          name="dimension"
                        />
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              ) : null}

              {modalCarousel.three ? (
                <Grid>
                  <Grid.Row className="text-center justify-content-center">
                    <p
                      className="text-center mt-1"
                      style={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Select {ModalDet.card3.select}
                    </p>
                  </Grid.Row>
                  <Grid.Row className="mx-auto justify-content-center">
                    <ModelCard3
                      det={ModalDet.card3}
                      selectMatDim={selectMatDim}
                      addToCart={addToCart}
                      oriDet={selectedModal}
                    />
                  </Grid.Row>
                </Grid>
              ) : null}
            </div>
            <div className="modal-footer border-0 justify-content-center bg-white pt-2">
              <div
                style={{ position: "absolute", left: "22px", bottom: "5px" }}
              >
                <NavigateBeforeIcon
                  style={
                    modalCarousel.two
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="oneb"
                  onClick={setModalCarouselb}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "22px",
                  bottom: "5px",
                }}
              >
                <NavigateBeforeIcon
                  style={
                    modalCarousel.three
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="twob"
                  onClick={setModalCarouselb}
                />
              </div>

              <div
                id="one"
                className={modalCarousel.one ? "bg-secondary" : ""}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>
              <div
                id="two"
                className={modalCarousel.two ? "ml-2 bg-secondary" : "ml-2"}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>
              <div
                id="three"
                className={modalCarousel.three ? "ml-2 bg-secondary" : "ml-2"}
                style={{
                  cursor: "pointer",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D2D2D2",
                }}
                onClick={setModalCarousel}
              ></div>

              <div
                style={{ position: "absolute", right: "22px", bottom: "5px" }}
              >
                <NavigateNextIcon
                  style={
                    modalCarousel.one
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="twob"
                  onClick={setModalCarouselb}
                />
              </div>
              <div
                style={{ position: "absolute", right: "22px", bottom: "5px" }}
              >
                <NavigateNextIcon
                  style={
                    modalCarousel.two
                      ? { fontSize: "30px" }
                      : { display: "none" }
                  }
                  id="threeb"
                  onClick={setModalCarouselb}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5" style={{ width: "100%", background: "#003459" }}>
        <Grid style={{ paddingTop: "50px", paddingBottom: "30px" }}>
          <Grid.Row columns="4" className="ml-4">
            <Grid.Column className="ml-5">
              <ul>
                <h3 className="footerhead">Products</h3>
                <Link to="/posters" className="footertxt">
                  Posters
                </Link>
                <Link to="/signages" className="footertxt">
                  Signages
                </Link>
                <Link to="/campaigns" className="footertxt">
                  Campaigns
                </Link>
                <Link to="/floor-graphics" className="footertxt">
                  Floor Graphics
                </Link>
                <Link to="/asset-marking" className="footertxt">
                  Asset Marking
                </Link>
                <Link to="/posters" className="footertxt">
                  Do It Yourself(DIY)
                </Link>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">My Account</h3>
                {authUser ? (
                  <>
                    <Link to="/dashboard" className="footertxt">
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <li className="footertxt">Profile</li>
                  </>
                )}

                {authUser ? (
                  <>
                    <Link to="/dashboard" className="footertxt">
                      Order History
                    </Link>
                  </>
                ) : (
                  <>
                    <li className="footertxt">Order History</li>
                  </>
                )}

                <Link to="/track" className="footertxt">
                  Order Tracking
                </Link>
                <Link to="/signup" className="footertxt">
                  Create An Account
                </Link>
                <li className="footertxt">New User Guide</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5 pl-5">
              <ul>
                <h3 className="footerhead">Contact Us</h3>
                <li className="footertxt">Timings (Mon - Sat: 7:00 - 21:00)</li>
                <li className="footertxt">
                  45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
                </li>
                <li className="footertxt">Mobile No : +91 9632418602</li>
                <li className="footertxt">Email ID : hello@ehsposters.com</li>
              </ul>
            </Grid.Column>
            <Grid.Column className="ml-5">
              <ul>
                <h3 className="footerhead">About</h3>
                <Link to="/privacy-policy" className="footertxt">
                  Privacy Policies
                </Link>
                <Link to="/faq" className="footertxt">
                  FAQ
                </Link>
                <Link to="/support" className="footertxt">
                  Support
                </Link>
                <Link to="/affiliate" className="footertxt">
                  Join Us (Affiliate)
                </Link>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    
      */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
export default connect(mapStateToProps)(CategoryPage);
