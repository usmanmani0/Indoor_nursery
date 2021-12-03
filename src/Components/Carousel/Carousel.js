import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import annie1 from "./assets/images/annie1.png";
import carousel from "./carousel.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", width: "20px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", width: "20px" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  constructor(props) {
    super(props); 
    this.state = { windowWidth: window.innerWidth };
  }
 handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
   componentDidUpdate(){}
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  render() {
   
    const settings = {
      dots: false,
      infinite: true,
      arrows:window.innerWidth > 910 ?true:false,
      slidesToShow: window.innerWidth > 1000 ? 4 : window.innerWidth>785?3 : window.innerWidth>600?2 : 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow /> ,
      prevArrow:  <SamplePrevArrow /> ,
    };
  
    return (
      <Container>
        <div>
          <Container className="guides_container">
            <Row>
              <Col lg={12} className="FLEX_CENTER_ROW_GUIDES">
                <div className="pcg_wrapper">
                  <span className="pcg_txt">
                    <div className="rectangle8"></div>Shop the nursery
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
          <Slider {...settings}>
            <div className="carousel_wrapper">
            
              <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
            <div className="carousel_wrapper">
            
            <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
            <div className="carousel_wrapper">
            
            <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
            <div className="carousel_wrapper">
            
            <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
            <div className="carousel_wrapper">
            
            <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
            <div className="carousel_wrapper">
            
            <img className="annie1_img_carousel" src={annie1}></img>
              <div className="carosel_desc_wrapper">
                <span className="cool_prod_txt_carousel">cool product</span>
                <p className="our_rating_txt_carousel">
                  Our rating: <span className="ten_nmbr_carousel">10/10</span>
                </p>
                <button className="see_prices_btn_carousel">see prices</button>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
