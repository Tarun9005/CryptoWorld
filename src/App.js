import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Route, Router, Switch,Link } from 'react-router';

import Cryptoconverter from './Components/CryptoConverter/Cryptoconverter';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cryptoconvertsearch from './Components/Cryptoconvertsearch/Cryptoconvertsearch';
import About from './Components/About/About';
import Cryptoexchange from './Components/Cryptoexchange/Cryptoexchange';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Resetpassword from './Components/Resetpassword/Resetpassword';
import Wishlist from './Components/Wishlist/Wishlist';
import Pagenotfound from './Components/Pagenotfound/Pagenotfound';

//import './App.css';


function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/converter" component={Cryptoconvertsearch} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cryptoexchange" component={Cryptoexchange}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/reset" component={Resetpassword}/>
          <Route exact path="/wishlist" component={Wishlist}/>
          <Route   path="*" component={Pagenotfound}/>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
