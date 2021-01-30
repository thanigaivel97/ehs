/*jshint esversion: 6 */
import React, { useState } from "react";
import "./NavBar.css";
import EhsLogo from "../../../images/EhsLogo.svg";
import Vector from "../../../images/Vector.svg";
import ShopCart from "../../../images/Shop.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import $ from "jquery";

const NavBar = (props) => {
  const [authUser, setAuthUser] = React.useState("");
  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails123")))
      setAuthUser(
        JSON.parse(localStorage.getItem("userDetails123")).emailid ||
          JSON.parse(localStorage.getItem("userDetails123")).phonenumber
      );
  }, [props.loginResponse]);

  const [searchCat, setCat] = useState("All Categories");

  const searchCatogoriesOnClick = (event) => setCat(event.target.text);

  const search_catogories = [
    "All Categories",
    "Posters",
    "Signages",
    "Floor Graphics",
    "Asset Markings",
    "COVID-19",
  ];

  return (
    <div id="navBarTop">
      <nav className="container navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img id="ehsLogoImg" src={EhsLogo} alt="Ehs Logo" />
        </Link>
        <div className="collapse navbar-collapse">
          <div className="form-inline input-group ml-4">
            <div className="input-group-prepend">
              <button
                className="btn btn-secondary bg-white textColorAndWeight shadow-none"
                style={{
                  color: "#757575",
                  paddingRight: "65px",
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
                {search_catogories.map((v, i) => (
                  <a
                    key={v}
                    onClick={searchCatogoriesOnClick}
                    className="searchCategory dropdown-item"
                    href="/#"
                  >
                    {v}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white">
              <SearchIcon
                className="mt-2 ml-3"
                aria-hidden="true"
                style={{ color: "grey", border: "0px" }}
              />
            </div>

            <input
              type="text"
              className="form-control bg-white shadow-none"
              placeholder="Search for posters, signages and more"
              style={{ borderLeft: "none", border: "0px" }}
            />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item ml-5">
              <Link to="/dashboard" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item ml-5">
              <a href="/#" className="nav-link text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="container navbar navbar-expand-lg mt-0 pt-0">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item text-white" style={{ marginTop: "2px" }}>
              {authUser ? (
                <p
                  className="text-white textColorAndWeight text-decoration-none"
                  style={{ marginTop: "6px" }}
                >
                  {authUser.includes("@") ? authUser.split("@")[0] : authUser}
                </p>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white textColorAndWeight text-decoration-none"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/signup"
                    className="text-white textColorAndWeight text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>

            <li className="nav-item ml-4">
              <Link
                to="/posters"
                className="nav-link text-white textColorAndWeight btn shadow-none border-0 drpbut "
                style={{ backgroundColor: "#003459", border: "0px" }}
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseEnter={(e) => $(".drp").toggle()}
              >
                Posters
              </Link>

              <div
                className="dropdown-menu p-3 drp"
                aria-labelledby="dropdownMenuButton"
                onMouseLeave={(e) => $(".drp").toggle()}
              >
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/HINDI"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  HINDI
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/BILINGUAL-HINDI-AND-ENGLISH"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  BILINGUAL-HINDI-AND-ENGLISH
                </Link>
                <hr />
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/PPE"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  PPE
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/ELECTRICAL-HAZARD"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  ELECTRICAL-HAZARD
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/MATERIAL-HANDLING"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  MATERIAL-HANDLING
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/CHEMICAL-HAZARDS"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  CHEMICAL-HAZARDS
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/FIRE"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  FIRE
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/HOUSE-KEEPING"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  HOUSE-KEEPING
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/QUALITY"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  QUALITY
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/ENVIRONMENT"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  ENVIRONMENT
                </Link>
                <Link
                  className="searchCategory dropdown-item"
                  to="/posters/PICTOGRAMS"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  {" "}
                  PICTOGRAMS
                </Link>

                <Link
                  to="/posters/COVID-19"
                  className="searchCategory dropdown-item"
                  onClick={(e) => props.setSubCat(e.target.text.trim())}
                >
                  COVID-19
                </Link>
              </div>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Signages
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Floor Graphics
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Asset Marking
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Campaigns
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Create your own
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link text-white textColorAndWeight" href="/#">
                Resources
              </a>
            </li>
            <li className="nav-item ml-4" style={{ marginTop: "-2px" }}>
              <Link
                to="/cart"
                className="nav-link text-white textColorAndWeight"
              >
                Shopping Cart
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
