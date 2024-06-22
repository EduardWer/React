import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./futter.css"

class Futter extends Component {
    render() {
        return (
            <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={3}>
            <h6>About Us</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              turpis id dui commodo porttitor.
            </p>
          </Col>
          <Col md={3}>
            <h6>Links</h6>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/catalog">Catalog</a></li>
              <li><a href="/likes">Favorites</a></li>

            </ul>
          </Col>
          <Col md={3}>
            <h6>Contact Us</h6>
            <p>
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
        );
    }
}

export default Futter;