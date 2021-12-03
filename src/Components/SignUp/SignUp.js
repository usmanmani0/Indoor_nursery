import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import signup from "./signup.css";
const SignUp = () => {
  return (
    <Container className="signuUp_container" fluid>
      <div className="signup_row">
        <div className="signup_txt_wrapper">
          <p className="suy_txt_signup">
            step up your
            <br /> plant game
          </p>
          <p className="gwi_txt_signup">
            Get weekly indoor plant tips
            <br /> to help you grow your indoor
            <br /> garden, not kill it.
          </p>
        </div>
        <div className="signup_input_btn">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="put your email here"
              aria-label="put your email here"
              aria-describedby="basic-addon2"
            />
            <Button variant="danger" id="button-addon2">
              sign up
            </Button>
          </InputGroup>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
