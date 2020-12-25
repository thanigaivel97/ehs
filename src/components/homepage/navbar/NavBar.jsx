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
              <a
                href="/#"
                className="text-white textColorAndWeight text-decoration-none"
              >
                Login
              </a>{" "}
              |{" "}
              <a
                href="/#"
                className="text-white textColorAndWeight text-decoration-none"
              >
                Register
              </a>
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
                onMouseEnter={(e) => $(".drp").toggle() }
              >
                Posters
              </Link>

              <div
                className="dropdown-menu p-3 drp"
                aria-labelledby="dropdownMenuButton"
                onMouseLeave={(e) => $(".drp").toggle() }
              >
                <a className="searchCategory dropdown-item" href="/#">
                  Hindi
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Bilingual - Hindi and English
                </a>
                <hr />
                <a className="searchCategory dropdown-item" href="/#">
                  PPE
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Electrical Handling
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Material Handling
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Chemical Hazards
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Fire Safety
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  General Safety
                </a>
                <a className="searchCategory dropdown-item" href="/#">
                  Health
                </a>

                <Link to="/posters/covid-19" className="searchCategory dropdown-item"> COVID-19</Link>


                <a className="searchCategory dropdown-item" href="/#">
                  Accident Prone
                </a>
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
              <Link to="/cart" className="nav-link text-white textColorAndWeight">
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
