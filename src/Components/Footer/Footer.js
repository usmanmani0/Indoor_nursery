import React from "react";
import footer from "./footer.css";
import indoorfooterlogo from "./assets/images/indoor-footer-logo.png";
import search from "./assets/images/search.png";
import insta from "./assets/images/insta.png";
import pinter from "./assets/images/pinter.png";
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
  Stack,
} from "react-bootstrap";
const Footer = () => {
  return (
    <Container className="footer_container" fluid>
      <Row className="footer_wrapper footer_wrapper_mv">
        <Col xs={10} lg={6}  className="footer_col_1_wrapper">
          <Row className="footer_logo">
            <Col>
              <img src={indoorfooterlogo} alt="logo" />
            </Col>
          </Row>
          <Stack className="footer_items_col_1" direction="horizontal" gap={5}>
            <div>category</div>
            <div>page</div>
            <div>page</div>
          </Stack>
          <Stack className="footer_items_col_1" direction="horizontal" gap={5}>
            <div>category</div>
            <div>page</div>
            <div>page</div>
          </Stack>
          <Stack className="footer_items_col_1" direction="horizontal" gap={5}>
            <div>category</div>
            <div>page</div>
            <div>page</div>
          </Stack>
          <Stack className="footer_items_col_1" direction="horizontal" gap={5}>
            <div>category</div>
            <div>page</div>
            <div>page</div>
          </Stack>
          <Stack className="footer_items_col_1" direction="horizontal" gap={5}>
            <div>category</div>
            <div>page</div>
            <div>page</div>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div>
              <div
                style={{
                  maxWidth: "200px",
                  margin: "20px 20px 0px 20px",
                  backgroundColor: "#C4C4C41A",
                }}
              >
                <div className="input-icons">
                  <img className="icon" src={search} alt="" />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>
          </Stack>

          <Stack
            className="footer_items_col_1 inspin_icons_footer"
            direction="horizontal"
            gap={2}
          >
            <div>follow us:</div>
            <div style={{ paddingLeft: "5px" }}>
              <img src={insta} alt="" />
              <img style={{ paddingLeft: "8px" }} src={pinter} alt="" />
            </div>
          </Stack>
        </Col>
        <Col xs={12} lg={6} className="footer_col_2_wrapper">
          <Row className="footer_items_col_2">
            <Col>
              step up Your
              <br />
              plant game
            </Col>
          </Row>
          <Row className="footer_items_col_2_para">
            <Col>
              Get weekly indoor tips to
              <br /> help you grow your indoor
              <br />
              garden, not kill it.
            </Col>
          </Row>
          <Row className="input_footer_col_2">
            <Col lg={2} md={2} sm={6} xs={2}></Col>
            <Col
              style={{ display: "flex", justifyContent: "flex-end" }}
              lg={10}
              md={10}
              sm={6}
              xs={10}
            >
              <div className="signup_input_btn">
                <InputGroup>
                  <FormControl
                    placeholder="put your email here"
                    aria-label="put your email here"
                    aria-describedby="basic-addon2"
                    className="signup_input_btn"
                  />
                  <Button variant="danger" id="button-addon2">
                    sign up
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row className="copyrights_txt">
            <Col>2020 rights reserved etc</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
