import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import buy from "./guides.css";
const Guides = () => {
    return (
        <>
        <Container className="guides_container">
          <Row>
            <Col lg={12} className="FLEX_CENTER_ROW_GUIDES">
              <div className="pcg_wrapper">
                <span className="pcg_txt">
                  <div className="rectangle8"></div>Plant care guides
                </span>
              </div>
            </Col>
          </Row>
        </Container>
  
        <div className="FLEX_CENTER_ROW_BOX">
          <div className="box_1_wrapper_guides">
            <div className="box1_guides"></div>
            <div className="box1_guides_txt_wrapper">
              <span className="cat_txt_box_1_guides">category</span>
              <p className="bsp_txt_box_1_guides">
                The best small pots for small spaces
              </p>
              <p className="by_txt_box_1_guides">
                by <span className="MM_txt_box_1_guides">MARQUIS MATSON</span>
              </p>
            </div>
          </div>
          <div className="box_1_wrapper_guides">
            <div className="box2_guides"></div>
            <div className="box1_guides_txt_wrapper">
            <span className="cat_txt_box_1_guides">category</span>
              <p className="bsp_txt_box_1_guides">
                The best small pots for small spaces
              </p>
              <p className="by_txt_box_1_guides">
                by <span className="MM_txt_box_1_guides">MARQUIS MATSON</span>
              </p>
            </div>
          </div>
          <div className="box_1_wrapper_guides">
            <div className="box3_guides"></div>
            <div className="box1_guides_txt_wrapper">
            <span className="cat_txt_box_1_guides">category</span>
              <p className="bsp_txt_box_1_guides">
                The best small pots for small spaces
              </p>
              <p className="by_txt_box_1_guides">
                by <span className="MM_txt_box_1_guides">MARQUIS MATSON</span>
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Guides
