import React from 'react';
import {Container, Row, Col, Input, Button} from 'mdbreact';

class SignUpComponent extends React.Component {
  render() {
    return (
      <Container className="my-5 py-5">
          <Row>
            <Col md="6">
              <form>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                  <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                  <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong"
                         success="right"/>
                  <Input label="Your password" icon="lock" group type="password" validate/>
                </div>
                <div className="text-center">
                  <Button color="dark">Register</Button>
                </div>
              </form>
            </Col>
          </Row>
      </Container>
    );
  }
};

export default SignUpComponent;