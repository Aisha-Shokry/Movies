import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../redux/actions/MoviesAction";
class SearchForm extends Component {
  onTypeSearch = e => {
    this.props.searchMovie(e.target.value);
  };
  onSearch = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  render() {
    return (
      <Container className="form-container mt-5 p-5">
        <div className="text-center">
          <p style={{ fontSize: "40px" }}>
            {" "}
            <i className="fas fa-search pr-4 fa-2x"></i>Search for a movie, Tv
            series
          </p>
        </div>
        <Form>
          <Form.Group>
            <Form.Control
              onChange={this.onTypeSearch}
              type="text"
              placeholder="Search movie, Tv series"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="search-btn"
            onClick={this.onSearch}
          >
            Search
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movieslist.text
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchMovie, fetchMovies, setLoading }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
