import React from 'react';
import {Container, Row, Col, Input, Button} from 'mdbreact';

class SignInComponent extends React.Component {
  render() {
    return (
      <Container className="my-5 py-5">
          <Row>
            <Col md="6">
              <form>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                  <Input label="Type your email" icon="envelope" group type="email" validate error="wrong"
                         success="right"/>
                  <Input label="Type your password" icon="lock" group type="password" validate/>
                </div>
                <div className="text-center">
                  <Button color="dark">Login</Button>
                </div>
              </form>
            </Col>
          </Row>
      </Container>
    );
  }
};

export default SignInComponent;