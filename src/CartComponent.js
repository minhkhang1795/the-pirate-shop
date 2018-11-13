import React from 'react';
import {Container, Button} from 'mdbreact';
import {Link} from "react-router-dom";

const DVD_DISCOUNT = .1;
const BR_DISCOUNT = .15;
const TOTAL_DISCOUNT = .05;

class CartComponent extends React.Component {

  static isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  static calculateDiscount(minCount, items, cdType, discount) {
    let count = 0;
    if (items) {
      for (let key in items) {
        if (items.hasOwnProperty(key) && items[key].cdType === cdType) {
          count++;
        }
      }
    }
    return count >= minCount ? discount : 0;
  }

  static calculateTotal(items) {
    let count = 0;
    let total = 0;
    if (items) {
      for (let key in items) {
        if (items.hasOwnProperty(key)) {
          count += items[key].quantity;
          total += items[key].price * items[key].quantity * (1 - items[key].discount);
        }
      }
    }
    if (count >= 100) {
      return {discountApplied: true, total: total * (1 - TOTAL_DISCOUNT)};
    } else {
      return {discountApplied: false, total: total};
    }
  }

  static addDiscountsTo(items) {
    let dvdDiscount = CartComponent.calculateDiscount(3, items, 'DVD', DVD_DISCOUNT);
    let brDiscount = CartComponent.calculateDiscount(3, items, 'Blue-Ray', BR_DISCOUNT);
    if (items) {
      for (let key in items) {
        if (items.hasOwnProperty(key)) {
          items[key].discount = items[key].cdType === 'DVD' ? dvdDiscount : brDiscount;
        }
      }
    }
  }

  render() {
    const {items} = this.props;

    CartComponent.addDiscountsTo(items);
    let {discountApplied, total} = CartComponent.calculateTotal(items);

    return (
      <Container>
        <section className="text-center my-5 py-5">
          <h2 className="h1-responsive font-weight-bold text-center my-3">Your Cart</h2>

          {(!items || CartComponent.isEmpty(items)) &&
          <p className="grey-text text-center w-responsive mx-auto mb-3">Your cart is empty!</p>}

          {items && !CartComponent.isEmpty(items) &&
          <table className="table table-hover">
            <thead className="black white-text">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Discount</th>
              <th scope="col">Subtotal</th>
            </tr>
            </thead>

            {/* Order's items*/}
            <tbody>
            {items && Object.keys(items).map((key, index) =>
              <tr key={key}>
                <th scope="row">{index + 1}</th>
                <td><b><Link to='/cart'>{items[key].Title + ' (' + items[key].cdType + ')'}</Link></b></td>
                <td>${items[key].price}</td>
                <td>{items[key].quantity} <i className="fa fa-edit fa-lg cursor"
                                             onClick={() => this.props.onCartClick(items[key])}/></td>
                <td data-toggle="tooltip" data-placement="bottom"
                    title={items[key].discount > 0 ? "Discount applied for order with all " + items[key].cdType + "s" : ""}>
                  {items[key].discount * 100}%
                </td>
                <td>${items[key].price * items[key].quantity * (1 - items[key].discount)}</td>
              </tr>
            )}

            {/* Total of the order */}
            <tr>
              <th scope="row"/>
              <td/>
              <td/>
              <td/>
              <td><h3>Total</h3></td>
              <td data-toggle="tooltip" data-placement="bottom"
                  title={discountApplied ? "5% Discount applied for bulk order" : ""}>
                <h3>${total}</h3>
                <p className="green-text">{discountApplied ? "(5% Discount applied)" : ""}</p></td>
            </tr>

            </tbody>
          </table>
          }

          <Link to={process.env.PUBLIC_URL + '/'} onClick={() => this.props.updateNavItem('')}>
            <Button color="dark">Continue Shopping</Button>
          </Link>{' '}

          {items && !CartComponent.isEmpty(items) && <Button color="green">Check out</Button>}
        </section>
      </Container>
    );
  }
}

export default CartComponent;