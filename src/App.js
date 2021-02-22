/*jshint esversion: 6 */
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/homepage/HomePage.jsx";
import Category from "./components/category_page/CategoryPage.jsx";
import SignagesCategory from "./components/signages/CategoryPage.jsx";
import AssetMarkingCategory from "./components/AssetMarking/CategoryPage.jsx";
import CampaignsCategory from "./components/Campaigns/CategoryPage.jsx";
import FloorGraphicsCategory from "./components/FloorGraphics/CategoryPage.jsx";
import ProductList2 from "./components/product_list2/ProductList2.jsx";
import NavBar from "./components/homepage/navbar/NavBar";
import ProductDescription from "./components/productdescription/ProductDescription";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/ShoppingCart/ShoppingCart";
import Dashboard from "./components/CustomerDashboard/Dashboard";
import Axios from "axios";
import { login } from "./helper/apiPath";
import { setLoginResponse } from "./redux/actions/index.js";
import { connect } from "react-redux";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup.jsx";
import Otp from "./components/login/Otp";

export const DesContext = React.createContext({});

function App(props) {
  let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
    cartList: [],
  };

  const [cartCount, setCartCount] = useState(cartJson.cartList.length || 0);
  const [subCat, setSubCat] = React.useState("");

  const countSetFun = (bottomDet) => {
    setCartCount(cartCount + 1);

    let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
      cartList: [],
    };

    cartJson.cartList.push(bottomDet);

    localStorage.setItem("listCart12345678910", JSON.stringify(cartJson));
  };

  const [Description, setDescription] = useState({});

  React.useEffect(() => {
  
    Axios.post(login, { emailid: "naveen@gmail.com", password: "1234" })
      .then((res) => {
        props.setLoginResponse(res.data.token);
        localStorage.setItem("ehstoken12345678910", res.data?.token);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <DesContext.Provider value={{ DesDetail: setDescription }}>
        <Router>
          <NavBar num={cartCount} setSubCat={setSubCat} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/posters">
              <Category setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/signages">
              <SignagesCategory setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/floor-graphics">
              <FloorGraphicsCategory setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/asset-marking">
              <AssetMarkingCategory setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/campaigns">
              <CampaignsCategory setCartCountFun={countSetFun} />
            </Route>

            <Route exact path="/posters/HINDI">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/BILINGUAL-HINDI-AND-ENGLISH">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/PPE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/ELECTRICAL-HAZARD">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/MATERIAL-HANDLING">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/CHEMICAL-HAZARDS">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/FIRE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/HOUSE-KEEPING">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/QUALITY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/ENVIRONMENT">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/PICTOGRAM">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/posters/COVID-19">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/signages/SIGNAL-TEMPLATE-SHEETS">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/signages/PICTOGRAMS">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/signages/PRE-PRINTED">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/FIT-INDIA">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/MONSOON-SAFETY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/WORK-RIGHT">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/HOME-ALONE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/LAB-AND-SCHOOL-SAFETY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/campaigns/NATURE-AND-SAFETY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/floor-graphics/COVID-19">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/floor-graphics/ROAD-SAFETY">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/floor-graphics/WAREHOUSE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/floor-graphics/PUBLIC-PLACE">
              <ProductList2 setCartCountFun={countSetFun} subCat={subCat} />
            </Route>

            <Route exact path="/item/:id">
              <ProductDescription
                setCartCountFun={countSetFun}
                navCount={cartCount}
              />
            </Route>

            <Route path="/cart">
              <Cart
                setCartCount={setCartCount}
                navCount={cartCount}
                det={Description}
                setCartCountFun={countSetFun}
              />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/activate">
              <Otp />
            </Route>

            <Route exact path="/dashboard">
              <Dashboard setCartCountFun={countSetFun} />
            </Route>
          </Switch>
        </Router>
      </DesContext.Provider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoginResponse: (payload) => dispatch(setLoginResponse(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
