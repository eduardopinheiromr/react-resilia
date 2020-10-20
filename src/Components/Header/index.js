import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import About from "../About";
import "./header.css";
import "./fonts.css";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Helmet>
          <title>Bons Drinks</title>
        </Helmet>
        <header>
          <nav>
            <ul className="header__list">
              <Link to="/drinks">
                <li>Drinks</li>
              </Link>
              <Link to="/about">
                <li>Sobre nós</li>
              </Link>
              <Link to="/">
                <li className="logo">Bons Drinks</li>
              </Link>
              <Link to="/our-team">
                <li>Nosso Time</li>
              </Link>
              <Link to="/contact">
                <li>Contato</li>
              </Link>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/our-team">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
