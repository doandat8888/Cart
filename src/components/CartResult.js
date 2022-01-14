
import { Component } from 'react/cjs/react.production.min';

class CartResult extends Component {
    render() {
      var {carts} = this.props;
      var sum = 0;
      carts.map((cart) => {
          sum+= parseInt(cart.product.price) * cart.quantity;
      })
      return (
        <tr>
          <td colSpan="3"></td>
          <td>
            <h4>
              <strong>Tổng Tiền</strong>
            </h4>
          </td>
          <td>
            <h4>
              <strong>{sum}$</strong>
            </h4>
          </td>
          <td colSpan="3">
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
            >
              Complete purchase
              <i className="fa fa-angle-right right"></i>
            </button>
          </td>
        </tr>
      );
    }
}

export default CartResult;
