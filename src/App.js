import './App.css';
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import React from "react";



function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch> 
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
