/*jshint esversion: 6 */
import React, { useEffect, useState } from "react";
import Design from "../homepage/design/Design";
import Cols from "./Cols";
import { Grid, Image, Segment } from "semantic-ui-react";
import Plumber from "../../images/Plumber.svg";
import GetBPoster from "../../images/GetBiPoster.svg";
import PosterNow from "../../images/PosterNow.svg";
import Upto50 from "../../images/Upto50Offer.svg";
import Card2 from "./Card2";
// import BestSeller from "../../images/BestSeller.svg";
import { connect } from "react-redux";
import { getPoster, config } from "../../helper/apiPath";
import Axios from "axios";
import $ from "jquery";
import { BottomAddedCart } from "../product_list2/right/Right";
import { findMat, findDim } from "../../helper/apiPath";
import CloseBtn from "../../images/ExitBtn.svg";
import { ModalCard } from "./Card2";
import ModelCard3 from "../product_list2/right/ModelCard3";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const CategoryPage = (props) => {
  const [posterData, setPosterData] = React.useState([]);

  useEffect(() => {
    Axios.get(
      getPoster,
      config(
        props.loginResponse.token || localStorage.getItem("ehstoken12345678910")
      )
    )
      .then((res) => {
        setPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
  }, [props.loginResponse.token]);

  const cardDet = [
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
    { src: Plumber, title: "Safety" },
  ];

  const twoPosters = [GetBPoster, PosterNow];

  // const bestSellers = [
  //   {
  //     src: BestSeller,
  //     title: "Floor Graphics | Printable Catalog | PRD-FG009",
  //     by: "By Pankaj Jadhav",
  //     isInStock: true,
  //     rate: 4.6,
  //     bought: "473",
  //   },
  //   {
  //     src: BestSeller,
  //     title: "Floor Graphics | Printable Catalog | PRD-FG009",
  //     by: "By Pankaj Jadhav",
  //     isInStock: true,
  //     rate: 4.6,
  //     bought: "473",
  //   },
  //   {
  //     src: BestSeller,
  //     title: "Floor Graphics | Printable Catalog | PRD-FG009",
  //     by: "By Pankaj Jadhav",
  //     isInStock: true,
  //     rate: 4.6,
  //     bought: "473",
  //   },
  //   {
  //     src: BestSeller,
  //     title: "Floor Graphics | Printable Catalog | PRD-FG009",
  //     by: "By Pankaj Jadhav",
  //     isInStock: true,
  //     rate: 4.6,
  //     bought: "473",
  //   },
  //   {
  //     src: BestSeller,
  //     title: "Floor Graphics | Printable Catalog | PRD-FG009",
  //     by: "By Pankaj Jadhav",
  //     isInStock: true,
  //     rate: 4.6,
  //     bought: "473",
  //   },
  // ];

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
          cus: false,
          cusWidth: "80",
          name: "one",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[1].imgUrl,
          title: selectedModal.dimension[1].title,
          cus: true,
          cusWidth: "100",
          name: "two",
          select: "Dimension",
        },
        {
          src: selectedModal.dimension[2].imgUrl,
          title: selectedModal.dimension[2].title,
          cus: true,
          cusWidth: "120",
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

  return (
    <>
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
              Posters
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

            <Cols data={cardDet} cols="7" />

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

            <Cols data={cardDet} cols="7" />

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

            <Grid.Row columns={5} className="mt-4 justify-content-center">
              {posterData.map((v, i) => (
                <Grid.Column key={i} className={i !== 0 ? "ml-4" : null}>
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
                src={`data:${ModalDet.src?.contentType};base64,${ModalDet.src?.data}`}
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
// const mapDispatchToProps = (dispatch) => {
//    return {

//    };
// };
export default connect(mapStateToProps)(CategoryPage);
