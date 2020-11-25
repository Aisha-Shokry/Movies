import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import SpinnerLoad from "./SpinnerLoad";
import MoviesContainer from "./MoviesContainer";
class Home extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        {this.props.loading ? <SpinnerLoad /> : <MoviesContainer />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.movieslist.loading
});

export default connect(mapStateToProps)(Home);
