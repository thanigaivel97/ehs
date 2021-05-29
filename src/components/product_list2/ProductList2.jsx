/*jshint esversion: 6 */
import React, {useRef, useState,useEffect } from "react";
import { Link ,useParams} from "react-router-dom";
import Upto50 from "../../images/Upto50Offer.svg";
import ProductCard from "../signages/ProductCard";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Carousel  from "react-elastic-carousel";
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Axios from "axios";
import {API} from "../../backend";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003459',
    }
  }
});

const ProductList2 = (props) => {
  const [posterData, setPosterData] = useState([]);
  const  posterIndividualCatCarousel= useRef();
  const {catSlug,subCatSlug} = useParams();
  const [shopBySubCategoryCards,setShopBySubCategoryCards] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  let subCatName = subCatSlug.replace("-"," ");
  let catName = catSlug.replace("-"," ");

  let language = [
    {title: "hindi",sub_cat_slug: "hindi"},
    {title: "english",sub_cat_slug: "english"},
    {title: "Bilingual",sub_cat_slug: "bilingual"},
  ]

  useEffect(() => { 
    
    if(subCatSlug === "english" || subCatSlug === "hindi" || subCatSlug === "bilingual"){
      setShopBySubCategoryCards(language);
    }else{
      Axios.get(`${API}category/getCategoryById`,{params: {cat_slug: catSlug}}).then((res)=>{
        setShopBySubCategoryCards(res.data.data[0].sub_category);
        //console.log(res.data.data[0].sub_category)
    }).catch((err)=> {
        console.log(err);
    });
    }
    
     
     

      if(subCatSlug === "bestsellers"){
        Axios.get(`${API}posters/getPosterByCatSubCat`, {params: {category_slug: catSlug, bestseller: 1}}).then((res)=>{
          setBestSeller(res.data.data.postersExists);
        }).catch((err)=> {
          console.log(err);
        });
      }else if(subCatSlug === "english" || subCatSlug === "hindi" || subCatSlug === "bilingual"){
          let lang = (subCatSlug === "english") ? 1 : (subCatSlug === "hindi") ? 2 : 3
          Axios.get(`${API}posters/get_poster_by_language`,{
            params: {language: lang}
          }).then((res)=>{
           // console.log(res)
            setPosterData(res.data.data.postersExists);
          }).catch((err)=>{
            console.log(err);
          })
      }else{
        Axios.get(`${API}posters/getPosterByCatSubCat`,{params: {subCategorySlug: subCatSlug}}).then((res) => {
          setPosterData(res.data.data.postersExists);
         // console.log(res);
        }).catch((err) => console.log("ERROR:",err)); 
      }
      

      
    
  }, [catSlug,subCatSlug]);


  const breakPoints = [
    {width: 1, itemsToShow: 2,itemsToScroll: 2},
    {width: 780, itemsToShow: 5,itemsToScroll: 3}
  ]

    

  return (
    <div>
      <div className="container-fluid pb-lg-5 padding-10 " style={{ background: "#F6F6F6" }}>
          <div className="pt-2 pb-lg-2">
              <Link to="/" className="text-dark">Home </Link>/<Link to={`/cat/${catSlug}/`} className="text-dark text-capitalize"> {catName} </Link>/<span className="font-weight-bold text-uppercase" > {subCatName}</span>
          </div>
          <div className="d-flex mt-lg-2">
            <h1 className="mt-2 catHead text-uppercase " >
            {subCatName}
            </h1>
            <img src={Upto50} alt="upto50%" className="ml-auto d-none d-sm-block" style={{width: "640px"}} />
          </div>
      </div>

      <div className="padding-10 subCatHeadCarousel ">
        <div className="d-flex align-items-center   " >
              <ArrowBackIosRoundedIcon id="prevBtn1" onClick={() =>  posterIndividualCatCarousel.current.slidePrev()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle" />               
              <Carousel className="d-flex justify-content-center " initialActiveIndex={0}  breakPoints={breakPoints}  pagination={false} showArrows={false} ref={ posterIndividualCatCarousel} >
                {shopBySubCategoryCards && shopBySubCategoryCards.map((i,index)=>{
                  return(
                   <>
                   {(i.sub_cat_slug === subCatSlug)?
                    (
                      <Link to={`/${catSlug}/subcat/${i.sub_cat_slug}`} className="posterCatIndividual text-capitalize currentCatPoster"  key={index} >{i.title}</Link>
                    ):(
                      <Link to={`/${catSlug}/subcat/${i.sub_cat_slug}`} className="posterCatIndividual text-capitalize"  key={index} >{i.title}</Link>
                    )}
                   </>
                   
                  )
                })}
               
                {(subCatSlug === 'bestsellers')?(
                  <Link to={`/${catSlug}/subcat/bestsellers`} className="posterCatIndividual text-capitalize currentCatPoster"  >Bestsellers</Link>
                ):(
                  <Link to={`/${catSlug}/subcat/bestsellers`} className="posterCatIndividual text-capitalize" >Bestsellers</Link>
                )
                }
                
              </Carousel>  
              <ArrowForwardIosRoundedIcon id="prevBtn1" onClick={() => posterIndividualCatCarousel.current.slideNext()} role="button" className="border mt-auto mb-auto shadow-sm rounded-circle"  />
                
        </div>
      </div>



      <div className="padding-10  ">
        <div className="productListing ">
        
       {(subCatSlug === "bestsellers")? (bestSeller && bestSeller.map((ncard,i) =>{
   
            return(
              <ProductCard 
                product={ncard}
                src={ncard.imgUrl[0]} 
                name={ncard.name} 
                slug={ncard.slug} 
                startPrice={ncard.originalPrice} 
                rating={ncard.average_rating} 
                itemBought={ncard.bought} 
                catName={catName} 
                subCatName={subCatName} 
                catSlug={catSlug} 
                subCatSlug={subCatSlug}
                catId= {ncard.category[0]._id} 
                subCatId={ncard.subCategory[0]._id}
                id={ncard._id} 
                key={i} 
              />
            )
          })
       ):(
        posterData && posterData.map((ncard,i) =>{
          //console.log(ncard,"Posss");
            return(
              <ProductCard 
                product={ncard}
                src={ncard.imgUrl[0]} 
                name={ncard.name} 
                slug={ncard.slug} 
                startPrice={ncard.originalPrice} 
                rating={ncard.average_rating} 
                itemBought={ncard.bought} 
                catName={catName} 
                subCatName={subCatName}
                catSlug={catSlug} 
                subCatSlug={subCatSlug} 
                catId= {ncard.category[0]._id} 
                subCatId={ncard.subCategory[0]._id}
                id={ncard._id} 
                key={i} 
              />
            )
          })
       )}
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <div className="d-flex  paginationMargin ">
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
