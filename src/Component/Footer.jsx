import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "../StyledComponent/App.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
              <Col  md={6} sm={12} >
                <Link to="/" className="footer_div">
                  <img src={Logo} alt="img" />
                </Link>
              </Col>
              <Col  md={6} sm={12} >
                <div className="footer_div">
                  <h3>Our Social Networks</h3>
                  <div>
                    <Link
                      to="https://www.facebook.com/sabreen.ahmed.127201?mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook p-1"></i>
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/sabreen-ahmed-35bb54264"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin p-1"></i>
                    </Link>
                    <Link to="https://github.com/sabreenahmed21" target="_blank">
                      <i class="fa-brands fa-github p-1"></i>
                    </Link>
                  </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
