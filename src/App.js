/*jshint esversion: 6 */
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/homepage/HomePage.jsx";
import Category from "./components/category_page/CategoryPage.jsx";
import ProductList2 from "./components/product_list2/ProductList2.jsx";
import NavBar from "./components/homepage/navbar/NavBar";
import ProductDescription from "./components/productdescription/ProductDescription";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/ShoppingCart/ShoppingCart";
import Dashboard from "./components/CustomerDashboard/Dashboard";
import Login from './components/login/Login';
import Signup from "./components/login/Signup";
import Axios from "axios";
import { login } from "./helper/apiPath";
import { setLoginResponse } from "./redux/actions/index.js";
import { connect } from "react-redux";

export const DesContext = React.createContext({});

function App(props) {
  let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
    cartList: [],
  };

  const [cartCount, setCartCount] = useState(cartJson.cartList.length || 0);

  const countSetFun = (bottomDet) => {
    setCartCount(cartCount + 1);

    let cartJson = JSON.parse(localStorage.getItem("listCart12345678910")) || {
      cartList: [],
    };

    cartJson.cartList.push(bottomDet);

    localStorage.setItem("listCart12345678910", JSON.stringify(cartJson));
  };

  const [Description, setDescription] = useState({});

  // let [authToken, setAuthToken] = useState("");

  // const [posters, setPosters] = useState();

  // const [loginResponse,setLoginResponse] = useState({});




  // React.useEffect(() => {
  //   Axios.post(login, { emailid: "naveen@gmail.com", password: "1234" })
  //     .then((res) => {
  //       props.setLoginResponse(res.data);
  //       // localStorage.setItem("ehstoken12345678910", res.data?.token);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  

  return (
    <div className="App">
      <DesContext.Provider value={{ DesDetail: setDescription }}>
        <Router>
          <NavBar num={cartCount} />
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>

            <Route exact path="/posters">
              <Category setCartCountFun={countSetFun} />
            </Route>

            <Route path="/posters/covid-19">
              <ProductList2 setCartCountFun={countSetFun} />
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

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
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
