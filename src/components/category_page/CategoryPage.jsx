/*jshint esversion: 6 */
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ppe from "../../images/posterCategory/PPE.png";
import Electrical from "../../images/posterCategory/ELECTRICAL.png";
import Material from "../../images/posterCategory/MATERIAL.png";
import Chemical from "../../images/posterCategory/CHEMICAL.png";
import Fire from "../../images/posterCategory/FIRE.png";
import Housekeeping from "../../images/posterCategory/HOUSEKEEPING.png";
import Quality from "../../images/posterCategory/QUALITY.png";
import Environment from "../../images/posterCategory/ENVIRONMENT.png";
import Covid from "../../images/posterCategory/COVID.png";
import PPE from "../../images/Pre-printed_Signages.svg";
import SignalTemplate from "../../images/Signal-Template_Signages.svg";
import DIY from "../../images/DIY_Signages.svg";
import Pictograms from "../../images/Pictogram_Signages.svg";
import Public from "../../images/Public Places_FloorGraphics.svg";
import CovidFloor from "../../images/Covid_FloorGraphics.svg";
import Warehouse from "../../images/Warehouse_FloorGraphics.svg";
import Hindi from "../../images/posterCategory/HINDI.png";
import English from "../../images/posterCategory/ENGLISH.png";
import Bilingual from "../../images/posterCategory/BILINGUAL.png";
import Upto50 from "../../images/Upto50Offer.svg";
import Card2 from "./Card2";
import { connect } from "react-redux";
import { getBestSeller,config} from "../../helper/apiPath";
import Axios from "axios";
import $ from "jquery";
import Card from "./Card";
import "./category.css"
import SafeTwo from "../../images/BeSafe.svg";
import Mind from "../../images/Mind.svg";
import BeforeStart from "../../images/BeforeStart.svg";
import FloorImg from "../../images/floor1.svg";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel,  { consts } from "react-elastic-carousel";


const ncard = (val) => {
  return (
      <Card src={val.src} title={val.title} cat={val.cat} />
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

const CategoryPage = (props) => {

  const shopByCategoryPosters = [
    {cat: "posters", src: Ppe, title: "PPE" },
    {cat: "posters", src: Electrical, title: "Electrical-Hazard" },
    {cat: "posters", src: Material, title: "Material-Handling" },
    {cat: "posters", src: Chemical, title: "Chemical-Hazards" },
    {cat: "posters", src: Fire, title: "Fire" },
    {cat: "posters", src: Housekeeping, title: "House-Keeping" },
    {cat: "posters", src: Quality, title: "Quality" },
    {cat: "posters", src: Environment, title: "Environment" },
    {cat: "posters", src: Covid, title: "Covid-19" },
  ];

  const shopByCategorySignages = [
    {cat: "signages", src: PPE, title: "Pre-Printed" },
    {cat: "signages",  src: SignalTemplate, title: "Signal Template Sheets" },
    {cat: "signages",  src: Pictograms, title: "Pictograms" },
    {cat: "signages",  src: DIY, title: "Do-It-Yourself" },
  ];
  const shopByCategoryFloor = [
    {cat: "floor-graphics", src: Public, title: "Public Places" },
    {cat: "floor-graphics", src: CovidFloor, title: "Covid-19" },
    {cat: "floor-graphics", src: Warehouse, title: "Warehouse" },
    {cat: "floor-graphics", src: Warehouse, title: "Road Safety" },
  ];
  
  
  const [posterData, setPosterData] = React.useState([]);
  const [authUser, setAuthUser] = React.useState("");
  const [shopByCategoryCards,SetShopByCategoryCards] = useState(shopByCategorySignages);
  const {catName} = useParams();

  

  useEffect(() => {
    if(catName === "posters"){
      SetShopByCategoryCards(shopByCategoryPosters);
    }else if(catName === "signages"){
      SetShopByCategoryCards(shopByCategorySignages);
    }else {
      SetShopByCategoryCards(shopByCategoryFloor);
    }
    Axios.get(
      getBestSeller + "/poster",
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

  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 5 }
  ];
    const posterCatCarousel = useRef();
    const posterCat2Carousel = useRef();
  return (
    <>
        <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
          <div className="pt-2 pb-lg-2">
              <Link to="/" className="text-dark">Home </Link>/<span className="font-weight-bold text-capitalize" >{catName}</span>
          </div>
          <div className="d-flex mt-lg-2">
            <h1 className="mt-2 catHead text-capitalize" >
            {catName}
            </h1>
            <img src={Upto50} className="ml-auto d-none d-sm-block" style={{width: "640px"}} />
          </div>
        </div>
        <div  className="padding-10  ">
          <h2 className="shopByHead d-inline-block" >Shop by Category</h2>
          <div className="d-flex float-right mt-4 align-items-center ">
          <ArrowBackIosRoundedIcon onClick={() => posterCatCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto mr-4 shadow-sm rounded-circle " />
          <ArrowForwardIosRoundedIcon onClick={() => posterCatCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle "  />
         
          </div>
           <div className="" style={{opacity: "1"}}>       
            <Carousel className="d-flex justify-content-start" itemPosition={consts.START} breakPoints={breakPoints}  pagination={false} showArrows={false} ref={posterCatCarousel} style={{opacity: "1!important"}} showEmptySlots>
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
          <ArrowBackIosRoundedIcon onClick={() => posterCat2Carousel.current.slidePrev()} role="button" className="border mt-auto mb-auto mr-4 shadow-sm rounded-circle " />
          <ArrowForwardIosRoundedIcon onClick={() => posterCat2Carousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle "  />
         
          </div>
           <div className="" style={{opacity: "1"}}>       
            <Carousel className="d-flex " itemPosition={consts.START} breakPoints={breakPoints}  pagination={false} showArrows={false} ref={posterCat2Carousel} style={{opacity: "1!important"}} showEmptySlots>
                {shopByLanguageCards.map(ncard)}
            </Carousel>                
          </div>
        </div>


        <div>
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
        </div>
        

        <div className="p-lg-5 mt-4 mb-0">
            <img src={Upto50} className="ml-auto mr-auto d-block w-75 "  /> 
        </div>
        



      {/* <div className="posters mt-3 mb-3 d-none">
          <Grid>    
             <p
              className="ml-5 mt-4"
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
      </div>*/}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
export default connect(mapStateToProps)(CategoryPage);
