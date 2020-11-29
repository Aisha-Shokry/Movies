import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovie } from "../../redux/actions/MoviesAction";
import SpinnerLoad from "./SpinnerLoad";
import { Container, Row, Col } from "react-bootstrap";
import noimage from "./no-img.png";

class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    const { movie, loading } = this.props;
    console.log(movie);
    let movieInfo = (
      <Container style={{ backgroundColor: "ghostwhite", padding: "20px" }}>
        {movie.Type === "series" ? (
          <h4 className="text-center">Series Details</h4>
        ) : (
          <h4 className="text-center">Movie Details</h4>
        )}
        <Row>
          <Col md={12} lg={4}>
            {movie.Poster !== "N/A" ? (
              <img alt="moviePoster" src={movie.Poster} />
            ) : (
              <img
                alt="moviePoster"
                src={noimage}
                className="w-100"
                style={{ height: "50%" }}
              />
            )}
          </Col>
          <Col md={12} lg={8}>
            <div className="movieDetails mt-5">
              <Row>
                <Col sm={4}>
                  <h5>Title: </h5>
                </Col>
                <Col sm={8}>
                  <h6>
                    {movie.Title} {movie.Year}
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <h5>Country:</h5>
                </Col>
                <Col sm={8}>
                  <h6>{movie.Country}</h6>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <h5>Language:</h5>
                </Col>
                <Col sm={8}>
                  <h6>{movie.Language}</h6>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <h5>Rated:</h5>
                </Col>
                <Col sm={8}>
                  <h6>{movie.Rated}</h6>
                </Col>
              </Row>
              {movie.Production ? (
                <Row>
                  <Col sm={4}>
                    <h5>Production:</h5>
                  </Col>
                  <Col sm={8}>
                    <h6>{movie.Production}</h6>
                  </Col>
                </Row>
              ) : null}
              <Row>
                <Col sm={4}>
                  <h5>IMDB Rating:</h5>
                </Col>
                <Col sm={8}>
                  <h6>{movie.imdbRating}</h6>
                </Col>
              </Row>
              {movie.Ratings && movie.Ratings.length !== 0 ? (
                <Row>
                  <Col sm={4}>
                    <h5>Other Ratings:</h5>
                  </Col>
                  <Col sm={8}>
                    {movie.Ratings
                      ? movie.Ratings.map((rate, index) => (
                          <h6 key={index}>
                            <span style={{ fontWeight: "bold", color: "gray" }}>
                              {rate.Source} :
                            </span>
                            <span>{rate.Value}</span>
                          </h6>
                        ))
                      : null}
                  </Col>
                </Row>
              ) : null}

              <Row>
                <Col sm={4}>
                  <h5>Actors:</h5>
                </Col>
                <Col sm={8}>
                  <h6>{movie.Actors}</h6>
                </Col>
              </Row>
            </div>
          </Col>{" "}
          <a
            href={"https://www.imdb.com/title/" + movie.imdbID}
            target="_blank"
            rel="noopener noreferrer"
            className="btn viewimdb-btn text-center"
          >
            View on IMDB
          </a>
        </Row>
      </Container>
    );

    let content = loading ? <SpinnerLoad /> : movieInfo;
    return <div style={{ margin: "50px 0 100px" }}>{content}</div>;
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
