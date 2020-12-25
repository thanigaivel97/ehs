/*jshint esversion: 6 */
import React from "react";
import Rectangle from "../../images/Rectangle.svg";
import { Grid } from "semantic-ui-react";
import BreadVector from "../../images/BreadVector.svg";
import { Link } from "react-router-dom";
import Profile from "../../images/Profile.svg";
import Other from "../../images/otherwork.svg";
import Rating from "@material-ui/lab/Rating";
import { ModalCard } from "../category_page/Card2";
import Hand from "../../images/Hand.svg";
import Fold from "../../images/Fold.svg";
import Card2 from "../category_page/Card2";
import Dimension from "../../images/Dimension1.svg";
import Also from "../../images/alsoavai.svg";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Heart from "../../images/heart.svg";
import Shareit from "../../images/shareit.svg";
import Dhl from "../../images/dhl.svg";
import Pay from "../../images/payment.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DisInfect from "../../images/DisInfectant.svg";
import $ from "jquery";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import SummaSvg from "../../images/summabet.svg";
import { BottomAddedCart } from "../product_list2/right/Right";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Axios from "axios";
import { getPoster, config } from "../../helper/apiPath";
import { CircularProgress } from "@material-ui/core";


function ProductDescription(props) {
  const [posterData, setPosterData] = React.useState({});

  React.useEffect(() => {
    Axios.get(
      getPoster,
      config(
        props.loginResponse.token || localStorage.getItem("ehstoken12345678910")
      )
    )
      .then((res) => {
        const posterItem = res.data.posterData.filter(
          (v) => v._id === props.match.params.id
        )[0];

        setPosterData(posterItem);
        console.log(posterItem);
      })
      .catch((err) => console.log(err));
  }, [props.loginResponse.token]);

  const [reviewPer, setReviewPer] = React.useState(0);
  var [count, setCount] = React.useState(1);

  function onAdd() {
    return setCount(count + 1);
  }
  function onSub() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const cardDet = {
    src: DisInfect,
    title: "Floor Graphics | Printable Catalog | PRD-FG009",
    by: "By Pankaj Jadhav",
    isInStock: true,
    rate: 4.6,
    bought: "473",
  };

  const card1Det = [
    {
      src: Hand,
      title: "125 Micron (non-tearable)",
      name: "one",
      select: "Material",
    },
    {
      src: Fold,
      title: "Self-adhesive (premium)",
      name: "two",
      select: "Material",
    },
    {
      src: Fold,
      title: "Self-adhesive 3mm sunboard (premium)",
      name: "three",
      select: "Material",
    },
  ];

  const card2Det = [
    {
      src: Dimension,
      title: "16in by 24in",
      cus: false,
      cusWidth: "80",
      name: "one",
      select: "Dimension",
    },
    {
      src: Dimension,
      title: "19in by 27in",
      cus: true,
      cusWidth: "100",
      name: "two",
      select: "Dimension",
    },
    {
      src: Dimension,
      title: "24in by 36in",
      cus: true,
      cusWidth: "120",
      name: "three",
      select: "Dimension",
    },
  ];

  const [bottomDet, setBottomDet] = React.useState({});

  const addToCart = (det) => {
    setBottomDet(det);
    $("#bottomCart").css("display", "block");
    props.setCartCountFun(det);
    console.log("hello", bottomDet);
  };

  const [selectMatDim, setMatDim] = React.useState({
    Material: { one: false, two: false, three: false },
    Dimension: { one: false, two: false, three: false },
  });

  return (
    <div>
      <Grid>
        <Grid.Row className="justify-content-center mt-2 mb-3">
          <Grid.Column>
            <img src={Rectangle} alt="" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="pl-5 pr-5">
          <Grid.Column className="mt-1 ">
            <Link className="breadLink" to="/">
              Home
            </Link>{" "}
            <img
              src={BreadVector}
              className="mr-1"
              width="10"
              height="10"
              alt=""
            />
            <Link className="breadLink" to="/posters">
              Posters
            </Link>{" "}
            <img
              src={BreadVector}
              className="mr-1"
              width="10"
              height="10"
              alt=""
            />
            <Link className="breadLink" to="/posters/covid-19">
              COVID-19
            </Link>
            <img
              src={BreadVector}
              className="mr-1"
              width="10"
              height="10"
              alt=""
            />
            <Link className="breadLink">{posterData.name}</Link>
            <div className="mt-2">
              <img
                src={`data:${posterData.imgUrl?.contentType};base64,${posterData.imgUrl?.data}`}
                alt={posterData.name}
                height="400px"
                width="400px"
              />
            </div>
            <Grid.Row columns="2" className="pl-3 mt-4 ">
              <Grid.Column>
                <img
                  src={Profile}
                  alt=""
                  height="40px"
                  width="85%"
                  style={{ display: "inline" }}
                />
              </Grid.Column>
              <Grid.Column>
                <p className="bydes ml-3 mt-2">{posterData.creator}</p>
              </Grid.Column>
            </Grid.Row>
            <p className="bybelow mt-4">Other Designs by the Designer</p>
            <Grid.Row columns="4" className="ml-1">
              {[...Array(4)].map((v, i) => (
                <Grid.Column key={i} className={i !== 0 ? "ml-3 mt-3" : "mt-3"}>
                  <img src={Other} alt="" width="86px" />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <p className="destitle pt-2 mt-4">{posterData.name}</p>
            <p
              className={
                posterData.stocks > 0 ? "instock" : "text-danger instock"
              }
              style={{ marginTop: "-17px" }}
            >
              {posterData.stocks > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div style={{ float: "left" }} className="m-0 p-0">
              <p
                style={{
                  float: "left",
                  marginRight: "10px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  marginTop: "-11px",
                  fontFamily: " Source Sans Pro",
                }}
              >
                {0}
              </p>
              <div style={{ float: "right", marginTop: "-10px" }}>
                <Rating
                  style={{ float: "left" }}
                  name="size-small"
                  size="small"
                  defaultValue={0}
                  precision={0.5}
                  className="m-0 p-0"
                  disabled
                />
                <p
                  style={{
                    marginLeft: "5px",
                    float: "right",
                    marginTop: "-2px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: " Source Sans Pro",
                  }}
                >
                  {posterData.bought}
                </p>
              </div>
            </div>
            <br />
            <br />
            <p
              style={{ marginTop: "-30px", position: "absolute" }}
              className="boughtthis"
            >
              {posterData.bought} bought this
            </p>
            <Grid className="container mt-2">
              <Grid.Row columns="2" style={{}}>
                <Grid.Column>
                  <p className="select ">Select Material</p>
                  <Grid.Row style={{ marginLeft: "-1px" }}>
                    {card1Det.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-2" : "none"}
                      >
                        <ModalCard
                          boxDet={v}
                          setMatDim={setMatDim}
                          selected={selectMatDim.Material}
                          addToCart={addToCart}
                          oriDet={cardDet}
                          name="material"
                        />{" "}
                      </Grid.Column>
                    ))}
                  </Grid.Row>

                  <p className="select mt-3">Select Dimension</p>
                  <Grid.Row style={{ marginLeft: "-1px" }}>
                    {card2Det.map((v, i) => (
                      <Grid.Column
                        key={i}
                        className={i !== 0 ? "ml-2" : "none"}
                      >
                        <ModalCard
                          setMatDim={setMatDim}
                          selected={selectMatDim.Dimension}
                          addToCart={addToCart}
                          boxDet={v}
                          oriDet={cardDet}
                          name="dimension"
                        />{" "}
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column className="ml-5">
                  <pre className="blabla">
                    Both Interior and Exterior warranty is of three years.
                    <br />
                    Prices are inclusive of G.S.T
                    <br />
                    Performa Invoice can be generated at checkout. <br />
                    For Queries, contact Sales Team at +91 9632418602
                    <br />
                    <br />
                    Shipping free for orders above two thousand
                    <br />
                    (2,000/-) Indian rupees.
                    <br />
                    <br />
                    Shipping Cost <br />
                    <br />
                    Return Policy
                  </pre>
                  <p className="blablabla">
                    Category:
                    <span>
                      {posterData.name},{posterData.name}
                    </span>
                  </p>
                  <p className="blablabla">
                    Tags:
                    <span> Using Safety Gloves .. is all in Your Hands.</span>
                  </p>
                  <p className="blablabla">
                    SKU:
                    <span>
                      posters-chemical-hazard-sku-1114021234-prd-ch001g
                    </span>
                  </p>

                  <img src={Also} alt="" style={{ width: "100%" }} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Row className="container mt-4 ">
              <p className="matdim">
                Select Material and Dimensions to check Price
              </p>
            </Grid.Row>
            <p className="quantdes">Quantity</p>

            <Grid.Row className="container">
              <Grid.Column>
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                  style={{ height: "38px" }}
                >
                  <Button onClick={onSub} className="shadow-none">
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
                    {count}
                  </Button>
                  <Button onClick={onAdd}>
                    <AddIcon style={{ color: "grey" }} />
                  </Button>
                </ButtonGroup>
              </Grid.Column>
              <Grid.Column className="ml-5" style={{ width: "500px" }}>
                <Button
                  className="text-white ml-5"
                  style={{
                    background: "#003459",
                    borderRadius: "6px",
                    width: "500px",
                  }}
                  onClick={(e) => {
                    addToCart({ ...selectMatDim, ...cardDet, quantity: count });
                    e.target.innerText = "Added!!!";
                  }}
                >
                  Add to Cart
                </Button>
                <p className="ml-5 " style={{ float: "left" }}>
                  Add to Wishlist{" "}
                  <img src={Heart} width="15px" height="15px" alt="" />
                </p>
                <p style={{ float: "right", marginRight: "-50px" }}>
                  Share <img src={Shareit} width="15px" height="15px" alt="" />
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <hr className="m-4" style={{ border: "1px solid #D2D2D2" }} />
        <Grid.Row columns="3 " className="ml-4">
          <Grid.Column className="mr-5 blablabla">
            <p style={{ fontSize: "18px", lineHeight: "22px" }}>
              Product Details
            </p>
            <p>
              Material:<span>Self-Adhesive</span>
            </p>
            <p>
              Dimensions:<span>24inches by 36inches</span>
            </p>
            <p>
              Weight:<span>{posterData.weight}</span>
            </p>
            <ul className="ulListStyle">
              <li className="listStyle">
                Both Interior and Exterior warranty is of three years.
              </li>
              <li className="listStyle">Prices are inclusive of G.S.T</li>
              <li className="listStyle">
                Performa Invoice can be generated at checkout.
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column
            className="justify-content-end ml-5"
            style={{ float: "right" }}
          >
            <Grid.Row columns="2" className="ml-5">
              <Grid.Column className="ml-5 pl-5 mr-4">
                <p className="shipping">Shipping Services</p>
                <img src={Dhl} alt="" />
              </Grid.Column>
              <Grid.Column className="ml-5">
                <p className="shipping">Payment Methods</p>
                <img src={Pay} alt="" />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="2" className="ml-4 mt-5">
          <Grid.Column className="mt-3">
            <p
              style={{
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: "600",
                fontFamily: "Lato",
              }}
            >
              Reviews
            </p>
            <Box className="mt-4" position="relative" display="inline-flex">
              <CircularProgress
                style={{ width: "70px", height: "70px" }}
                variant="determinate"
                value={reviewPer}
              />
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
                <Typography
                  className="ratingin"
                  variant="caption"
                  component="div"
                  color="textSecondary"
                >
                  {0}
                </Typography>
              </Box>
            </Box>
            <p>{0} ratings</p>
          </Grid.Column>
          <Grid.Column className="mt-5 pt-4">
            {[...Array(5)].map((v, i) => (
              <Grid.Row
                key={v}
                columns="2"
                className="pl-5 ml-2"
                style={{ marginTop: "-8px" }}
              >
                <Grid.Column>
                  <p className="ratinglist">{i + 1} star</p>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row
                    columns="2 "
                    className="linearprog ml-3 mt-2"
                    style={{ width: "200px" }}
                  >
                    <Grid.Column
                      style={{
                        backgroundColor: "#F2994A",
                        width: "150px",
                        borderRadius: "4px",
                      }}
                    ></Grid.Column>
                    <Grid.Column
                      style={{
                        backgroundColor: "#D2D2D2",
                        width: "50px",
                        borderTopRightRadius: "4px",
                        borderBottomRightRadius: "4px",
                      }}
                    ></Grid.Column>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid.Column>
          <Grid.Column className="ml-5 pl-5 mt-3">
            <Grid.Row>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  fontFamily: "Lato",
                }}
              >
                See all Reviews
              </p>
            </Grid.Row>
            <Grid.Row columns="4" className="mt-2">
              {[...Array(4)].map((v, i) => (
                <Grid.Column className={i !== 0 ? "ml-3" : ""}>
                  <Card
                    style={{
                      width: "200px",
                      height: "133px",
                      border: "1px solid #D2D2D2",
                    }}
                  >
                    <CardHeader
                      avatar={<Avatar aria-label="recipe"></Avatar>}
                      title="User name"
                    />
                    <CardContent className="pt-0 mb-2">
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This impressive paella is a perfect party dish
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="ml-4 mt-4">
          <p
            style={{
              fontSize: "18px",
              lineHeight: "22px",
              fontWeight: "600",
              fontFamily: "Lato",
            }}
          >
            Similar items
          </p>
          <Grid.Row
            columns="4"
            className="mt-1 ml-1"
            style={{ marginTop: "-15px" }}
          ></Grid.Row>
          <Grid.Row className="mt-5" style={{ marginLeft: "-50px" }}>
            {[...Array(5)].map((v, i) => (
              <Grid.Column key={i} className={i !== 0 ? "ml-3" : "m-0 p-0"}>
                <Card2
                  data={cardDet}
                  addToCart={addToCart}
                  isCardClickAvail={true}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
          <Grid.Row
            className="justify-content-center mt-5"
            style={{ margin: "0 auto" }}
          >
            <Grid.Row>
              <img
                className="justify-content-center"
                style={{ margin: "0 auto", display: "block" }}
                src={SummaSvg}
                alt=""
              />
            </Grid.Row>
            <Grid.Row className="container mt-5">
              <p
                style={{
                  marginLeft: "-170px",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: "600",
                  fontFamily: "Lato",
                }}
              >
                Also Check Out
              </p>
            </Grid.Row>
          </Grid.Row>
          <Grid.Row className="mt-3" style={{ marginLeft: "35px" }}>
            {[...Array(5)].map((v, i) => (
              <Grid.Column key={i} className={i !== 0 ? "ml-3" : "m-0 p-0"}>
                <Card2
                  data={cardDet}
                  addToCart={addToCart}
                  isCardClickAvail={true}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
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
      <div
        className="mt-5"
        style={{ width: "100%", height: "200px", background: "#003459" }}
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};

export default connect(mapStateToProps)(ProductDescription);
