import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import buy from "./propogation.css";
const Propogation = () => {
    return (
        <>
      <Container className="buy_container">
        <Row>
          <Col lg={12} className="FLEX_CENTER_ROW_BUY">
            <div className="pro_wrapper">
              <span className="pro_txt">
                <div className="rectangle9"></div>Propogation 101
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="FLEX_CENTER_ROW_BOX">
        <div className="box_1_wrapper_buy">
          <div className="box1_buy"></div>
          <div className="box1_buy_txt_wrapper">
            <span className="cat_txt_box_1_buy">category</span>
            <p className="bsp_txt_box_1_buy">
              The best small pots for small spaces
            </p>
            <p className="by_txt_box_1_buy">
              by <span className="MM_txt_box_1_buy">MARQUIS MATSON</span>
            </p>
          </div>
        </div>
        <div className="box_1_wrapper_buy">
          <div className="box2_buy"></div>
          <div className="box1_buy_txt_wrapper">
          <span className="cat_txt_box_1_buy">category</span>
            <p className="bsp_txt_box_1_buy">
              The best small pots for small spaces
            </p>
            <p className="by_txt_box_1_buy">
              by <span className="MM_txt_box_1_buy">MARQUIS MATSON</span>
            </p>
          </div>
        </div>
        <div className="box_1_wrapper_buy">
          <div className="box3_buy"></div>
          <div className="box1_buy_txt_wrapper">
          <span className="cat_txt_box_1_buy">category</span>
            <p className="bsp_txt_box_1_buy">
              The best small pots for small spaces
            </p>
            <p className="by_txt_box_1_buy">
              by <span className="MM_txt_box_1_buy">MARQUIS MATSON</span>
            </p>
          </div>
        </div>
      </div>
    </>
    )
}

export default Propogation







