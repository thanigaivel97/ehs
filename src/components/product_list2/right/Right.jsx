/* eslint-disable react-hooks/exhaustive-deps */
/*jshint esversion: 6 */
import { useState } from "react";
import React from "react";
import PremiumSelfPoster from "../../../images/PremiumSelf.svg";
import { Grid, Image } from "semantic-ui-react";
import BreadVector from "../../../images/BreadVector.svg";
import Card2 from "../../category_page/Card2";
import $ from "jquery";
import Tick from "../../../images/tick.svg";
import Close from "../../../images/ExitBtn.svg";
import DidYouPoster from "../../../images/DidYouPoster.svg";
import { findMat, findDim } from "../../../helper/apiPath";
import CloseBtn from "../../../images/ExitBtn.svg";
import { ModalCard } from "../../category_page/Card2";
import ModelCard3 from "../../product_list2/right/ModelCard3";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Link } from "react-router-dom";
import Axios from "axios";
import { url } from "../../../helper/apiPath";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const BottomAddedCart = (props) => {
  const { name, quantity } = props.det;
  return (
    <Grid>
      <Grid.Row columns="2">
        <Grid.Column className="ml-2">
          <img src={props.det?.imgUrl} alt={name} width="100" height="120" />
          <img
            style={{ position: "fixed", bottom: "151px", right: "323px" }}
            src={Tick}
            alt=""
          />
        </Grid.Column>
        <Grid.Column className="ml-3 pt-2" style={{ width: "200px" }}>
          <img
            onClick={() => {
              $("#bottomCart").css("display", "none");
            }}
            src={Close}
            alt=""
            style={{
              cursor: "pointer",
              width: "20px",
              height: "20px",
              position: "fixed",
              right: "40px",
              marginTop: "-16px",
            }}
          />
          <p className="addedToCartBot">Added to Cart</p>
          <p className="botTitle">{name && name.slice(0, 20)}...</p>
          <p className="quant">
            {" "}
            Quantity: <span> {quantity} </span>{" "}
          </p>
          <Link to="/cart" className="bottomViewCart">
            View Cart
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const Right = (props) => {
  const [posterData, setPosterData] = React.useState([]);
  const [bread1, setBread1] = React.useState("");
  const [bread2, setBread2] = React.useState("");
  const [skip, setSkip] = React.useState(0);
  const [limit] = React.useState(12);

  function bread() {
    setBread1(window.location.pathname.split("/")[1]);
    setBread2(window.location.pathname.split("/")[2]);
  }

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setSkip(skip - limit);
  };

  
  const fetchPoster = (s,l) => {
    let url1 =
      url +
      "posters/getPosterBySubCategory/" +
      window.location.pathname.split("/")[2];
    Axios.get(url1, {
      params: {
        skip: s,
        limit: l,
      },
    })
      .then((res) => {
        setPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    bread();
    fetchPoster(skip, limit);
  }, [props.path, skip, limit]);

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
    <Grid centered columns={1}>
      <Grid.Column className="justify-content-center mt-3">
        <Image
          style={{ width: "102%" }}
          className="justify-content-center"
          src={PremiumSelfPoster}
        />
      </Grid.Column>

      <Grid.Column className="mt-3">
        <Link className="breadLink" to="/">
          Home
        </Link>{" "}
        <img src={BreadVector} className="mr-1" width="10" height="10" alt="" />
        <Link className="breadLink" to={`/${bread1}`}>
          {bread1}
        </Link>{" "}
        <img src={BreadVector} className="mr-1" width="10" height="10" alt="" />
        <span className="breadLink" to={`/${bread1}/${bread2}`}>
          {bread2}
        </span>
      </Grid.Column>

      <Grid.Column>
        <p
          style={{
            fontFamily: "Source Sans Pro",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "22px",
            color: "#000000",
          }}
        >
          {bread2} {bread1}
        </p>
      </Grid.Column>

      <Grid.Row
        columns="4"
        className="mt-1 ml-1"
        style={{ marginTop: "-15px" }}
      >
        {posterData?.map((v, i) => (
          <Grid.Column key={i} className={i !== 0 && i !== 4 ? "ml-3" : ""}>
            <Card2
              data={v}
              addToCart={addToCart}
              isCardClickAvail={true}
              selectedModalCard={selectedModalCard}
            />
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row className="mt-4" columns="2">
        <Grid.Column style={{ width: "95%" }}>
          {skip > 0 ? (
            <div>
              <button className="btn" onClick={previousPage}>
                <ArrowBackIcon />
              </button>
            </div>
          ) : null}
        </Grid.Column>
        <Grid.Column>
          {(posterData.length > 0 && posterData.length >= limit) ? (
            <div>
              <button className="btn" onClick={nextPage}>
                <ArrowForwardIcon />
              </button>
            </div>
          ) : null}
        </Grid.Column>
      </Grid.Row>
      <Grid.Column className="justify-content-center mt-3">
        <Image
          style={{ width: "102%" }}
          className="justify-content-center"
          src={DidYouPoster}
        />
      </Grid.Column>
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
    </Grid>
  );
};

export default Right;
