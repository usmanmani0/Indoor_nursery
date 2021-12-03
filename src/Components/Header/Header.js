import React from "react";
import { Row, Col, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import nurserylogo from "./assets/images/indoor-nursery-logo.png";
import header from "./header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="navbar_logo">
            <img className="mv_logo" src={nurserylogo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="nav_items_padding_bw" href="#deets">
              <div className="home_item">
                <div className="rectangle1"></div>
                <span className="home_item_txt">home</span>
              </div>
            </Nav.Link>
            <Nav.Link
              className="nav_items_padding_bw"
              eventKey={2}
              href="#memes"
            >
              <div className="home_item">
                <div className="rectangle2"></div>
                <span className="home_item_txt">popular</span>
              </div>
            </Nav.Link>
            <Nav.Link
              className="nav_items_padding_bw"
              eventKey={3}
              href="#memes"
            >
              <div className="home_item">
                <div className="rectangle3"></div>
                <span className="home_item_txt">care</span>
              </div>
            </Nav.Link>
            <Nav.Link
              className="nav_items_padding_bw"
              eventKey={4}
              href="#memes"
            >
              <div className="home_item">
                <div className="rectangle4"></div>
                <span className="home_item_txt">types</span>
              </div>
            </Nav.Link>
            <Nav.Link
              className="nav_items_padding_bw"
              eventKey={5}
              href="#memes"
            >
              <div className="home_item">
                <div className="rectangle5"></div>
                <span className="home_item_txt">supplies</span>
              </div>
            </Nav.Link>
            <Nav.Link
              className="nav_items_padding_bw"
              eventKey={6}
              href="#memes"
            >
              <div className="home_item">
                <div className="rectangle6"></div>
                <span className="home_item_txt">about us</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// <Container fluid>
//   <div className="FLEX_CENTER_ROW">
//     <div className="navbar_logo">
//       <img src={nurserylogo} alt="logo" />
//     </div>

//     <div className="navbar_items">
//       <div className="home_item">
//         <div className="rectangle1"></div>
//         <span className="home_item_txt">home</span>
//       </div>
//       <div className="home_item">
//         <div className="rectangle2"></div>
//         <span className="home_item_txt">popular</span>
//       </div>
// <div className="home_item">
//   <div className="rectangle3"></div>
//   <span className="home_item_txt">care</span>
// </div>
// <div className="home_item">
//   <div className="rectangle4"></div>
//   <span className="home_item_txt">types</span>
// </div>
// <div className="home_item">
//   <div className="rectangle5"></div>
//   <span className="home_item_txt">supplies</span>
// </div>
// <div className="home_item">
//   <div className="rectangle6"></div>
//   <span className="home_item_txt">about us</span>
// </div>
//     </div>
//   </div>
// </Container>
