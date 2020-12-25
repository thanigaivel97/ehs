/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./redux/reducer/index";
import AdminPage from './components/admin/AdminPage';
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminPage/>
        </Route>
        <Route path="/">
          <App />
        </Route>
        
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
