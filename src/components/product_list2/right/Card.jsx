// import { Image, Grid } from "semantic-ui-react";
// import Star from "../../../images/Start.svg";

// import {useState} from "react";

// import DisInfect from "../../../images/DisInfectant.svg";

// import Hand from "../../../images/Hand.svg";
// import Fold from "../../../images/Fold.svg";
// import $ from "jquery";
// import CloseBtn from "../../../images/ExitBtn.svg";
// import RemoveIcon from "@material-ui/icons/Remove";
// import Dimension from "../../../images/Dimension1.svg";


// const ModalCard = (props) => {
//   console.log(props);
//   return (
//     <div
//       className="pt-2"
//       style={{
//         border: "1px solid #D2D2D2",
//         borderRadius: "6px",
//         width: "150px",
//         height: "200px",
//       }}
//     >
//       <img
//         className="mt-4 mb-2"
//         src={props.boxDet.src}
//         width={"150"}
//         height={props.boxDet.cus ? props.boxDet.cusWidth : "80"}
//         alt=""
//       />
//       <p
//         style={{
//           fontFamily: "Lato",
//           width: "100px",
//           margin: "0 auto",
//           fontStyle: "normal",
//           fontWeight: "normal",
//           fontSize: "14px",
//           lineHeight: "17px",
//           textAlign: "center",
//           color: "#000000",
//         }}
//         className="text-center"
//       >
//         {props.boxDet.title}
//       </p>
//     </div>
//   );
// };


// const Card = (props) => {
//   const { src, title, by, isInStock, rate, bought } = props.data;


//   const card1Det = {
//     select: "Select Material",
//     box: [
//       { src: Hand, title: "125 Micron (non-tearable)" },
//       { src: Fold, title: "Self-adhesive (premium)" },
//       { src: Fold, title: "Self-adhesive 3mm sunboard (premium)" },
//     ],
//   };
//   const card2Det = {
//     select: "Select Dimensions",
//     box: [
//       { src: Dimension, title: "16in by 24in", cus: false, cusWidth: "80" },
//       { src: Dimension, title: "19in by 27in", cus: true, cusWidth: "100" },
//       { src: Dimension, title: "24in by 36in", cus: true, cusWidth: "120" },
//     ],
//   };
//   const card3Det = {
//     select: "Select Quantity",
//     quantity: 1,
//     material: "",
//     dimension: "",
//     price: "1",
//   };
//   const [ModalDet, setModalDet] = useState({
//     src: "",
//     title: "Covid Posters | Covid-P010",
//     select: "Select Material",
//     card1: card1Det,
//     card2: card2Det,
//     card3: card3Det,
//   });

//   const cardDet = {
//     src: DisInfect,
//     title: "Floor Graphics | Printable Catalog | PRD-FG009",
//     by: "By Pankaj Jadhav",
//     isInStock: true,
//     rate: 4.6,
//     bought: "473",
//   };



//   return (
//     <div className="cardInProduct1">
//       <Image style={{ width: "230px", height: "240px", cursor: "pointer" }}
//         className="mx-auto d-block"
//         src={src}
//         alt=""
//         onClick={cardClick}
//       />

//       <p
//         className="card2Title"
//         style={{ cursor: "pointer" }}
//         onClick={cardClick}
//       >
//         {title}
//       </p>

//       <div style={{ marginTop: "-10px" }}>
//         <div>
//           <p className="card2By">{by}</p>
//         </div>
//         <div className="ml-5" style={{ marginTop: "-40px" }}>
//           <Grid className="ml-5">
//             <Grid.Row className="ml-5">
//               <Grid.Column className="ml-5" floated="right">
//                 <img
//                   style={{ marginTop: "-10px" }}
//                   className="mr-1"
//                   src={Star}
//                   alt=""
//                 />
//                 <p className="card2Rating">{rate}</p>
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>
//         </div>
//         <br />
//         <div style={{ float: "left", marginTop: "-25px" }}>
//           <p className="card2Bought" style={{ float: "left" }}>
//             {bought} bought this
//           </p>

//           <button
//             href="/#"
//             style={{
//               float: "right",
//               marginLeft: "40px",
//               background: "#F2994A",
//               borderRadius: "5px",
//               marginTop: "-10px",
//             }}
//             className="btn btn-sm ml-5 productCardBtn text-white"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
    
   
    
//     </div>
//   );
// };

// export default Card;
