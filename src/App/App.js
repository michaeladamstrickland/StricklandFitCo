/* eslint-disable indent */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Products from "../components/ProductList";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import { isAuthenticated } from "../repository";

import ShoppingCart from "./CommonComponents/ShoppingCart/ShoppingCart";

import Home1 from "./Layouts/Home1";
import Pages from "./CommonComponents/Pages/pages";

import Header from "./CommonComponents/Header";

import "./App.css";

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  logOut() {
    localStorage.removeItem('x-access-token');
  }

  render() {
    const auth = isAuthenticated();
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home1} />
              <Route exact path="/ShoppingCart" component={ShoppingCart} />
              <Route exact path="/pages" component={Pages} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              {!auth ? <Route exact path="/login" component={Login} /> : ""}
            </Switch>
          </div>
        </Router>
      </div>

      // <Router>
      //       <div className="App">
      //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //           <div className="container">
      //             <Link className="navbar-brand" to="/">Home</Link>
      //             {/* <button className="navbar-toggler" type="button"
      //               data-toggle="collapse" data-target="#navbarNavAltMarkup"
      //               aria-controls="navbarNavAltMarkup" aria-expanded="false"
      //               aria-label="Toggle navigation"> */}
      //               {/* <span className="navbar-toggler-icon"></span>
      //             </button> */}
      //             {/* <div className="collapse navbar-collapse active" id="navbarNavAltMarkup"> */}
      //               <div className="navbar-nav">
      //                 <Link className="nav-item nav-link" to="/products">Products</Link>
      //                 <Link className="nav-item nav-link" to="/cart">Cart</Link>
      //                 {/* { (auth) ?  */}
      //                 <Link className="nav-item nav-link" to="/checkout">Checkout</Link>
      //                          {/* : ''}
      //                  { ( auth ) ?  */}
      //                      {/* ( <a className="nav-item nav-link" href="/"  */}
      //                 {/*       onClick={this.logOut}>Log out</a>) :  */}
      //                     {/* (  */}

      //                     {/* <Link className="nav-item nav-link float-right" to="/login">Log in</Link>

      //                       )
      //                 } */}
      //               </div>
      //             {/* </div> */}
      //           </div>
      //         </nav>
      //         <div className="container">
      //           <br/>
      //           <Route exact path="/" component={Home1} />
      //           <Route exact path="/products" component={Products} />
      //           <Route exact path="/cart" component={Cart} />
      //           <Route exact path="/checkout" component={Checkout} />
      //           { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
      //         </div>
      //       </div>
      //     </Router>
    );
  }
}

export default App;
