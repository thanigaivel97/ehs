/*jshint esversion: 6 */
import React, { useState } from "react";
import "./NavBar.css";
import EhsLogo from "../../../images/EhsLogo.svg";
import Vector from "../../../images/Vector.svg";
import ShopCart from "../../../images/Shop.svg";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getArtWorks} from "../../../helper/apiPath";
import swal from "sweetalert";
import {FaBars} from "react-icons/fa";
import $ from "jquery";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = (props) => {
  const [authUser, setAuthUser] = React.useState("");
  const [find, setFind] = React.useState("");

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, [props.loginResponse]);

  const [searchCat, setCat] = useState("All Categories");

  const searchCatogoriesOnClick = (event) => {
    setCat(event.target.text);
    // window.location.replace(
    //   "http://" + window.location.host + "/" + event.target.text.toLowerCase()
    // );
  };

  const search_catogories = [
    "All Categories",
    "Posters",
    "Signages",
    "Floor-Graphics",
    "Asset-Marking",
  ];

  function findArt() {
    Axios.get(getArtWorks, {
      params: {
        find: find,
      },
    })
      .then((res) => {
        if (res.data.posterData.length > 0) {
          props.setSearchData(res.data.posterData);
          localStorage.setItem("searchData123",JSON.stringify(res.data.posterData));
          window.location.replace(
            window.location.protocol +
              "//" +
              window.location.hostname +
              ":3000/" +
              "search"
          );
        } else {
          swal("No ArtWork Found", "", "error");
        }
      })
      .catch((err) => console.log(err));
  }

  $(window).on("load", function(){
    $(".hamburger, .menuRemove").click(()=>{
      $("#navbarNav").toggleClass('slideSubMenu');
      $('.overlay').toggleClass('menuBackBlur');
      $(".posterDropdown").removeClass('slideSubMenu');
      $(".signageDropdown").removeClass('slideSubMenu');
      $(".floorDropdown").removeClass('slideSubMenu');
      $(".campaignDropdown").removeClass('slideSubMenu');
      /*if( ($('.overlay').hasClass('menuBlackBlur')) && ($('#searchBoxMobile').hasClass('slideSearchBox'))  )*/
  });

  $(".searchIcon").click(()=>{
    $("#searchBoxMobile").toggleClass('slideSearchBox');
    $('.overlay').toggleClass('menuBackBlur');
  })
  $(".posterDropdownArrow").click(()=>{
    $(".posterDropdown").toggleClass('slideSubMenu');
  });
  $(".signageDropdownArrow").click(()=>{
    $(".signageDropdown").toggleClass('slideSubMenu');
  });
  $(".floorDropdownArrow").click(()=>{
    $(".floorDropdown").toggleClass('slideSubMenu');
  });
  $(".campaignDropdownArrow").click(()=>{
    $(".campaignDropdown").toggleClass('slideSubMenu');
  });
  $(".overlay").click(()=>{
    $("#navbarNav").toggleClass('slideSubMenu');
    $(".posterDropdown").removeClass('slideSubMenu');
    $(".signageDropdown").removeClass('slideSubMenu');
    $(".floorDropdown").removeClass('slideSubMenu');
    $(".campaignDropdown").removeClass('slideSubMenu');
    $('.overlay').toggleClass('menuBackBlur');
  });
  });

  const searchCatDropdown = () => {
      let a = document.getElementById("searchDropCatId");
      a.classList.add("dropCatShow");
  }
  

  return (
    <div >
        <div className="d-sm-none d-block" style={{width: "100%", height: "58px"}}></div>
        <nav className="container-fluid  navbar navbar-expand-sm navbar-dark d-flex "  id="navBarTop"> 
        <div className="d-block d-sm-none p-0 border-none hamburger" >
        <MenuIcon className=" ml-1 mr-1" style={{color: "white",transform: "scale(1.5,1.9)"}} />
      </div>
        <Link className="navbar-brand ehsLogoImg" to="/">
          <img src={EhsLogo} alt="Ehs Logo" />
        </Link>
        <SearchIcon
                className="d-block d-sm-none ml-auto searchIcon"
                aria-hidden="true"
                style={{ color: "white", border: "0px", width: "10%",height: "8%" }}
                onClick={() => (find ? findArt() : null)}
              />
           
        <li className="nav-item mb-0 mr-0 mt-1 d-block  d-sm-none" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="ml-1" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                  
                  }}
                >
                  {props.num}
                </span>
              </Link>
            </li>
        <div className="d-flex flex-column  flex-sm-row  mt-1 mt-sm-0  align-items-center" id="searchBoxMobile" style={{width: "100%"}}>
          <div className="form-inline input-group  mx-auto  p-0 searchBar" >
            <div  className="input-group-prepend   dropdown ">
              <button className="btn btn-secondary bg-white textColorAndWeight shadow-none searchDropBtn"
                type="button"
                id="dropdownMenuButton"
              >
                <img src={Vector} className="mr-sm-2 mr-1 " onClick={searchCatDropdown} alt="" />
                {searchCat}
              </button>
              <div
                className="dropdown-menu dropdown-content px-2 pb-2 pt-0 searchDropCat "
                id="searchDropCatId"
                >
                {search_catogories.map((v, i) =>
                  v === "All Categories" ? (
                    <>
                      <Link
                        key={v}
                        to="/"
                        onClick={searchCatogoriesOnClick}
                        className="searchCategory dropdown-item"
                        style={{color: "#757575"}}
                        
                      >
                        {v}
                      </Link>
                    </>
                  ) : (
                    <Link
                      key={v}
                      to={"/cat/" + v.toLowerCase()}
                      onClick={searchCatogoriesOnClick}
                      className="searchCategory  dropdown-item"
                      style={{color: "#757575"}}
                      
                    >
                      {v}
                    </Link>
                  )
                )}
              </div>
            </div>
              <SearchIcon
                className="pl-3 bg-white d-none d-sm-block"
                aria-hidden="true"
                style={{ color: "grey", height: "35px",width: "40px", borderTop: "1px solid #757575",borderBottom: "1px solid #757575" }}
                onClick={() => (find ? findArt() : null)}
              />
            

            <input
              type="text"
              className="form-control bg-white shadow-none searchBarInput"
              placeholder="Search for posters, signages and more"
              onChange={(e) => setFind(e.target.value)}
            />
         
          </div>
          <button className="d-block d-sm-none float-right ml-auto mt-2" style={{
              width: "100px",
              height: "35px",
              border: "1px solid #F2994A",
              boxSizing: "border-box",
              borderRadius: "4px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "14px",
              textAlign: "center",
              letterSpacing: "0.2px",
              color: "#F2994A",
              background: "transparent",
            }} >Search</button>
         <div
              className="nav-item d-none d-lg-block  mx-auto"
              style={{
                display: "inline-block",
                color: "#F2994A",
              }}
            >
              {authUser ? (
                <p
                  className=" textColorAndWeight text-decoration-none"
                  style={{ marginTop: "13px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            {authUser ? (
              <>
                <div className="nav-item d-none ml-4">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                    style={{ backgroundColor: "#003459", border: "0px" }}
                  >
                    <AccountCircleIcon />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="nav-item border d-none ">
                  <p>{"          "}</p>
                </div>
              </>
            )}
          <div className="nav-item   d-none d-sm-block" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                  }}
                >
                  {props.num}
                </span>
              </Link>
            </div>
       </div>
      </nav>
      









      <nav className="navbar navbar-expand-sm mt-0  pt-0 pb-0 pb-sm-2 " id="navbarContainer">
        <div className="collapse navbar-collapse   " id="navbarNav">
          <ul className="navbar-nav  d-flex justify-content-between " style={{width: "100%"}}>
            <li className="nav-item mb-0  mt-5 mt-sm-0">
              <div class="dropdown">
                <Link
                  to="/cat/posters"
                  className="nav-link text-white textColorAndWeight btn shadow-none drpbut menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  onClick={() => window.location.replace("/cat/posters")}
                >
                  Posters
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block posterDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content p-sm-2 p-0 posterDropdown">
                <Link
                  className="dropdown-item d-block d-sm-none posterDropdownArrow backMenu mt-2"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/HINDI"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Hindi
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/BILINGUAL-HINDI-AND-ENGLISH"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Bilingual-Hindi-And-English
                  </Link>
                  <hr />
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/PPE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    PPE
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/ELECTRICAL-HAZARD"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Electrical-Hazard
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove "
                    to="/posters/subcat/MATERIAL-HANDLING"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Material-Handling
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/CHEMICAL-HAZARDS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Chemical-Hazards
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/FIRE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Fire
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/HOUSE-KEEPING"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    House-Keeping
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/QUALITY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Quality
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/ENVIRONMENT"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Environment
                  </Link>
                  <Link
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    to="/posters/subcat/PICTOGRAM"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    {" "}
                    Pictogram
                  </Link>

                  <Link
                    to="/posters/subcat/COVID-19"
                    className="searchCategory dropdown-item posterDropdownArrow menuRemove"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Covid-19
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mb-0  ">
              <div class="dropdown">
                <Link
                  to="/cat/signages"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove  d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  onClick={() => window.location.replace("/cat/signages")}
                >
                  Signages
                </Link><ArrowForwardIosRoundedIcon className="mt-1 float-right d-sm-none d-inline-block signageDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content signageDropdown  p-sm-3 p-0">
                  <Link
                  className="dropdown-item d-block d-sm-none signageDropdownArrow backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item signageDropdownArrow menuRemove"
                    to="/signages/subcat/PRE-PRINTED"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Pre Printed
                  </Link>
                  <Link
                    className="searchCategory dropdown-item signageDropdownArrow menuRemove"
                    to="/signages/subcat/PICTOGRAMS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Pictograms
                  </Link>
                  <Link
                    className="searchCategory dropdown-item signageDropdownArrow menuRemove"
                    to="/signages/subcat/SIGNAL-TEMPLATE-SHEETS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Signal Template Sheets
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <div class="dropdown">
                <Link
                  to="/cat/floor-graphics"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  onClick={() => window.location.replace("/cat/floor-graphics")}
                >
                  Floor Graphics
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block floorDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content  p-sm-3 p-0 floorDropdown">
                <Link
                  className="dropdown-item floorDropdownArrow d-block d-sm-none backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item floorDropdownArrow menuRemove"
                    to="/floor-graphics/subcat/ROAD-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Road-Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item floorDropdownArrow menuRemove"
                    to="/floor-graphics/subcat/WAREHOUSE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Warehouse
                  </Link>
                  <Link
                    className="searchCategory dropdown-item floorDropdownArrow menuRemove"
                    to="/floor-graphics/subcat/PUBLIC-PLACE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Public Place
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <Link
                to="/cat/asset-marking"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Asset Marking
              </Link>
            </li>
            <li className="nav-item mb-0 ">
              <div class="dropdown">
                <Link
                  to="/campaigns"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  onClick={() => window.location.replace("/campaigns")}
                >
                  Campaigns
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block campaignDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content  p-sm-3 p-0 campaignDropdown">
                <Link
                  className="dropdown-item campaignDropdownArrow d-block d-sm-none  backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block campaignDropdownArrow" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/FIT-INDIA"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Fit India
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/MONSOON-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Monsoon Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/WORK-RIGHT"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Work Right
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/HOME-ALONE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Home Alone
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/LAB-AND-SCHOOL-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Lab And School Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item campaignDropdownArrow menuRemove"
                    to="/campaigns/NATURE-AND-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Nature And Safety
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mb-0 ">
              <Link className="nav-link text-white textColorAndWeight menuRemove" to="/#">
                Create your own
              </Link>
            </li>
            <li className="nav-item mb-0 ">
              <Link className="nav-link text-white textColorAndWeight menuRemove" to="/#">
                Resources
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link
                to="/about"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                About
              </Link>
              </li>
            <li className="nav-item mb-0 ">
              <Link
                to="/contact"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Contact
              </Link>
              </li>
            <div className="nav-item mt-auto d-block d-sm-none" >
            <li
              className="nav-item ml-4 mt-5 menuRemove"
              style={{
                marginTop: "2px",
                display: "inline-block",
                marginLeft: "6px",
                color: "#F2994A",
              }}
            >
              {authUser ? (
                <p
                  className="text-white textColorAndWeight text-decoration-none"
                  style={{ marginTop: "13px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>
            {authUser ? (
              <>
                <li className="nav-item ml-4">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                    style={{ backgroundColor: "#003459", border: "0px" }}
                  >
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ml-4">
                  <p>{"                   "}</p>
                </li>
              </>
            )}
            <li className="nav-item ml-4 mt-2 d-block d-sm-none menuRemove">
              <Link
                to="/contact"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Contact
              </Link>
              </li>
              </div>
          </ul>
        </div>
        <div className="overlay"></div>
      </nav>
   

       






   {/* <nav className="container-fluid navbar navbar-expand-lg  navbar-dark "  id="navBarTop">
      <button className="navbar-toggler p-0 border-none hamburger" data-toggle="collapse" data-target="#navbarContainer" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <MenuIcon className=" ml-0 mr-1" style={{color: "white",transform: "scale(1.5,2.3)"}} />
      </button>
        <Link className="navbar-brand ehsLogoImg" to="/">
          <img src={EhsLogo} alt="Ehs Logo" />
        </Link>
        <SearchIcon
                className="d-block d-sm-none ml-auto searchIcon"
                aria-hidden="true"
                style={{ color: "white", border: "0px", width: "10%",height: "8%" }}
                onClick={() => (find ? findArt() : null)}
              />
            <input
              type="text"
              className="form-control bg-white shadow-none searchInput"
              placeholder="Search for posters, signages and more"
              onChange={(e) => setFind(e.target.value)}
            />
        <li className="nav-item mb-0 mr-0 mt-1 d-block d-sm-none" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="ml-1" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                  }}
                >
                  {props.num}
                </span>
              </Link>
            </li>
        <div className="navbar-expand-lg collapse navbar-collapse">
          <div className="form-inline input-group ml-auto" style={{ width: "850px" }}>
            <div className="input-group-prepend">
              <button
                className="btn btn-secondary bg-white textColorAndWeight shadow-none"
                style={{
                  color: "#757575",
                  paddingRight: "65px",
                  width: "200px",
                  height: "40px",
                  borderRight: "1px solid lightgrey",
                }}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={Vector} className="mr-2" alt="" />
                {searchCat}
              </button>
              <div
                className="dropdown-menu p-3"
                aria-labelledby="dropdownMenuButton"
              >
                {search_catogories.map((v, i) =>
                  v === "All Categories" ? (
                    <>
                      <Link
                        key={v}
                        to="/"
                        onClick={searchCatogoriesOnClick}
                        className="searchCategory dropdown-item"
                      >
                        {v}
                      </Link>
                    </>
                  ) : (
                    <Link
                      key={v}
                      to={"/" + v.toLowerCase()}
                      onClick={searchCatogoriesOnClick}
                      className="searchCategory dropdown-item"
                    >
                      {v}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="bg-white" style={{ height: "38px", marginTop: "1px" }} >
              <SearchIcon
                className="mt-2 ml-3"
                aria-hidden="true"
                style={{ color: "grey", border: "0px" }}
                onClick={() => (find ? findArt() : null)}
              />
            </div>

            <input
              type="text"
              className="form-control bg-white shadow-none"
              placeholder="Search for posters, signages and more"
              style={{
                borderLeft: "none",
                border: "0px",
                marginTop: "1px",
                width: "480px"
              }}
              onChange={(e) => setFind(e.target.value)}
            />
          </div>
         <div
              className="nav-item d-none d-lg-block ml-auto"
              style={{
                marginTop: "2px",
                display: "inline-block",
                marginLeft: "6px",
                color: "#F2994A"
              }}
            >
              {authUser ? (
                <p
                  className=" textColorAndWeight text-decoration-none"
                  style={{ marginTop: "13px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            {authUser ? (
              <>
                <div className="nav-item ml-4">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                    style={{ backgroundColor: "#003459", border: "0px" }}
                  >
                    <AccountCircleIcon />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="nav-item ml-4">
                  <p>{"                   "}</p>
                </div>
              </>
            )}
          <div className="nav-item ml-0 d-none d-lg-block" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                <img className="ml-1" src={ShopCart} alt="Shop" />
                <span
                  className="text-center"
                  style={{
                    marginTop: "-8px",
                    marginLeft: "-6px",
                    position: "absolute",
                    borderRadius: "50%",
                    backgroundColor: "#F2994A",
                    width: "17px",
                    height: "17px",
                    paddingTop: "1.5px",
                  }}
                >
                  {props.num}
                </span>
              </Link>
            </div>
       </div>
      </nav>
      <nav className="navbar navbar-expand-lg mt-0 pt-0" id="navbarContainer">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto ">
            <li className="nav-item ml-5">
              <div class="dropdown">
                <Link
                  to="/posters"
                  className="nav-link text-white textColorAndWeight btn shadow-none drpbut menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => window.location.replace("/posters")}
                >
                  Posters
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block posterDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content p-3 posterDropdown">
                <Link
                  className="dropdown-item d-block d-sm-none posterDropdownArrow backMenu mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/HINDI"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    HINDI
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/BILINGUAL-HINDI-AND-ENGLISH"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    BILINGUAL-HINDI-AND-ENGLISH
                  </Link>
                  <hr />
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/PPE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    PPE
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/ELECTRICAL-HAZARD"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    ELECTRICAL-HAZARD
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove "
                    to="/posters/MATERIAL-HANDLING"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    MATERIAL-HANDLING
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/CHEMICAL-HAZARDS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    CHEMICAL-HAZARDS
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/FIRE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    FIRE
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/HOUSE-KEEPING"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    HOUSE-KEEPING
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/QUALITY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    QUALITY
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/ENVIRONMENT"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    ENVIRONMENT
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/posters/PICTOGRAM"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    {" "}
                    PICTOGRAM
                  </Link>

                  <Link
                    to="/posters/COVID-19"
                    className="searchCategory dropdown-item menuRemove"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    COVID-19
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item ml-5">
              <div class="dropdown">
                <Link
                  to="/signages"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove  d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => window.location.replace("/signages")}
                >
                  Signages
                </Link><ArrowForwardIosRoundedIcon className="mt-1 float-right d-sm-none d-inline-block signageDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content signageDropdown p-3">
                  <Link
                  className="dropdown-item d-block d-sm-none signageDropdownArrow backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/signages/PRE-PRINTED"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Pre Printed
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/signages/PICTOGRAMS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    PICTOGRAMS
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/signages/SIGNAL-TEMPLATE-SHEETS"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    SIGNAL TEMPLATE SHEETS
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item ml-5">
              <div class="dropdown">
                <Link
                  to="/floor-graphics"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  onClick={() => window.location.replace("/floor-graphics")}
                >
                  Floor Graphics
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block floordropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content p-3 floorDropdown">
                <Link
                  className="dropdown-item d-block d-sm-none floordropdownArrow backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/floor-graphics/ROAD-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    ROAD SAFETY
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/floor-graphics/WAREHOUSE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    WAREHOUSE
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/floor-graphics/PUBLIC-PLACE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    PUBLIC PLACE
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item ml-5">
              <Link
                to="/asset-marking"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0 menuRemove"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Asset Marking
              </Link>
            </li>
            <li className="nav-item ml-5">
              <div class="dropdown">
                <Link
                  to="/campaigns"
                  className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut menuRemove d-inline-block"
                  style={{ backgroundColor: "#003459", border: "0px" }}
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => window.location.replace("/campaigns")}
                >
                  Campaigns
                </Link><ArrowForwardIosRoundedIcon className="float-right mt-1 d-sm-none d-inline-block campaigndDropdownArrow" style={{width: "15px", color: "white"}} />
                <div className="dropdown-content p-3 campaignDropdown">
                <Link
                  className="dropdown-item d-block d-sm-none campaignDropdownArrow backMenu  mt-3"
                  ><ArrowBackIosRoundedIcon className="mt-1 pb-2 float-left d-sm-none d-inline-block campaignDropdownArrow" style={{width: "15px", color: "white"}} />
                    Back to Main Menu
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/FIT-INDIA"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Fit India
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/MONSOON-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Monsoon Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/WORK-RIGHT"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Work Right
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/HOME-ALONE"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Home Alone
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/LAB-AND-SCHOOL-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Lab And School Safety
                  </Link>
                  <Link
                    className="searchCategory dropdown-item menuRemove"
                    to="/campaigns/NATURE-AND-SAFETY"
                    onClick={(e) => props.setSubCat(e.target.text.trim())}
                  >
                    Nature And Safety
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item ml-5">
              <Link className="nav-link text-white textColorAndWeight menuRemove" to="/#">
                Create your own
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link className="nav-link text-white textColorAndWeight menuRemove" to="/#">
                Resources
              </Link>
            </li>
            <div className="nav-item mt-5 d-block d-sm-none" >
            <li
              className="nav-item ml-4 mt-5 menuRemove"
              style={{
                marginTop: "2px",
                display: "inline-block",
                marginLeft: "6px",
                color: "#F2994A",
              }}
            >
              {authUser ? (
                <p
                  className="text-white textColorAndWeight text-decoration-none"
                  style={{ marginTop: "13px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className=" textColorAndWeight text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>
            {authUser ? (
              <>
                <li className="nav-item ml-4">
                  <Link
                    to="/dashboard"
                    className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                    style={{ backgroundColor: "#003459", border: "0px" }}
                  >
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ml-4">
                  <p>{"                   "}</p>
                </li>
              </>
            )}
            <li className="nav-item ml-4 d-block d-sm-none mt-2 menuRemove">
              <Link
                to="/contact"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0"
                style={{ backgroundColor: "#003459", border: "0px" }}
              >
                Contact
              </Link>
              </li>
              </div>
          </ul>
        </div>
      </nav>*/}
      
    </div>
  );
};

export default NavBar;
