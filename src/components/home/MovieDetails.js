import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovie } from "../../redux/actions/MoviesAction";
import SpinnerLoad from "./SpinnerLoad";
class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    const { movie, loading } = this.props;
    let movieInfo =<h2>haha</h2>
     
    let content = loading ? <SpinnerLoad /> : movieInfo;
    return <>{content}</>;
  }
}
const mapStateToProps = state => ({
  movie: state.movieslist.movie,
  loading: state.movieslist.loading
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
