import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import SpinnerLoad from "./SpinnerLoad";
import MoviesContainer from "./MoviesContainer";
class Home extends Component {
  render() {
    console.log(this.props.loading);
    return (
      <div className="HomePage">
        <SearchForm />
        {/* {this.props.loading ? <SpinnerLoad /> :  */}
        <MoviesContainer />
        {/* } */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.movieslist.loading
});

export default connect(mapStateToProps)(Home);
