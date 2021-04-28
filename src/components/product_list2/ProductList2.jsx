/*jshint esversion: 6 */
import React, {useRef, useState,useEffect, useLayoutEffect } from "react";
import { Link ,useParams} from "react-router-dom";
import SafeTwo from "../../images/BeSafe.png";
import Mind from "../../images/Mind.png";
import Upto50 from "../../images/Upto50Offer.svg";
import ProductCard from "../signages/ProductCard";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel  from "react-elastic-carousel";
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import $ from "jquery";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003459',
    }
  }
});

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
  const [activeIndex, setActiveIndex] = useState(0);
  
  useLayoutEffect(()=>{
  
    setActiveIndex(CurrentActiveCat());
  
  });

  
  useEffect(() => {

    setPath(props.subCat);
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
        /*get poster BY category here and use setPosters onClick event*/
        if(catName==="posters"){
          setCategory([
            "PPE","Fire Safety","Environment","Housekeeping","Electrical Hazard","Material Handling","Chemical Hazards","Quality","Covid-19","Bestsellers"
          ]);
          setPosters(PPEPosters);
        }else if(catName==="signages"){
          setCategory([
            "Pre Printed","Pictograms","Signal Temp Sheet","Bestsellers"
          ]);
          setPosters(FirePosters);
        }else {
          setCategory([
            "Road Safety","Warehouse","Public Places","Covid-19","Bestsellers"
          ]);
          setPosters(FirePosters);
        }
      
  }, [props.subCat]);

 
 

  const breakPoints = [
    {width: 1, itemsToShow: 2,itemsToScroll: 2},
    {width: 780, itemsToShow: 5,itemsToScroll: 3}
  ]
  
  const setActiveCat = (e) => {
    let cat = document.getElementsByClassName("posterCatIndividual");
    for(let i=0; i< cat.length; i++ ){
      cat[i].classList.remove("currentCatPoster");
    }
    e.target.classList.add("currentCatPoster");  
  }
  const CurrentActiveCat = () =>{
    let cat = document.getElementsByClassName("posterCatIndividual");
    for(let i=0; i< cat.length; i++ ){
      if(subCatName.toLowerCase() === cat[i].innerText.toLowerCase()){
        cat[i].classList.add("currentCatPoster");
        return i;
      }
    }
  }
 


  
    

  return (
    <div>
      <div className="container-fluid pb-lg-5 padding-10 " style={{ background: "#F6F6F6" }}>
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

      <div className="padding-10 subCatHeadCarousel ">
        <div className="d-flex align-items-center   " >
              <ArrowBackIosRoundedIcon id="prevBtn1" onClick={() =>  posterIndividualCatCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle" />               
              <Carousel className="d-flex justify-content-center " initialActiveIndex={activeIndex}  breakPoints={breakPoints}  pagination={false} showArrows={false} ref={ posterIndividualCatCarousel} >
                {category.map((i)=>{
                  return(
                    <Link to={`/${catName}/subcat/${i}`} className="posterCatIndividual " onClick={setActiveCat}  >{i}</Link>
                  )
                })}
              </Carousel>  
              <ArrowForwardIosRoundedIcon id="prevBtn1" onClick={() => posterIndividualCatCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle"  />
                
        </div>
      </div>



      <div className="padding-10  ">
        <div className="productListing ">
          {posters.map(ncard)}
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <div className="d-flex   " style={{ marginTop: "60px"}}>
          <Pagination count={10} color="primary"  className="mx-auto"  />
        </div>
      </ThemeProvider>
      
     
            <div className="didNotFindBottomBanner mx-auto mb-5 d-none d-sm-block">
                <p className="text1 d-inline-block ">Did not find what you were looking for?</p>
                <div className="d-inline-block float-none float-sm-right">
                    <p className="text2 ">Contact us and get the perfect print made for you</p>
                    <p className="text3 ">Share your design or slogan with us, and our designers will create one for you!</p>
                </div>
            </div>       
            

            
      
            <img src={Upto50} className="mx-auto d-block d-sm-none bottomBanner50 " alt="footerBanner" /> 
        





     

    </div>
  );
};

export default ProductList2;
