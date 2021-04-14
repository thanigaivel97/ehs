/*jshint esversion: 6 */
import React, { useRef, useState } from "react";
import Left from "./left/Left";
import { Grid } from "semantic-ui-react";
import { Link ,useParams} from "react-router-dom";
import Right from "./right/Right";
import SafeTwo from "../../images/BeSafe.svg";
import Mind from "../../images/Mind.svg";
import BeforeStart from "../../images/BeforeStart.svg";
import Upto50 from "../../images/Upto50Offer.svg";
import ProductCard from "../signages/ProductCard";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel from "react-elastic-carousel";
import $ from "jquery";
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;

    &:focus, &:hover, &:visited, &:link, &:active {

        border: none;
    }
`;

const ncard = (props) => {
  return (
      <ProductCard src={props.src} name={props.title} startPrice={props.startPrice} rating={props.rating} itemBought={props.itemBought} catName={props.cat} subCatName={props.subCat} />
  );
};

const ProductList2 = (props) => {
  const [path, setPath] = useState();
  const [authUser, setAuthUser] = useState("");
  const  posterIndividualCatCarousel= useRef();
  const {catName,subCatName} = useParams();
  const PPEPosters = [
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE" },
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
    { src: SafeTwo, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "posters" , subCat: "PPE"},
  ];
  const FirePosters = [
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE" },
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
    { src: Mind, title: "Floor Graphics | Printable Catalog | PRD-FG009", startPrice: 219, rating: 3.7, itemBought: 413 ,cat: "signages" , subCat: "PPE"},
  ]
  const [posters,setPosters] = useState(PPEPosters); 

  const [category,setCategory] = useState([]);
  React.useEffect(() => {
    setPath(props.subCat);
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
        /*get poster BY category here and use setPosters onClick event*/
        if(catName==="posters"){
          setCategory(posterCategory);
          setPosters(PPEPosters);
        }else if(catName==="signages"){
          setCategory(signageCategory);
          setPosters(FirePosters);
        }else {
          setCategory(floorgraphicsCategory);
          setPosters(FirePosters);
        }
  }, [props.subCat]);

  const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 780, itemsToShow: 5}
  ]
  
  const posterCatOnClick = (e) => {
    
  }


  

  const posterCategory = [
    "PPE","FIRE","ENVIRONMENT","HOUSE-KEEPING","ELECTRICAL-HAZARD","MATERIAL-HANDLING","CHEMICAL-HAZARDS","QUALITY","COVID-19"
  ];
  const signageCategory = [
    "PRE-PRINTED","PICTOGRAMS","SIGNAL-TEMPLATE-SHEETS"
  ];
  const floorgraphicsCategory = [
    "ROAD-SAFETY","WAREHOUSE","PUBLICPLACE","COVID-19"
  ];

  

  return (
    <div>
      <div className="container-fluid pb-lg-5 padding-10" style={{ background: "#F6F6F6" }}>
          <div className="pt-2 pb-lg-2">
              <Link to="/" className="text-dark">Home </Link>/<Link to={`/cat/${catName}/`} className="text-dark text-capitalize"> {catName} </Link>/<span className="font-weight-bold" > {subCatName}</span>
          </div>
          <div className="d-flex mt-lg-2">
            <h1 className="mt-2 catHead " >
            {subCatName}
            </h1>
            <img src={Upto50} alt="upto50%" className="ml-auto d-none d-sm-block" style={{width: "640px"}} />
          </div>
      </div>

      <div className="padding-10 mb-4 mt-4">
        <div className="d-flex align-items-center " >
              <ArrowBackIosRoundedIcon onClick={() =>  posterIndividualCatCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle" />
              <Carousel className="d-flex justify-content-around" breakPoints={breakPoints}  pagination={false} showArrows={false} ref={ posterIndividualCatCarousel} >
                {category.map((i)=>{
                  return(
                    <Link to={`/${catName}/subcat/${i}`} className="posterCatIndividual" onClick={posterCatOnClick}  >{i}</Link>
                  )
                })}
              </Carousel>  
              <ArrowForwardIosRoundedIcon onClick={() => posterIndividualCatCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle"  />
        </div>
      </div>



      <div className="padding-10">
        <div className="productListing ">
          {posters.map(ncard)}
        </div>
      </div>

      <div className="d-flex mt-4  ">
        <Pagination count={10} color="primary"  className="mx-auto"  />
      </div>
      
      <div className="row padding-10 d-none d-sm-block">
            <div className="didNotFindBottomBanner">
                <p className="text1 d-inline-block ">Did not find what you were looking for?</p>
                <div className="d-inline-block float-none float-sm-right">
                    <p className="text2 ">Contact us and get the perfect print made for you</p>
                    <p className="text3 ">Share your design or slogan with us, and our designers will create one for you!</p>
                </div>
            </div>       
            </div> 

            
      <div className="p-lg-5 mt-4 mb-0 d-block d-sm-none">
            <img src={Upto50} className="ml-auto mr-auto d-block w-75 "  /> 
        </div>





      <div className="row d-none">
        <div className="col-sm-3 mt-3 leftProduct">
          <Left path={path} />
        </div>
        <div className="col pr-5">
          <Right setCartCountFun={props.setCartCountFun} path={path} />
        </div>
      </div>

    </div>
  );
};

export default ProductList2;
