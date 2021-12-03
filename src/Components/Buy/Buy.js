import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import buy from "./buy.css";

const Buy = () => {
  return (
    <>
      <Container className="buy_container">
        <Row>
          <Col lg={12} className="FLEX_CENTER_ROW_BUY">
            <div className="wtb_wrapper">
              <span className="wtb_txt">
                <div className="rectangle7"></div>What to buy
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="FLEX_CENTER_ROW_BOX ipad_view_buy">
        <div className="box_1_wrapper_buy ">
          <div className="box1_buy "></div>
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
  );
};

export default Buy;
