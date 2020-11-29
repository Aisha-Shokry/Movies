import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import noimage from "./no-img.png";
export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movie } = this.props;
    return (
      <Col
        sm={12}
        lg={3}
        md={6}
        style={{ marginBottom: "30px", marginTop: "20px" }}
      >
        <Card className="cardstyle">
          {movie.Poster === "N/A" ? (
            <Card.Img
              className="w-100"
              style={{ height: "50%" }}
              variant="top"
              src={noimage}
            />
          ) : (
            <Card.Img
              className="w-100"
              style={{ height: "50%" }}
              variant="top"
              src={movie.Poster}
            />
          )}

          <Card.Body>
            <Card.Title>
              {movie.Title}-{movie.Year}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="submit-btn">
              <Link to={`/movie/${movie.imdbID}`}>Movie Details</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
