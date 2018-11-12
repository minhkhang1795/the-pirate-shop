import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class FavModalPage extends React.Component {

  render() {
    return (
      <Container>
        <Modal isOpen={true}>
          <ModalHeader toggle={this.toggle} size="md">Add to Favorites</ModalHeader>
          <ModalBody>
            Please sign in to add items to your favorite list. However, account related features are still under
            construction!
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={() => this.props.onClose()}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default FavModalPage;