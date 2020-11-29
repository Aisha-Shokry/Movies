import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";
class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content =
      movies.Search && movies.Search.length > 0
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return (
      <Container className='mb-5 mt-5'>
        <Row>{content}</Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movieslist.movies
});

export default connect(mapStateToProps)(MoviesContainer);
