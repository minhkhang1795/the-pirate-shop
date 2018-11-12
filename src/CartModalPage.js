import React from 'react';
import {Container, Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';
import NumericInput from 'react-numeric-input';

class CartModalPage extends React.Component {

  render() {
    let quantity = this.props.item.quantity ? this.props.item.quantity : 0;

    return (
      <Container>
        <Modal isOpen={true}>
          <ModalHeader toggle={this.toggle} size="md">Add to Cart</ModalHeader>
          <ModalBody>
            How many items do you want to purchase? 0 will remove the item from cart.
          </ModalBody>
          <NumericInput min={0}
                        value={quantity}
                        onChange={(valueAsNumber) => (quantity = valueAsNumber)}/>
          <ModalFooter>
            <Button color="dark" onClick={() => this.props.onClose()}>Close</Button>{' '}
            <Button color="green" onClick={() => this.props.onCartUpdate(this.props.item, quantity)}>Done</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default CartModalPage;