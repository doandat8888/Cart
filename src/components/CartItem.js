
import { Component } from 'react/cjs/react.production.min';
import * as messages from '../constants/Message';

class CartItem extends Component {

    onRemoveFromCart = (cart, type) => {
        this.props.onRemoveFromCart(cart);
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateUpCart = (cart) => {
        this.props.onUpdateUpCart(cart);
        this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
    }

    onUpdateDownCart = (cart) => {
        this.props.onUpdateDownCart(cart);
        this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
    }

    render() {
      var {cart} = this.props;
      return (
        <tr>
          <th scope="row">
            <img
              src= {cart.product.image}
              alt=""
              className="img-fluid z-depth-0"
            />
          </th>
          <td>
            <h5>
              <strong>{cart.product.name}</strong>
            </h5>
          </td>
          <td>{cart.product.price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{cart.quantity}</span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label
                className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                onClick={() => this.onUpdateDownCart(cart)}
              >
                <a>—</a>
              </label>
              <label
                className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                onClick={() => this.onUpdateUpCart(cart)}
              >
                <a>+</a>
              </label>
            </div>
          </td>
          <td>{parseInt(cart.product.price) * parseInt(cart.quantity)}$</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-primary waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Remove item"
              onClick={() => this.onRemoveFromCart(cart)}
            >
              X
            </button>
          </td>
        </tr>
      );
    }
}

export default CartItem;
