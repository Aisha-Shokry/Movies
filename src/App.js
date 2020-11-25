import React, { Component } from "react";
import "./App.css";
import Navbarr from "./components/layout/Navbarr";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components//home/Home";
import MovieDetails from "./components/home/MovieDetails";
export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbarr />
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={MovieDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}
