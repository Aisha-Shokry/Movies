import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class componentName extends Component {
  render() {
    return (
      <div className="homefooter p-3 text-center bg-dark text-light">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                Developed By :
                <span
                  className="pl-2 font-weight-bold"
                  style={{ color: "#b30000" }}
                >
                  Aisha Shokry
                </span>
                , Using <i className="fab fa-react" /> React JS &amp; Redux
                integrated with external movies data API
                <a
                  href="http://www.omdbapi.com/"
                  target="_blank"
                  className="pl-2"
                  rel="noopener noreferrer"
                >
                  OMDB
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
